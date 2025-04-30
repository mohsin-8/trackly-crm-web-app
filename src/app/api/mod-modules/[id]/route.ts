import { NextRequest, NextResponse } from "next/server";
import { ModModule } from "@/lib/models/ModModel/ModModel";
import { connectDB } from "@/lib/db";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connectDB();
    try {
        const { id } = await params;

        const getModuleById = await ModModule.findById(id);

        if (!getModuleById) {
            return NextResponse.json({ message: "Module not found" }, { status: 404 });
        }

        return NextResponse.json(getModuleById);
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connectDB();

    try {
        const { id } = await params;

        const deleteModuleById = await ModModule.findByIdAndDelete(id);

        if (!deleteModuleById) {
            return NextResponse.json({ message: "Module not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Module is deleted successfully" });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};