import mongoose, { Schema, Model, Types } from "mongoose";

export interface PermissionDocument extends Document {
    module_id: Types.ObjectId;
    description: string;
};

const PermissionsSchema = new Schema<PermissionDocument>({
    module_id: { type: mongoose.Schema.Types.ObjectId, ref: "Module", required: true },
    description: {
        type: String, required: true, unique: true, trim: true
    }
}, { timestamps: true });

delete mongoose.models.Permission;

export const Permissions: Model<PermissionDocument> = mongoose.models.Permission || mongoose.model<PermissionDocument>("Permission", PermissionsSchema);