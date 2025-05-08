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