import { NextRequest, NextResponse } from "next/server";
import { Permissions } from "@/lib/models/Permissions/Permissions";
import { ModModule } from "@/lib/models/ModModel/ModModel";
import { connectDB } from "@/lib/db";
import mongoose from "mongoose";

export const POST = async (req: NextRequest) => {
    await connectDB();

    try {
        const { module_id, description } = await req.json();

        if (!mongoose.Types.ObjectId.isValid(module_id)) {
            return NextResponse.json({ message: "Invalid module ID" }, { status: 400 });
        }

        const moduleDoc = await ModModule.findById(module_id);
        if (!moduleDoc) {
            return NextResponse.json({ message: "Module not found" }, { status: 404 });
        }

        const newPermission = await Permissions.create({ module_id, description });

        return NextResponse.json(
            { message: "Permission is created successfully", newPermission },
            { status: 201 }
        );
    } catch (error) {
        console.error("POST /permissions error:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};

export const GET = async (req: NextRequest) => {
    await connectDB();

    try {
        const allPermissions = await Permissions.find().populate("module_id");

        return NextResponse.json(allPermissions, { status: 200 });
    } catch (error) {
        console.error("GET /permissions error:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};