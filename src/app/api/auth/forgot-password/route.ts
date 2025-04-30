import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { User } from "@/lib/models/User/User";
import { sendEmail } from '@/lib/sendEmail'

export const POST = async (req: Request) => {
    try {
        await connectDB()
        const { email } = await req.json()

        if (!email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: 'No user found with this email' }, { status: 404 })
        }

        const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${btoa(email)}`

        await sendEmail({
            to: user.email,
            subject: 'Password Reset',
            html: `<p>You requested a password reset.</p><p><a href="${resetLink}">Reset Password</a></p><p>This link expires in 15 minutes.</p>`
        })

        return NextResponse.json({ message: 'Password reset link sent to email' })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'Server error' }, { status: 500 })
    }
};