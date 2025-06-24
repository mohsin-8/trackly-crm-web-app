import { NextResponse } from "next/server";

export const GET = async () => {
  const res = NextResponse.json({ message: "Logged out successfully" });
  res.cookies.set("session_user", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0),
  });
  return res;
};