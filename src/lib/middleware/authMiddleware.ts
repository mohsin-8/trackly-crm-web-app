import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req: NextRequest) => {
    const token = req.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string; role: string };
        const pathname = req.nextUrl.pathname;

        if (pathname.startsWith("/dashboard")) {
            const allowedRoles = ["admin", "sales", "support"];
            if (!allowedRoles.includes(decoded.role)) {
                return NextResponse.redirect(new URL("/unauthorized", req.url));
            }
        }

        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL("/login", req.url));
    }
};

export const config = {
    matcher: ["/dashboard/:path*"],
};