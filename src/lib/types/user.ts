// types/user.ts
export interface IUser {
    email: string;
    password: string;
    name: string;
    sudo_name: string;
    role?: "admin" | "sales" | "support" | "user";
};