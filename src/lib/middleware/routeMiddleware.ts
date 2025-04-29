import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { accessControl } from "../accessControl";

const JWT_SECRET = process.env.JWT_SECRET!;

export function routeMiddleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const token = req.cookies.get("token")?.value;

    let decoded: any = null;
    if (token) {
        try {
            decoded = jwt.verify(token, JWT_SECRET);
        } catch (err) {
            decoded = null;
        }
    }

    if (decoded && ["/", "/login"].includes(pathname)) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    if (!decoded && ["/", "/login"].includes(pathname)) {
        return NextResponse.next();
    }

    const matchedPath = Object.keys(accessControl).find((route) =>
        pathname.startsWith(route)
    );

    if (matchedPath) {
        if (!decoded) {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }

        const allowedRoles = accessControl[matchedPath];
        if (!allowedRoles.includes(decoded.role)) {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
        "/login",
        "/register",
        "/dashboard/:path*",
    ],
};