import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const response = NextResponse.json({ 
        status: 200,
        message: "Ok",
        data: null
     }as ResponseAPI, { status: 200 });
    response.cookies.set("session_token", "", { maxAge: 0, path: "/" });
    return response;
}
