import mongoose, { Schema, Model, Document } from "mongoose";
import { IUser } from "@/lib/types/user";
import bcrypt from "bcryptjs";

export interface IUserDocument extends IUser, Document {
    comparePassword(candidate: string): Promise<boolean>;
};

const UserSchema: Schema<IUserDocument> = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    sudo_name: { type: String, required: true },
    role: { type: String, enum: ["admin", "sales", "support"], default: "user" },
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, { timestamps: true });

UserSchema.methods.comparePassword = async function (candidate: string): Promise<boolean> {
    return bcrypt.compare(candidate, this.password);
};

export const User: Model<IUserDocument> = mongoose.models.User || mongoose.model<IUserDocument>("User", UserSchema);