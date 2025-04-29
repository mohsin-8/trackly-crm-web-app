import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const res = NextResponse.json({ message: "Logged out successfully" });
    res.cookies.set("token", "", { httpOnly: true, secure: process.env.NODE_ENV === "production", maxAge: -1 });
    return res;
};