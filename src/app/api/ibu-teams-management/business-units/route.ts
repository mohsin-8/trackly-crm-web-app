import { NextRequest, NextResponse } from "next/server";
import { BusinessUnits } from "@/lib/models/IbuTeamsManagement/BusinessUnits";
import { connectDB } from "@/lib/db";
import { getAuthUser } from "@/lib/auth/getAuthUser";

export const POST = async (req: NextRequest) => {
    await connectDB();
    try {
        const user = await getAuthUser();
        if (!user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { name } = await req.json();

        const business_units = new BusinessUnits({ name });

        await business_units.save();
        return NextResponse.json({ message: "Business Unit Created", business_units }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    };
};

export const GET = async (req: NextRequest) => {
    await connectDB();
    try {
        const user = await getAuthUser();
        if (!user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const get_business_unit = await BusinessUnits.find();

        return NextResponse.json(get_business_unit);
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    };
};