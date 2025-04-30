import { GetUserByEmail } from "@/lib/repo/userRepo";
import { CreateToken } from "@/lib/token";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({
                status: 400,
                message: "invalid email or password",
                data: null
            } as ResponseAPI , { status: 400 });
        }

        const user = await GetUserByEmail(email);
        if (!user) {
            return NextResponse.json({
                status: 400,
                message: "invalid email or password",
                data: null
            } as ResponseAPI, { status: 400 });
        }

        // Mock authentication logic
        if (password === user.password) {

            const response = NextResponse.json({
                status: 200,
                message: "Ok",
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    roleId: user.roleId,
                }
            })
            const token = CreateToken({
                id: user.id,
                name: user.name || "",
                email: user.email || "",
                roleId: user.roleId,
            })

            response.cookies.set("session_token", token, {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                maxAge: 60 * 60 * 24, // // 1 day
            })

            return response
        } else {
            return NextResponse.json({
                status: 400,
                message: "invalid email or password",
                data: null
            } as ResponseAPI, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "internal server error",
            data: null
        } as ResponseAPI, { status: 500 });
    }
}