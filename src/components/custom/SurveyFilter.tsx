"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Avatar from './Avatar'
import { Card } from '../ui/card'
import { HandleGetSurveyByStatus } from '@/lib/services/surveyService'
import AlertDialog from './AlertDialog'

interface SurveyProps {
    filter?: "PENDING" | "ACCEPTED" | "REJECTED" | ""
}

const SurveyFilter = (data: SurveyProps) => {
    const { filter } = data

    const [filteredSurvey, setFilteredSurvey] = useState<SurveyWithUserAndStatus[]>([])
    const [Error, setError] = useState("")

    if (!filteredSurvey) {
        return (
            <div className="flex justify-center items-center">
                <p className="text-lg text-gray-500">No data available</p>
            </div>
        )
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await HandleGetSurveyByStatus(filter)
            if (res && res.status !== 200) {
                setError(res.message)
            } else {
                const data: SurveyWithUserAndStatus[] = Object.values(res?.data || {})
                setFilteredSurvey(data)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            {Error&&(
                <AlertDialog
                    title="Error"
                    description={Error}
                    onClose={() => setError("")}
                    action={() => setError("")}
                />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSurvey.map((survey) => (
                    <Card
                        key={survey.id}
                        className="grid p-3 w-full max-w-md"
                    >
                        <section className='flex flex-col gap-5 w-full justify-center items-center'>
                            <div className="flex flex-col gap-2 w-full justify-center items-center">
                                <Avatar
                                    username={survey.User?.name || "Anonymous User"}
                                    className='h-20 w-20 rounded-full'
                                />
                                <p className='font-bold'>
                                    {survey.User?.name || "Anonymous User"}
                                </p>
                            </div>
                            <hr className='w-full border border-t border-gray-400' />
                            <div className="flex flex-col w-full justify-start">
                                <p className='flex gap-2 font-bold'>
                                    Universitas:
                                    <span className='font-normal'>
                                        {survey.User?.Data_PT?.nama || "Unknown Institution"}

                                    </span>
                                </p>
                                <p className='flex gap-2 font-bold'>
                                    Status:
                                    <span className={`font-normal ${survey.StatusSurvey?.status === "ACCEPTED" ? "text-green-500" : survey.StatusSurvey?.status === "REJECTED" ? "text-red-500" : "text-orange-300"}`}>
                                        {survey.StatusSurvey?.status || "PENDING"}
                                    </span>
                                </p>
                            </div>
                        </section>
                        <section className='flex w-full justify-center items-center'>
                            <Button
                                variant="outline"
                                onClick={() => window.location.href = `/dashboard/survey/${survey.id}`}
                                className='hover:bg-blue-500 hover:text-white cursor-pointer'
                            >
                                View Details
                            </Button>
                        </section>

                    </Card>
                ))}
            </div>
        </div>
    )
}

export default SurveyFilter