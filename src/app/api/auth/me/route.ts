import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/models/User/User";

const JWT_SECRET = process.env.JWT_SECRET!;

export const GET = async (req: NextRequest) => {
    await connectDB();

    const token = req.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const decoded: any = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user });
    } catch (err) {
        console.log("Error decoding token:", err);
        return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    };
};