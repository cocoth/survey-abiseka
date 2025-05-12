"use client"
import AlertDialog from '@/components/custom/AlertDialog'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { HandleCreateSurvey, HandleGetSurveyByUserId, HandleUpdateSurvey } from '@/lib/services/surveyService'
import { HandleGetCurrentUser } from '@/lib/services/userService'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const formSchema = z.object({
    kecepatan_internet: z.string().min(1, { message: "Kecepatan internet harus diisi" }),
    provider_internet: z.string().min(1, { message: "Provider internet harus diisi" }),
    jenis_internet: z.string().min(1, { message: "Jenis internet harus diisi" }),
    jumlah_komputer: z.string().min(1, { message: "Jumlah komputer harus diisi" }),
    jenis_komputer: z.string().min(1, { message: "Jenis komputer harus diisi" }),
    spesifikasi_komputer: z.string().min(1, { message: "Spesifikasi komputer harus diisi" }),
    jumlah_laboratorium: z.string().min(1, { message: "Jumlah laboratorium harus diisi" }),
    jenis_laboratorium: z.string().min(1, { message: "Jenis laboratorium harus diisi" }),
    pendinginan_laboratorium: z.string().min(1, { message: "Pendinginan laboratorium harus diisi" }),
})


const SurveyPageUser = () => {
    const [existingSurveyData, setExistingSurveyData] = useState<SurveyWithUserAndStatus | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>("")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            kecepatan_internet: "",
            provider_internet: "",
            jenis_internet: "",
            jumlah_komputer: "",
            jenis_komputer: "",
            spesifikasi_komputer: "",
            jumlah_laboratorium: "",
            jenis_laboratorium: "",
            pendinginan_laboratorium: ""
        }
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        let res: any = null
        if (existingSurveyData) {
            res = await HandleUpdateSurvey(existingSurveyData.id, {
                kecepatan_internet: data.kecepatan_internet,
                provider_internet: data.provider_internet,
                jenis_internet: data.jenis_internet,
                jumlah_komputer: data.jumlah_komputer,
                jenis_komputer: data.jenis_komputer,
                spesifikasi_komputer: data.spesifikasi_komputer,
                jumlah_laboratorium: data.jumlah_laboratorium,
                jenis_laboratorium: data.jenis_laboratorium,
                pendinginan_laboratorium: data.pendinginan_laboratorium
            })
        } else {
            res = await HandleCreateSurvey({
                kecepatan_internet: data.kecepatan_internet,
                provider_internet: data.provider_internet,
                jenis_internet: data.jenis_internet,
                jumlah_komputer: data.jumlah_komputer,
                jenis_komputer: data.jenis_komputer,
                spesifikasi_komputer: data.spesifikasi_komputer,
                jumlah_laboratorium: data.jumlah_laboratorium,
                jenis_laboratorium: data.jenis_laboratorium,
                pendinginan_laboratorium: data.pendinginan_laboratorium
            })
        }
        // const res = await HandleCreateSurvey({
        //     kecepatan_internet: data.kecepatan_internet,
        //     provider_internet: data.provider_internet,
        //     jenis_internet: data.jenis_internet,
        //     jumlah_komputer: data.jumlah_komputer,
        //     jenis_komputer: data.jenis_komputer,
        //     spesifikasi_komputer: data.spesifikasi_komputer,
        //     jumlah_laboratorium: data.jumlah_laboratorium,
        //     jenis_laboratorium: data.jenis_laboratorium,
        //     pendinginan_laboratorium: data.pendinginan_laboratorium
        // })
        if (res && res.status === 200) {
            window.location.reload()
        } else {
            setError("Something went wrong")
        }

        console.log("Response: ", res)
    }

    useEffect(() => {
        setLoading(true)
        const fetchSurveyData = async () => {
            try {
                const user = await HandleGetCurrentUser()
                if (!user || !user.data.id) {
                    setError("User not found.")
                    return
                }
                const survey = await HandleGetSurveyByUserId(user.data.id)
                if (survey && survey.status === 200) {
                    setExistingSurveyData(survey.data)
                    form.reset({
                        kecepatan_internet: survey.data.kecepatan_internet,
                        provider_internet: survey.data.provider_internet,
                        jenis_internet: survey.data.jenis_internet,
                        jumlah_komputer: survey.data.jumlah_komputer,
                        jenis_komputer: survey.data.jenis_komputer,
                        spesifikasi_komputer: survey.data.spesifikasi_komputer,
                        jumlah_laboratorium: survey.data.jumlah_laboratorium,
                        jenis_laboratorium: survey.data.jenis_laboratorium,
                        pendinginan_laboratorium: survey.data.pendinginan_laboratorium
                    })
                }
            } catch (error) {
                setError("Something went wrong")
            } finally {
                setLoading(false)
            }
        }
        fetchSurveyData()
    }, [])

    const renderFormFields = () => {
        const fields = [
            { name: "kecepatan_internet", label: "Kecepatan Internet", placeholder: "100", description: "Kecepatan internet dalam Mbps." },
            { name: "provider_internet", label: "Provider Internet", placeholder: "Indihome", description: "Nama provider internet." },
            { name: "jenis_internet", label: "Jenis Internet", placeholder: "Fiber Optic", description: "Jenis internet yang digunakan." },
            { name: "jumlah_komputer", label: "Jumlah Komputer", placeholder: "300", description: "Jumlah komputer di laboratorium." },
            { name: "jenis_komputer", label: "Jenis Komputer", placeholder: "Desktop", description: "Jenis komputer yang digunakan." },
            { name: "spesifikasi_komputer", label: "Spesifikasi Komputer", placeholder: "Intel Core i9, 16GB RAM", description: "Spesifikasi komputer." },
            { name: "jumlah_laboratorium", label: "Jumlah Laboratorium", placeholder: "3", description: "Jumlah laboratorium di kampus." },
            { name: "jenis_laboratorium", label: "Jenis Laboratorium", placeholder: "Laboratorium Komputer", description: "Jenis laboratorium yang tersedia." },
            { name: "pendinginan_laboratorium", label: "Sistem Pendinginan", placeholder: "AC", description: "Sistem pendinginan laboratorium." },
        ];

        return fields.map((field) => (
            <FormField
                key={field.name}
                control={form.control}
                name={field.name as keyof z.infer<typeof formSchema>}
                render={({ field: inputField }) => (
                    <FormItem>
                        <FormLabel className="text-lg font-semibold">{field.label}</FormLabel>
                        <p className="text-sm text-gray-600">{field.description}</p>
                        <FormControl>
                            <Input placeholder={field.placeholder} {...inputField} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        ));
    }


    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className="text-2xl font-bold mb-4">Survey</h1>
            {!existingSurveyData && (
                <p className="text-sm text-gray-600 mb-4">Silakan isi form berikut untuk melakukan survey.</p>
            )}
            {loading && <p>Loading...</p>}
            {error && (
                <AlertDialog
                    title="Error"
                    description={error}
                    action={() => setError("")}
                    actionLabel="OK"
                    cancelLabel="Cancel"
                    onClose={() => setError("")}
                />
            )}
            <div className="w-full mx-auto max-w-xl">

                {!existingSurveyData && !loading && (
                    <Card className="w-full max-w-xl p-8">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                {renderFormFields()}
                                <div className="flex w-full justify-center items-center col-span-2 mt-5">
                                    <Button
                                        type="submit"
                                        className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </Card>
                )}

                {existingSurveyData?.StatusSurvey?.status === "PENDING" && (
                    <Card className="w-full max-w-xl p-8">
                        <h1 className="text-lg font-semibold text-center">
                            Survey sudah diisi sebelumnya, silakan tunggu hasil survey dari admin.
                        </h1>
                    </Card>
                )}

                {existingSurveyData?.StatusSurvey?.status === "REJECTED" && (
                    <div>
                        <p className="text-sm text-red-500 mb-4 text-center">
                            Survey anda ditolak, silakan isi ulang survey di bawah ini.
                        </p>
                        <Card className="w-full max-w-xl p-8">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    {renderFormFields()}
                                    <div className="flex w-full justify-center items-center col-span-2 mt-5">
                                        <Button
                                            type="submit"
                                            className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                                        >
                                            Update
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </Card>
                    </div>
                )}

                {existingSurveyData?.StatusSurvey?.status === "ACCEPTED" && (
                    <Card className="bg-green-500/20 w-full max-w-lg p-8">
                        <h1 className="text-lg font-semibold text-center">Survey anda sudah disetujui!</h1>
                    </Card>
                )}

            </div>

        </div>
    )
}

export default SurveyPageUser