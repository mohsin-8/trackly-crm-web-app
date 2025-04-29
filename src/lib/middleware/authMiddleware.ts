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

        if (pathname.startsWith("/admin") && decoded.role !== "admin") {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }

        if (pathname.startsWith("/sales") && decoded.role !== "sales") {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }

        if (pathname.startsWith("/support") && decoded.role !== "support") {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }

        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/admin/:path*", "/sales/:path*", "/support/:path*"],
};