import { NextRequest, NextResponse } from "next/server";
import { verifyTokenFromCookies } from "@/lib/jwt";
import { User } from "@/lib/models/User/User";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";

export async function POST(req: NextRequest) {
    await connectDB();

    const token = await verifyTokenFromCookies(req);
    if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { oldPassword, newPassword, confirmPassword } = await req.json();

    if (!oldPassword || !newPassword || !confirmPassword) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (newPassword !== confirmPassword) {
        return NextResponse.json({ error: "New passwords do not match" }, { status: 400 });
    }

    if (newPassword.length < 6) {
        return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
    }

    const user = await User.findById(token.id);
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
        return NextResponse.json({ error: "Old password is incorrect" }, { status: 400 });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    const res = NextResponse.json({ message: "Password updated. You have been logged out." });

    res.cookies.set("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: new Date(0),
        path: "/",
    });

    return res;
};