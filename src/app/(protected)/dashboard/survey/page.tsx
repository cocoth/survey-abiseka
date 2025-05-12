"use client"
import AlertDialog from '@/components/custom/AlertDialog'
import Avatar from '@/components/custom/Avatar'
import SurveyFilter from '@/components/custom/SurveyFilter'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { StatusSurvey, Survey, User } from '@/generated/prisma'
import { HandleGetSurvey } from '@/lib/services/surveyService'
import { useEffect, useState } from 'react'

const SurveyPageAdmin = () => {
    const [surveyData, setSurveyData] = useState<SurveyWithUserAndStatus[] | null>(null)
    const [user, setUser] = useState<User[] | null>(null)
    const [status, setStatus] = useState<StatusSurvey[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const res = await HandleGetSurvey()
                if (res && res.status !== 200) {
                    setError(res.message)
                }
                const data: SurveyWithUserAndStatus[] = Object.values(res?.data || {})
                setSurveyData(data)
            } catch (error) {
                setError("Something went wrong")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">
                Survey Dashboard
            </h1>
            {loading && (
                <div className="flex justify-center items-center">
                    <p className="text-lg text-gray-500">Loading...</p>
                </div>
            )}
            {error && (
                <AlertDialog
                    title="Error"
                    description={error}
                    onClose={() => setError("")}
                    action={() => setError("")}
                />
            )}
            <SurveyFilter filter='PENDING'/>
        </div>
    )
}

export default SurveyPageAdmin