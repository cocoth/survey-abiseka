import { GetUserByEmail, UpsertToken } from "@/lib/repo/userRepo";
import { CreateToken, CreateTokenWithJose } from "@/lib/token";
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
        console.log("User: ", user)

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
                    role: user.Role?.name,
                }
            })
            const token = await CreateTokenWithJose({
                id: user.id,
                name: user.name || "",
                email: user.email || "",
                role: user.Role?.name || "",
            })

            console.log("Token Login: ", token)

            // store token in the database

            await UpsertToken(user.id, token);

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