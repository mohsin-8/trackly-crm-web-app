import { NextRequest, NextResponse } from "next/server";
import { Roles } from "@/lib/models/Roles/Roles";
import { connectDB } from "@/lib/db";
import { getAuthUser } from "@/lib/auth/getAuthUser";

export const POST = async (req: NextRequest) => {
    await connectDB();
    try {
        const { name } = await req.json();
        const user = await getAuthUser();
        if (!user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        
        const role = new Roles({ name });

        await role.save();

        return NextResponse.json({ message: "New Role is Created", role }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};

export const GET = async (req: NextRequest) => {
    await connectDB();
    try {
        const user = await getAuthUser();
        if (!user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const allRoles = await Roles.find();

        return NextResponse.json(allRoles);
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};