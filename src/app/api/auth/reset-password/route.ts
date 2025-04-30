import { resetUserPassword } from "@/lib/controllers/auth.controller"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
    try {
        const { token, password } = await req.json()

        if (!token || !password) {
            return NextResponse.json(
                { message: "Token and password are required." },
                { status: 400 }
            )
        }

        await resetUserPassword(token, password);

        return NextResponse.json({ message: "Password reset successful." })
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message || "Failed to reset password." },
            { status: 400 }
        )
    }
};