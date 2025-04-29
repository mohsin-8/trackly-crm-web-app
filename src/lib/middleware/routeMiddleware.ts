import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { accessControl } from "../accessControl";

const JWT_SECRET = process.env.JWT_SECRET!;

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const matchedPath = Object.keys(accessControl).find((route) =>
        pathname.startsWith(route)
    );

    if (!matchedPath) {
        return NextResponse.next();
    }

    const token = req.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    try {
        const decoded: any = jwt.verify(token, JWT_SECRET);
        const allowedRoles = accessControl[matchedPath];

        if (!allowedRoles.includes(decoded.role)) {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }

        return NextResponse.next();
    } catch (err) {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
};

export const config = {
    matcher: ["/dashboard/:path*", "/projects/:path*", "/crm/:path*"],
};