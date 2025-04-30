export interface IUser {
    email: string;
    password: string;
    name: string;
    sudo_name: string;
    role?: "admin" | "sales" | "support" | "user";
    resetPasswordToken?: string;
    resetPasswordExpire?: Date | number;
};