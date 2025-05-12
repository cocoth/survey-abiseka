import SurveyResult from '@/components/custom/SurveyResult';
import { GetSurveyById } from '@/lib/repo/surveyRepo';
import { HandleGetSurveyById } from '@/lib/services/surveyService';
import React from 'react'

const SurveyDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    if (!id) {
        return <div>Survey not found</div>;
    }

    const survey = await HandleGetSurveyById(id);
    const surveyData = survey?.data;

    return (
        <div>
            {survey ? (
                <SurveyResult data={surveyData} />
            ) : (
                <div className="flex justify-center items-center mt-10 mb-20">
                    <h1 className="text-2xl font-bold">Survey not found</h1>
                </div>
            )}
        </div>
    )
}

export default SurveyDetails