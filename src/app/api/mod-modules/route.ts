import { NextRequest, NextResponse } from "next/server";
import { ModModule } from "@/lib/models/ModModel/ModModel";
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

        const modModule = new ModModule({ name });

        await modModule.save();

        return NextResponse.json({ message: "New Module is Created", modModule }, { status: 201 });
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
        
        const allModules = await ModModule.find();

        return NextResponse.json(allModules);
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};