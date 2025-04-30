import mongoose, { Schema, Model } from "mongoose";
import { permissions } from "@/lib/types/permissions";

const PermissionsSchema: Schema<permissions> = new Schema({
    module_id: { type: mongoose.Schema.Types.ObjectId, ref: "Module", required: true },
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true }
}, { timestamps: true });

export const Permissions: Model<permissions> = mongoose.models.Permission || mongoose.model("Permission", PermissionsSchema);