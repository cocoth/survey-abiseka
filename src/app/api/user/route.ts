import { GetAllUsers } from "@/lib/repo/userRepo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const data = await GetAllUsers()
        return NextResponse.json({
            status: 200,
            message: "Ok",
            data
        } as ResponseAPI, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "internal server error",
            data: null
        } as ResponseAPI, { status: 500 });
        
    }

}