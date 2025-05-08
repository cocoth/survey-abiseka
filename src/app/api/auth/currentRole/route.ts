import { ValidateTokenWithJose } from "@/lib/token";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const token = request.cookies.get("session_token")?.value || null;
    const refreshToken = request.cookies.get("refresh_token")?.value || null;

    // Validate token if it exists
    try {
        const isAuth = token !== null;
        const isTokenValid = token ? await ValidateTokenWithJose(token) : null;
        const isRefreshTokenValid = refreshToken ? await ValidateTokenWithJose(refreshToken) : null;

        if (!isAuth && !isTokenValid && !isRefreshTokenValid) {
            return NextResponse.json({
                status: 401,
                message: "Unauthorized",
                data: null,
            } as ResponseAPI, { status: 401 });
        }

        if (isTokenValid) {
            return NextResponse.json({
                status: 200,
                message: "Ok",
                data: {
                    id: isTokenValid.id,
                    name: isTokenValid.name,
                    email: isTokenValid.email,
                    role: isTokenValid.role,
                },
            } as ResponseAPI, { status: 200 });
        }

        if (isRefreshTokenValid) {
            return NextResponse.json({
                status: 200,
                message: "Ok",
                data: {
                    id: isRefreshTokenValid.id,
                    name: isRefreshTokenValid.name,
                    email: isRefreshTokenValid.email,
                    role: isRefreshTokenValid.role,
                },
            } as ResponseAPI, { status: 200 });
        }
        return NextResponse.json({
            status: 401,
            message: "Unauthorized",
            data: null,
        } as ResponseAPI, { status: 401 });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal server error",
            data: null,
        } as ResponseAPI, { status: 500 });
    }
}