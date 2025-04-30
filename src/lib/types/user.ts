export interface IUser {
    isAdmin: boolean,
    email: string;
    password: string;
    name: string;
    sudo_name: string;
    resetPasswordToken?: string;
    resetPasswordExpire?: Date | number;
};