import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/models/User/User";
import bcrypt from "bcryptjs";
import { IUser } from "@/lib/types/user";

function validateUserInput({ email, password, name, sudo_name }: IUser) {
    if (!email || !password || !name || !sudo_name) {
        return "All fields are required";
    }
    if (password.length < 6) {
        return "Password must be at least 6 characters";
    }
    return null;
}

export const POST = async (req: NextRequest) => {
    await connectDB();

    try {
        const { email, password, name, sudo_name, isAdmin } = await req.json();

        const error = validateUserInput({ email, password, name, sudo_name });
        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            isAdmin,
            email,
            password: hashedPassword,
            name,
            sudo_name,
        });

        return NextResponse.json(
            {
                message: "User registered successfully",
                user: {
                    isAdmin: newUser.isAdmin,
                    id: newUser._id,
                    sudo_name: newUser.sudo_name,
                    email: newUser.email,
                },
            },
            { status: 201 }
        );
    } catch (err: any) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};