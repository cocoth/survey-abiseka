import { CreateBoardingUser, GetAllBoardingUsers } from "@/lib/repo/onBoardingRepo";
import { ValidateTokenWithJose } from "@/lib/token";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        const {
            nama,
            kode,
            akreditasi,
            tanggalBerdiri,
            noSKPendirian,
            tanggalSKPendirian,
            alamat,
        } : OnBoardingRequest = await req.json()

        if (!nama || !kode || !akreditasi || !tanggalBerdiri || !noSKPendirian || !tanggalSKPendirian || !alamat) {
            return NextResponse.json({
                status: 400,
                message: "all fields are required",
                data: null
            } as ResponseAPI, { status: 400 });
        }

        const token = req.cookies.get('session_token');

        if (!token) {
            return NextResponse.json({
            status: 401,
            message: "Unauthorized: userId cookie is missing",
            data: null
            } as ResponseAPI, { status: 401 });
        }

        const tokenValue = token.value;

        const validateToken = await ValidateTokenWithJose(tokenValue);

        if (!validateToken) {
            return NextResponse.json({
                status: 401,
                message: "Unauthorized: invalid token",
                data: null
            } as ResponseAPI, { status: 401 });
        }

        const userId = validateToken.id as string;

        const createOnBoarding = await CreateBoardingUser({
            nama,
            kode,
            akreditasi,
            tanggal_berdiri: tanggalBerdiri,
            no_SK_pendirian: noSKPendirian,
            tanggal_SK_pendirian: tanggalSKPendirian,
            alamat,
            userId,
        });

        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: {
                id: createOnBoarding.id,
                nama: createOnBoarding.nama,
                kode: createOnBoarding.kode,
                akreditasi: createOnBoarding.akreditasi,
                tanggal_berdiri: createOnBoarding.tanggal_berdiri,
                no_SK_pendirian: createOnBoarding.no_SK_pendirian,
                tanggal_SK_pendirian: createOnBoarding.tanggal_SK_pendirian,
                alamat: createOnBoarding.alamat,
                userId: createOnBoarding.userId,
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

export async function GET(req: NextRequest) {
    try {
        const boardingUser = await GetAllBoardingUsers()
        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: boardingUser
        } as ResponseAPI, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "internal server error",
            data: null
        } as ResponseAPI, { status: 500 });
    }
}