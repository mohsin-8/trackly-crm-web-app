import mongoose, { Schema, Model } from "mongoose";
import { Role } from "@/lib/types/roles";

const RolesSchema: Schema<Role> = new Schema({
    name: { type: String, required: true, unique: true }
}, { timestamps: true });

export const Roles: Model<Role> = mongoose.models.Role || mongoose.model("Role", RolesSchema);