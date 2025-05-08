"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
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

const SurveyPage = () => {
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
        console.log("Data: ", data)
        // const res = await HandleCreateSurvey(data)
        // if (res && res.status === 200) {
        //     alert("Berhasil")
        // } else {
        //     alert("Gagal")
        // }
    }


    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Survey</h1>
            <Card className='w-full max-w-lg p-4 rounded-xl shadow-lg'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:grid md:grid-cols-2 w-full justify-center gap-4 space-y-8">
                        <section className="grid gap-4">
                            <FormField
                                control={form.control}
                                name="kecepatan_internet"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Kecepatan Internet</FormLabel>
                                        <FormControl>
                                            <Input required placeholder="100 Mb/s" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="provider_internet"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Provider Internet</FormLabel>
                                        <FormControl>
                                            <Input required placeholder="Indihome" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="jenis_internet"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Jenis Internet</FormLabel>
                                        <FormControl>
                                            <Input required placeholder="LAN" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="jumlah_komputer"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Jumlah Komputer</FormLabel>
                                        <FormControl>
                                            <Input required placeholder="200" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="spesifikasi_komputer"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Spesifikasi Komputer</FormLabel>
                                        <FormControl>
                                            <Input required placeholder="Intel Core 19" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="jumlah_laboratorium"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Jumlah Laboratorium</FormLabel>
                                        <FormControl>
                                            <Input required placeholder="4" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="jenis_laboratorium"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Jenis Laboratorium</FormLabel>
                                        <FormControl>
                                            <Input required placeholder="Laboratorium Komputer" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pendinginan_laboratorium"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Pendinginan Laboratorium</FormLabel>
                                        <FormControl>
                                            <Input required placeholder="AC" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </section>
                        <div className="flex w-full justify-center items-center col-span-2">
                            <Button
                                type="submit"
                                className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                            >
                                Submit
                                {/* {isUpdate ? "Update" : "Submit"} */}
                            </Button>
                        </div>
                    </form>
                </Form>
            </Card>
        </div>
    )
}

export default SurveyPage