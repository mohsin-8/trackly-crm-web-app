import mongoose, { Schema, Model } from "mongoose";
import { Business_Units } from "@/lib/types/business_units";

const BusinessUnitsSchema: Schema<Business_Units> = new Schema({
    name: { type: String, required: true, unique: true }
}, { timestamps: true });

export const BusinessUnits: Model<Business_Units> = mongoose.models.BusinessUnits || mongoose.model("BusinessUnits", BusinessUnitsSchema);