import { NextRequest, NextResponse } from "next/server";
import { BusinessUnits } from "@/lib/models/IbuTeamsManagement/BusinessUnits";
import { connectDB } from "@/lib/db";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connectDB();

    try {
        const { id } = await params;

        const businessUnit = await BusinessUnits.findById(id);

        if (!businessUnit) {
            return NextResponse.json({ message: "Business Unit not found" }, { status: 404 });
        }

        return NextResponse.json(businessUnit);
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connectDB();

    try {
        const { id } = await params;

        const businessUnit = await BusinessUnits.findByIdAndDelete(id);

        if (!businessUnit) {
            return NextResponse.json({ message: "Business Unit not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Business Units is deleted successfully" });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};