import { GetBoardingUserByUserId, UpdateBoardingUser } from "@/lib/repo/onBoardingRepo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const boardingUser = await GetBoardingUserByUserId(id);
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
                ...boardingUser
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

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        const data = await req.json();

        console.log("Data: ", data)
        if (!data) {
            return NextResponse.json({
                status: 400,
                message: "invalid data",
                data: null
            } as ResponseAPI, { status: 400 });
        }

        const mappedData = {
            nama: data.nama,
            kode: data.kode,
            akreditasi: data.akreditasi,
            tanggal_berdiri: data.tanggalBerdiri,
            no_SK_pendirian: data.noSKPendirian,
            tanggal_SK_pendirian: data.tanggalSKPendirian,
            alamat: data.alamat,

        }
        const boardingUser = await GetBoardingUserByUserId(id);
        if (!boardingUser) {
            return NextResponse.json({
                status: 404,
                message: "onboarding user not found",
                data: null
            } as ResponseAPI, { status: 404 });
        }
        const updatedBoardingUser = await UpdateBoardingUser(boardingUser.id, mappedData);
        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: {
                ...updatedBoardingUser
            }
        } as ResponseAPI, { status: 200 });
    } catch (error) {
        console.log("Error Update Onboarding: ", error)
        return NextResponse.json({
            status: 500,
            message: "internal server error",
            data: null
        } as ResponseAPI, { status: 500 });
    }
}