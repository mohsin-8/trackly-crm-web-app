import mongoose, { Schema, model, models } from "mongoose"

const passwordResetTokenSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    token: { type: String, required: true },
    expiresAt: { type: Date, required: true },
})

export const PasswordResetToken =
    models.PasswordResetToken || model("PasswordResetToken", passwordResetTokenSchema);