import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { Permissions } from "@/lib/models/Permissions/Permissions";
import { ModModule } from "@/lib/models/ModModel/ModModel";
import { connectDB } from "@/lib/db";
import { getAuthUser } from "@/lib/auth/getAuthUser";

export const POST = async (req: NextRequest) => {
    await connectDB();

    try {
        const user = await getAuthUser();
        if (!user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { module_id, description } = await req.json();

        if (!mongoose.Types.ObjectId.isValid(module_id)) {
            return NextResponse.json({ message: "Invalid module ID" }, { status: 400 });
        }

        const moduleDoc = await ModModule.findById(module_id);
        if (!moduleDoc) {
            return NextResponse.json({ message: "Module not found" }, { status: 404 });
        }

        const existingPermission = await Permissions.findOne({ module_id, description });
        if (existingPermission) {
            return NextResponse.json(
                { message: "This description is already saved under this module." },
                { status: 409 }
            );
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
        const user = await getAuthUser();
        if (!user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const allPermissions = await Permissions.find().populate("module_id");

        return NextResponse.json(allPermissions, { status: 200 });
    } catch (error) {
        console.error("GET /permissions error:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
};