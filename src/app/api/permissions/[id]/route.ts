import { NextRequest, NextResponse } from "next/server";
import { Permissions } from "@/lib/models/Permissions/Permissions";
import { connectDB } from "@/lib/db";
import { getAuthUser } from "@/lib/auth/getAuthUser";
import mongoose from "mongoose";

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const { id } = params;
    const user = await getAuthUser();
    const { module_id, description } = await req.json();

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!module_id || !description) {
      return NextResponse.json({ message: "module_id and description are required" }, { status: 400 });
    }

    const data = {
      module_id,
      description
    };

    const updatePermissionById = await Permissions.findByIdAndUpdate(id, data, { new: true });

    if (!updatePermissionById) {
      return NextResponse.json({ message: "Permission not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Permission is updated successfully" });
  } catch (error) {
    console.error("PUT /permissions error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const { id } = params;
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid permission ID" }, { status: 400 });
    }

    const permission = await Permissions.findById(id).populate("module_id");

    if (!permission) {
      return NextResponse.json({ message: "Permission not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Permission fetched successfully", permission });
  } catch (error) {
    console.error("GET /permissions/:id error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const { id } = params;
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid permission ID" }, { status: 400 });
    }

    const deletedPermission = await Permissions.findByIdAndDelete(id);

    if (!deletedPermission) {
      return NextResponse.json({ message: "Permission not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Permission deleted successfully" });
  } catch (error) {
    console.error("DELETE /permissions/:id error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};