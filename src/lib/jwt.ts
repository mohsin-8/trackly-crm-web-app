import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;

export const verifyTokenFromCookies = async (req?: Request) => {
    try {
        const token = req
            ? req.headers.get("cookie")?.split(";").find(c => c.trim().startsWith("token="))?.split("=")[1]
            : (await cookies()).get("token")?.value;

        if (!token) return null;

        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded as { id: string; role: string };
    } catch (error) {
        return null;
    }
};