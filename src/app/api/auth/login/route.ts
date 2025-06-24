import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/models/User/User";

export const POST = async (req: NextRequest) => {
    await connectDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email }) as { _id: any; isAdmin: boolean; comparePassword: (password: string) => Promise<boolean> };
    if (!user) return NextResponse.json({ error: "Email address is not registered" }, { status: 401 });

    const isValid = await user.comparePassword(password);
    if (!isValid) return NextResponse.json({ error: "Incorrect password" }, { status: 401 });

    const res = NextResponse.json({ message: "Login successful", isAdmin: user.isAdmin });

    res.cookies.set("session_user", user._id.toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
    });
    return res;
};