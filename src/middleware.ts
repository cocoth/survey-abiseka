import { NextRequest, NextResponse } from "next/server";
import { HandleGetOnBoardingUserByUserId } from "./lib/services/onBoardingService";
import { CreateToken, ValidateTokenWithJose } from "./lib/token";
import { UpsertToken } from "./lib/repo/userRepo";

export async function middleware(req: NextRequest) {
    console.log("Middleware running...");

    const token = req.cookies.get("session_token")?.value || null;
    const isAuth = token !== null;

    // Define paths that don't require authentication
    const publicPaths = ["/auth/login", "/auth/register"];
    const isPublicPath = publicPaths.includes(req.nextUrl.pathname);

    // Redirect to login if no token and not on a public path
    if (!isAuth && !isPublicPath) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    // Validate token if it exists
    const isTokenValid = token ? await ValidateTokenWithJose(token) : null;

    if (isAuth && !isTokenValid) {
        const refreshToken = req.cookies.get("refresh_token")?.value || null;
        if (refreshToken) {
            const refreshTokenValid = await ValidateTokenWithJose(refreshToken);
            if (refreshTokenValid) {
                const newToken = CreateToken({
                    id: refreshTokenValid.id as string,
                    name: refreshTokenValid.name as string,
                    email: refreshTokenValid.email as string,
                    roleId: refreshTokenValid.roleId as string,
                });
                // await UpsertToken(refreshTokenValid.id as string, newToken);
                const response = NextResponse.redirect(req.url);
                response.cookies.set("session_token", newToken, {
                    httpOnly: true,
                    sameSite: "lax",
                    path: "/",
                    maxAge: 60 * 60, // 1 hour
                });
                return response;
            }
        }
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    // Fetch onboarding status
    if (isTokenValid) {
        const onboarding = await HandleGetOnBoardingUserByUserId(isTokenValid.id as string);
        console.log("Onboard: ", JSON.stringify(onboarding));

        // Redirect to onboarding if necessary
        if (onboarding?.status !== 200 && req.nextUrl.pathname !== "/auth/onboarding") {
            return NextResponse.redirect(new URL("/auth/onboarding", req.url));
        }

        // Allow access to onboarding page
        if (req.nextUrl.pathname === "/auth/onboarding") {
            return NextResponse.next();
        }
    }

    // Prevent authenticated users from accessing auth pages
    if (isAuth && publicPaths.includes(req.nextUrl.pathname)) {
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