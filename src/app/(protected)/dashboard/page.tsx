"use client"

import Avatar from "@/components/custom/Avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HandleCountSurvey, HandleGetSurveyByStatus } from "@/lib/services/surveyService"
import { ChartColumnIncreasing, CircleDotDashed, ClipboardCheck, ClipboardList, ClipboardX } from "lucide-react"
import { useEffect, useState } from "react"



const DashboardPage = () => {
  const [totalSurvey, setTotalSurvey] = useState<number>(0)
  const [totalSurveyAccepted, setTotalSurveyAccepted] = useState<number>(0)
  const [totalSurveyRejected, setTotalSurveyRejected] = useState<number>(0)
  const [totalSurveyPending, setTotalSurveyPending] = useState<number>(0)
  const [totalUniversitas, setTotalUniversitas] = useState<number>(0)

  const [pendingSurvey, setPendingSurvey] = useState<SurveyWithUserAndStatus[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [all, acc, rj] = await Promise.all([
          HandleCountSurvey(),
          HandleCountSurvey("ACCEPTED"),
          HandleCountSurvey("REJECTED"),
        ])
        if (all && all.status === 200) {
          setTotalSurvey(all.data.count)
          setTotalSurveyAccepted(acc?.data.count)
          setTotalSurveyRejected(rj?.data.count)
          setTotalSurveyPending(all.data.count - acc?.data.count - rj?.data.count)
        } else {
          setError(all?.message || "Failed to fetch total survey.")
        }
      } catch (error) {
        setError("Something went wrong")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        setLoading(true)
        const res = await HandleGetSurveyByStatus("PENDING")
        if (res && res.status === 200) {
          const data: SurveyWithUserAndStatus[] = Object.values(res?.data || {})
          console.log("Pending Survey:", data)
          setPendingSurvey(data)
        } else {
          setError(res?.message || "Failed to fetch total survey.")
        }
      } catch (error) {
        setError("Something went wrong")
      } finally {
        setLoading(false)
      }
    }
    fetchStatus()
  }, [])


  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {loading && (
        <div className="flex justify-center items-center">
          <p className="text-lg text-gray-500">Loading...</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-6">
        <Card className="grid p-10 shadow-md shadow-gray-400">
          <section className="flex w-full justify-center">
            <h1 className="flex justify-around items-center gap-3 text-xl font-bold">
              Total Survey
              <span>
                <ClipboardList className="h-10 w-10" />
              </span>
            </h1>
          </section>
          <section className="">
            <p className="text-4xl font-bold text-center mt-2">
              {totalSurvey}
            </p>
          </section>
        </Card>
        <Card
          onClick={() => window.location.href = `/dashboard/survey/page/ACCEPTED`}
          className="grid p-10 shadow-md shadow-gray-400 cursor-pointer">
          <section className="flex w-full justify-center">
            <h1 className="flex justify-around items-center gap-3 text-xl font-bold">
              Accepted Survey
              <span>
                <ClipboardCheck className="h-10 w-10" />
              </span>
            </h1>
          </section>
          <section className="">
            <p className="text-4xl font-bold text-center mt-2">
              {totalSurveyAccepted}
            </p>
          </section>
        </Card>
        <Card
          onClick={() => window.location.href = `/dashboard/survey/page/REJECTED`}
          className="grid p-10 shadow-md shadow-gray-400 cursor-pointer"
        >
          <section className="flex w-full justify-center">
            <h1 className="flex justify-around items-center gap-3 text-xl font-bold">
              Rejected Survey
              <span>
                <ClipboardX className="h-10 w-10" />
              </span>
            </h1>
          </section>
          <section className="">
            <p className="text-4xl font-bold text-center mt-2">
              {totalSurveyRejected}
            </p>
          </section>
        </Card>
        <Card
          onClick={() => window.location.href = `/dashboard/survey/page/PENDING`}
          className="grid p-10 shadow-md shadow-gray-400 cursor-pointer"
        >
          <section className="flex w-full justify-center">
            <h1 className="flex justify-around items-center gap-3 text-xl font-bold">
              Pending Survey
              <span>
                <CircleDotDashed className="h-10 w-10" />
              </span>
            </h1>
          </section>
          <section className="">
            <p className="text-4xl font-bold text-center mt-2">
              {totalSurveyPending}
            </p>
          </section>
        </Card>
      </div>

      <div className="container">
        <Card className="grid p-10 shadow-md shadow-gray-400 mt-6">
          <h1 className="font-bold text-2xl">
            New Survey
          </h1>
          <section>
            {pendingSurvey.length > 0 ? (
              <div className="grid w-full">
                {pendingSurvey.map((survey) => (
                  <Card
                    key={survey.id}
                    className="flex w-full flex-row justify-between items-center p-3"
                  >
                    <section className="flex gap-4 items-center">
                      <Avatar
                        username={survey.User?.name || "Anonymous User"}
                        className='h-20 w-20 rounded-full'
                      />
                      <div className="flex flex-col gap-3">
                        <p className='flex gap-2 font-bold'>
                          Name:
                          <span className='font-normal'>
                            {survey.User?.name || "Anonymous User"}
                          </span>
                        </p>
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
                    <section className="mx-4">
                      <Button
                        onClick={() => window.location.href = `/dashboard/survey/${survey.id}`}
                        className="w-full hover:bg-gray-800 bg-gray-700 font-bold py-2 px-4 rounded-lg mt-4 cursor-pointer"
                      >
                        View
                      </Button>
                    </section>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center mt-10 mb-20">
                <h1 className="text-xl font-bold">No New Survey</h1>
              </div>
            )}
          </section>
        </Card>
      </div>

    </div>
  )
}

export default DashboardPage