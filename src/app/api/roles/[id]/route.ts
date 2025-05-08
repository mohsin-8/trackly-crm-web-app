import { NextRequest, NextResponse } from "next/server";
import { Roles } from "@/lib/models/Roles/Roles";
import { connectDB } from "@/lib/db";

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connectDB();
    try {
        const { id } = await params;

        const deleteRoleById = await Roles.findByIdAndDelete(id);
        if (!deleteRoleById) {
            return NextResponse.json({ message: "Role not found" }, { status: 401 });
        }

        return NextResponse.json({ message: "Role is deleted successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connectDB();
    try {
        const { id } = await params;

        const getRoleById = await Roles.findById(id);
        if (!getRoleById) {
            return NextResponse.json({ message: "Role not found" }, { status: 401 });
        }

        return NextResponse.json(getRoleById);
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connectDB();
    try {
        const { id } = await params;
        const { name } = await req.json();

        if (!name) return NextResponse.json({ message: "role name is required" }, { status: 400 });

        const updateRoleName = await Roles.findByIdAndUpdate(id, { name }, { new: true });
        if (!updateRoleName) return NextResponse.json({ message: "role not found" });

        return NextResponse.json({ message: "Role updated successfully!" });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};