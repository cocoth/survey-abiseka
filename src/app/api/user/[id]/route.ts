import { User } from "@/generated/prisma";
import { GetUserById } from "@/lib/repo/userRepo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const data = await GetUserById(id);
        if (!data) {
            return NextResponse.json({
                status: 404,
                message: "user not found",
                data: null
            } as ResponseAPI, { status: 404 });
        }
        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: data as User
        } as ResponseAPI, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "internal server error",
            data: null
        } as ResponseAPI, { status: 500 });
    }
}