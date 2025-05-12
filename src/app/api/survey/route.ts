import { CreateSurvey, GetAllSurveys, GetSurveyByStatus } from "@/lib/repo/surveyRepo";
import { ValidateTokenWithJose } from "@/lib/token";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const status = searchParams.get('status');
        const token = req.cookies.get('session_token');

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
            const surveyData = await GetSurveyByStatus("ACCEPTED");
            return NextResponse.json({
                status: 200,
                message: "Ok",
                data: {
                    ...surveyData,
                }
            } as ResponseAPI, { status: 200 });
        } else if (status === "REJECTED") {
            const surveyData = await GetSurveyByStatus("REJECTED");
            return NextResponse.json({
                status: 200,
                message: "Ok",
                data: {
                    ...surveyData,
                }
            } as ResponseAPI, { status: 200 });
        } else if (status === "PENDING") {
            const surveyData = await GetSurveyByStatus("PENDING");
            return NextResponse.json({
                status: 200,
                message: "Ok",
                data: {
                    ...surveyData,
                }
            } as ResponseAPI, { status: 200 });
        }
        const surveyData = await GetAllSurveys();

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


export async function POST(req: NextRequest){
    try {
        const data: SurveyRequest = await req.json()

        if (!data) {
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

        const createSurvey = await CreateSurvey({...data, userId});

        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: {
                ...createSurvey,
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