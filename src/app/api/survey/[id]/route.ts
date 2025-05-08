import { DeleteSurvey, GetSurveyById, UpdateSurvey } from "@/lib/repo/surveyRepo";
import { ValidateTokenWithJose } from "@/lib/token";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const survey = await GetSurveyById(id);
        if (!survey) {
            return NextResponse.json({
                status: 404,
                message: "Not Found",
                data: null
            } as ResponseAPI, { status: 404 });
        }
        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: survey
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
        const survey = await UpdateSurvey(id, {
            ...data,
            userId
        });
        if (!survey) {
            return NextResponse.json({
                status: 404,
                message: "Not Found",
                data: null
            } as ResponseAPI, { status: 404 });
        }
        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: survey
        } as ResponseAPI, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "internal server error",
            data: null
        } as ResponseAPI, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const survey = await DeleteSurvey(id);
        if (!survey) {
            return NextResponse.json({
                status: 404,
                message: "Not Found",
                data: null
            } as ResponseAPI, { status: 404 });
        }
        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: survey
        } as ResponseAPI, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "internal server error",
            data: null
        } as ResponseAPI, { status: 500 });
    }

}
