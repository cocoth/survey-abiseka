import { NextRequest, NextResponse } from "next/server";
import { HandleGetOnBoardingUserByUserId } from "./lib/services/onBoardingService";
import { CreateToken, CreateTokenWithJose, ValidateTokenWithJose } from "./lib/token";
import { UpsertToken } from "./lib/repo/userRepo";

export async function middleware(req: NextRequest) {
    console.log("Middleware running...");

    const token = req.cookies.get("session_token")?.value || null;
    const refreshToken = req.cookies.get("refresh_token")?.value || null;
    
    // Validate token if it exists
    try {
        const isAuth = token !== null;
        const isTokenValid = token ? await ValidateTokenWithJose(token) : null;
    
        // Define paths that don't require authentication
        const publicPaths = ["/auth/login", "/auth/register"];
        const isPublicPath = publicPaths.includes(req.nextUrl.pathname);
    
        // Redirect to login if no token and not on a public path
        if (!isAuth && !isTokenValid && !isPublicPath) {
            return NextResponse.redirect(new URL("/auth/login", req.url));
        }

        if (refreshToken && !isTokenValid) {
            if (refreshToken) {

                const refreshTokenValid = await ValidateTokenWithJose(refreshToken);

                if (refreshTokenValid) {
                    const newToken = await CreateTokenWithJose({
                        id: refreshTokenValid.id as string,
                        name: refreshTokenValid.name as string,
                        email: refreshTokenValid.email as string,
                        role: refreshTokenValid.role as string,
                    });

                    await UpsertToken(refreshTokenValid.id as string, newToken);

                    const response = NextResponse.redirect(req.url);

                    response.cookies.set("refresh_token", newToken, {
                        httpOnly: true,
                        sameSite: "lax",
                        path: "/",
                        maxAge: 60 * 60 * 24 // 1 day
                    });

                    return response;
                }
            }
            return NextResponse.redirect(new URL("/auth/login", req.url));
        }

        if (isTokenValid) {
            const role = isTokenValid.role as string;
             // Prevent admin from accessing /home
             if (role === "admin" && req.nextUrl.pathname.startsWith("/home")) {
                return NextResponse.redirect(new URL("/dashboard", req.url));
            }

            // Prevent user from accessing /dashboard
            if (role === "user" && req.nextUrl.pathname.startsWith("/dashboard")) {
                return NextResponse.redirect(new URL("/home", req.url));
            }

            // Redirect admin to /dashboard
            if (role === "admin" && req.nextUrl.pathname === "/") {
                return NextResponse.redirect(new URL("/dashboard", req.url));
            }

            // Redirect user to /home
            if (role === "user" && req.nextUrl.pathname === "/") {
                return NextResponse.redirect(new URL("/home", req.url));
            }
        }

        // Fetch onboarding status
        if (isTokenValid && isTokenValid.role !== "admin") {
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
    } catch (error) {
        console.error("Error in middleware: ", error);
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }
}

export const config = {
    matcher: [
        "/",
        "/(protected)/(.*)",
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};