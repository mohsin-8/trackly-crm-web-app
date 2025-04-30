import mongoose, { Schema, Model } from "mongoose";
import { roles } from "@/lib/types/roles";

const RolesSchema: Schema<roles> = new Schema({
    name: { type: String, required: true, unique: true }
}, { timestamps: true });

export const Roles: Model<roles> = mongoose.models.Role || mongoose.model("Role", RolesSchema);