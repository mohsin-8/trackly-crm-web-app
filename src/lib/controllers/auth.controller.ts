import { PasswordResetToken } from "../models/User/PasswordResetToken.model"
import { User } from "../models/User/User"
import bcrypt from "bcryptjs"

export async function resetUserPassword(token: string, newPassword: string) {
    const user = await User.findOne({ email: atob(token) });

    if (!user) {
        throw new Error("User not found.")
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12)

    user.password = hashedPassword
    
    await user.save();

    return user;
};