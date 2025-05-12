import { CountAllSurvey, CountSurveyByStatus } from "@/lib/repo/surveyRepo";
import { ValidateTokenWithJose } from "@/lib/token";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
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

        if (status === "ACCEPTED") {
            const count = await CountSurveyByStatus("ACCEPTED");
            return NextResponse.json({
                status: 200,
                message: "Ok",
                data: { count }
            } as ResponseAPI, { status: 200 });
        } else if (status === "REJECTED") {
            const count = await CountSurveyByStatus("REJECTED");
            return NextResponse.json({
                status: 200,
                message: "Ok",
                data: { count }
            } as ResponseAPI, { status: 200 });
        }
        const count = await CountAllSurvey()

        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: { count }
        } as ResponseAPI, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
            data: null
        } as ResponseAPI, { status: 500 });
    }
}