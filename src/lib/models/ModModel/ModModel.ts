import mongoose, { Schema, Model } from "mongoose";
import { mod_modules } from "@/lib/types/mod_modules";

const ModModuleSchema: Schema<mod_modules> = new Schema({
    name: { type: String, required: true, unique: true }
}, { timestamps: true });

export const ModModule: Model<mod_modules> = mongoose.models.Module || mongoose.model("Module", ModModuleSchema);