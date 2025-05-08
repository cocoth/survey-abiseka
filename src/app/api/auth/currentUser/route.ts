import { GetUserById } from "@/lib/repo/userRepo";
import { ValidateTokenWithJose } from "@/lib/token";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {

        const token = req.cookies.get("session_token")?.value || null;
        console.log("token api: ", token);
        if (!token) {
            return NextResponse.json({
                status: 401,
                message: "unauthorized",
                data: null
            } as ResponseAPI, { status: 401 });
        }

        const decodedToken = await ValidateTokenWithJose(token);
        console.log("decodedToken: ", decodedToken);
        if (!decodedToken) {
            return NextResponse.json({
                status: 401,
                message: "unauthorized",
                data: null
            } as ResponseAPI, { status: 401 });
        }

        const userId = decodedToken.id as string;

        if (!userId) {
            return NextResponse.json({
                status: 401,
                message: "unauthorized",
                data: null
            } as ResponseAPI, { status: 401 });
        }
        const res = await GetUserById(userId);
        if (!res) {
            return NextResponse.json({
                status: 404,
                message: "user not found",
                data: null
            } as ResponseAPI, { status: 404 });
        }
        
        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: {
                ...res
            }
        } as ResponseAPI, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "internal server error",
            data: null
        } as ResponseAPI, { status: 500 })
    }

} 