import { cookies } from "next/headers";
import { User } from "@/lib/models/User/User";

export const getAuthUser = async () => {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("session_user");

  if (!userCookie) return null;

  const user = await User.findById(userCookie.value).select("_id email isAdmin");
  return user || null;
};