import { NextRequest, NextResponse } from "next/server";
import { HandleGetOnBoardingUserByUserId } from "./lib/services/onBoardingService";
import { CreateToken, ValidateTokenWithJose } from "./lib/token";

export async function middleware(req: NextRequest) {
    console.log("Middleware running...");

    const token = req.cookies.get("session_token")?.value || null;
    const isAuth = token !== null;
    
    // Validate token
    const isTokenValid = token ? await ValidateTokenWithJose(token) : null;
    console.log("isTokenValid: ", isTokenValid);
    console.log("Token: ", token);
    
    // Redirect to login if token is invalid
    if (!isTokenValid) {
        const refreshToken = req.cookies.get("refresh_token")?.value || null;
        if (refreshToken) {
            const refreshTokenValid = await ValidateTokenWithJose(refreshToken)
            if (refreshTokenValid) {
                const newToken = CreateToken({
                    id: refreshTokenValid.id as string,
                    name: refreshTokenValid.name as string,
                    email: refreshTokenValid.email as string,
                    roleId: refreshTokenValid.roleId as string,
                });
                const response = NextResponse.redirect(req.url)
                response.cookies.set("session_token", newToken, {
                    httpOnly: true,
                    sameSite: "lax",
                    path: "/",
                    maxAge: 60 * 60 , // 1 hour
                });
                return response
            } 
        }
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    // Fetch onboarding status
    const onboarding = await HandleGetOnBoardingUserByUserId(isTokenValid.id as string);
    console.log("Onboard: ", JSON.stringify(onboarding));

    // Redirect to onboarding if necessary
    if (onboarding?.status !== 200 && req.nextUrl.pathname !== "/auth/onboarding") {
        return NextResponse.redirect(new URL("/auth/onboarding", req.url));
    }

    if (req.nextUrl.pathname === "/auth/onboarding") {
        return NextResponse.next();
    }

    // Handle unauthenticated access
    if (!isAuth) {
        if (req.nextUrl.pathname.startsWith("/auth")) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL("/auth/login", req.url));
        }
    }

    // Prevent authenticated users from accessing auth pages
    const isAuthPage = ["/auth/login", "/auth/register", "/auth/onboarding"].includes(req.nextUrl.pathname);
    if (isAuthPage) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    // Allow access to other pages
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};