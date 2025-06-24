import { cookies } from "next/headers";

export const getAuthUser = async () => {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("session_user");

    if (!userCookie) return null;
    return JSON.parse(userCookie.value);
};