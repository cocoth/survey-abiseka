import { GetBoardingUserByUserId } from "@/lib/repo/onBoardingRepo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const boardingUser = await GetBoardingUserByUserId(id);
        console.log("boardingUser: ", boardingUser);
        if (!boardingUser) {
            return NextResponse.json({
                status: 404,
                message: "onboarding user not found",
                data: null
            } as ResponseAPI, { status: 404 });
        }
        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: {
                id: boardingUser.id,
                nama: boardingUser.nama,
                kode: boardingUser.kode,
                akreditasi: boardingUser.akreditasi,
                tanggal_berdiri: boardingUser.tanggal_berdiri,
                no_SK_pendirian: boardingUser.no_SK_pendirian,
                tanggal_SK_pendirian: boardingUser.tanggal_SK_pendirian,
                alamat: boardingUser.alamat,
                userId: boardingUser.userId,
            }
        } as ResponseAPI, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "internal server error",
            data: null
        } as ResponseAPI, { status: 500 });
    }
}