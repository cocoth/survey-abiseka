import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {

    console.log("Middleware running...");
    const token = req.cookies.get("session_token")?.value || null;

    const isAuth = token !== null;

    if (!isAuth) {
        if (req.nextUrl.pathname.startsWith("/auth")) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL("/auth/login", req.url));
        }
    }

    const isLoginPage = req.nextUrl.pathname === "/auth/login";
    const isRegisterPage = req.nextUrl.pathname === "/auth/register";

    if (isLoginPage || isRegisterPage) {
        return NextResponse.redirect(new URL("/", req.url));
    }

}

export const config = {
    matcher: [
        "/",
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ]
}