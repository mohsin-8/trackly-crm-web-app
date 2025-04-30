import { NextRequest, NextResponse } from "next/server";
import { Permissions } from "@/lib/models/Permissions/Permissions";
import { ModModule } from "@/lib/models/ModModel/ModModel";
import { connectDB } from "@/lib/db";

export const POST = async (req: NextRequest) => {
    await connectDB();
    try {
        const { module_id, name, description } = await req.json();

        const moduleId = await ModModule.findById(module_id);
        if (!moduleId) return NextResponse.json({ message: "Module not found" });

        const newPermission = new Permissions({ module_id, name, description });

        await newPermission.save();

        return NextResponse.json({ message: "Permission is created successfully", newPermission }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};