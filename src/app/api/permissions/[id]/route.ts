import { NextRequest, NextResponse } from "next/server";
import { Permissions } from "@/lib/models/Permissions/Permissions";
import { connectDB } from "@/lib/db";

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connectDB();
    try {
        const { id } = await params;

        const deletePermissionById = await Permissions.findByIdAndDelete(id);
        if (!deletePermissionById) {
            return NextResponse.json({ message: "Permission not found" }, { status: 401 });
        }

        return NextResponse.json({ message: "Permission is deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connectDB();

    try {
        const { id } = await params;
        const { name, description, module_id } = await req.json();

        const data = { name, description, module_id };

        if (!data) return NextResponse.json({ message: "permissions field is required" }, { status: 400 });

        const updatePermissionById = await Permissions.findByIdAndUpdate(id, data, { new: true });

        if (!updatePermissionById) {
            return NextResponse.json({ message: "Permission not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Permission is updated successfully" });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connectDB();
    try {
        const { id } = await params;

        const getPermissionById = await Permissions.findById(id);

        if (!getPermissionById) {
            return NextResponse.json({ message: "Permission not found" }, { status: 404 });
        }

        return NextResponse.json(getPermissionById);
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};