import { GetSurveyById, UpsertStatusSurvey } from "@/lib/repo/surveyRepo";
import { ValidateTokenWithJose } from "@/lib/token";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const accId = searchParams.get('acc');
        const rejectId = searchParams.get('reject');

        const token = request.cookies.get('session_token');
        if (!token) {
            return NextResponse.json({
                status: 401,
                message: "Unauthorized",
                data: null
            } as ResponseAPI, { status: 401 });
        }

        const tokenValue = token.value;
        const validateToken = await ValidateTokenWithJose(tokenValue);
        if (!validateToken) {
            return NextResponse.json({
                status: 401,
                message: "Unauthorized",
                data: null
            } as ResponseAPI, { status: 401 });
        }

        const userId = validateToken.id as string;
        if (!accId && !rejectId) {
            return NextResponse.json({
                status: 400,
                message: "Bad Request: Missing 'acc' or 'reject' parameter",
                data: null
            } as ResponseAPI, { status: 400 });
        }

        if (accId) {
            await UpsertStatusSurvey(accId, "ACCEPTED");
        } else if (rejectId) {
            await UpsertStatusSurvey(rejectId, "REJECTED");
        }
        
        const surveyData = await GetSurveyById(accId || rejectId!);

        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: {
                ...surveyData,
            }
        } as ResponseAPI, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
            data: null
        } as ResponseAPI, { status: 500 });
    }

}