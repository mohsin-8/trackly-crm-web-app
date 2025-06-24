import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const sessionUser = req.cookies.get("session_user")?.value;
    const { pathname } = req.nextUrl;

    const isAuthRoute = pathname === '/' || pathname.startsWith('/login');
    const isProtectedRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/settings') || pathname.startsWith('/admin');

    if (sessionUser && isAuthRoute) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    if (!sessionUser && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/dashboard/:path*',
        '/settings/:path*',
        '/admin/:path*',
    ],
};
