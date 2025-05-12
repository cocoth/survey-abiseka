import { GetSurveyByUserId, UpdateSurvey } from "@/lib/repo/surveyRepo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const survey = await GetSurveyByUserId(id);
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

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const survey = await UpdateSurvey(id, body);
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