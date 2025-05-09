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
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-4">Survey</h1>
                <Card className='w-full max-w-lg p-4'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                            <section className='grid gap-4'>
                                <FormField
                                    control={form.control}
                                    name="kecepatan_internet"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-lg font-semibold'>
                                                Kecepatan Internet
                                            </FormLabel>
                                            <p className='text-sm text-gray-600'>
                                                Kecepatan internet yang digunakan di laboratorium dalam satuan Mbps (Megabit per detik).
                                            </p>
                                            <FormControl>
                                                <Input className='w-full' required placeholder="100 Mb/s" {...field} />
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
                                            <FormLabel className='text-lg font-semibold'>
                                                Provider Internet
                                            </FormLabel>
                                            <p className='text-sm text-gray-600'>
                                                Nama provider internet yang digunakan di laboratorium.
                                            </p>
                                            <FormControl>
                                                <Input className='w-full' required placeholder="Indihome" {...field} />
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
                                            <FormLabel className='text-lg font-semibold'>
                                                Jenis Internet
                                            </FormLabel>
                                            <p className='text-sm text-gray-600'>
                                                Jenis internet yang digunakan di laboratorium (misalnya: Fiber Optic, DSL, dll).
                                            </p>
                                            <FormControl>
                                                <Input className='w-full' required placeholder="LAN" {...field} />
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
                                            <FormLabel className='text-lg font-semibold'>
                                                Jumlah Komputer
                                            </FormLabel>
                                            <p className='text-sm text-gray-600'>
                                                Jumlah komputer yang tersedia di laboratorium.
                                            </p>

                                            <FormControl>
                                                <Input className='w-full' required placeholder="200" {...field} />
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
                                            <FormLabel className='text-lg font-semibold'>
                                                Spesifikasi Komputer
                                            </FormLabel>
                                            <p className='text-sm text-gray-600'>
                                                Spesifikasi komputer yang digunakan di laboratorium (misalnya: Intel Core i5, 8GB RAM, 1TB HDD).
                                            </p>
                                            <FormControl>
                                                <Input className='w-full' required placeholder="Intel Core 19" {...field} />
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
                                            <FormLabel className='text-lg font-semibold'>
                                                Jumlah Laboratorium
                                            </FormLabel>
                                            <p className='text-sm text-gray-600'>
                                                Jumlah laboratorium yang tersedia di kampus.
                                            </p>
                                            <FormControl>
                                                <Input className='w-full' required placeholder="4" {...field} />
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
                                            <FormLabel className='text-lg font-semibold'>
                                                Jenis Laboratorium
                                            </FormLabel>
                                            <p className='text-sm text-gray-600'>
                                                Jenis laboratorium yang tersedia di kampus (misalnya: Laboratorium Jaringan, Laboratorium Pemrograman, dll).
                                            </p>
                                            <FormControl>
                                                <Input className='w-full' required placeholder="Laboratorium Komputer" {...field} />
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
                                            <FormLabel className='text-lg font-semibold'>
                                                Pendinginan Laboratorium
                                            </FormLabel>
                                            <p className='text-sm text-gray-600'>
                                                Sistem pendinginan yang digunakan di laboratorium (misalnya: AC, kipas angin, dll).
                                            </p>
                                            <FormControl>
                                                <Input className='w-full' required placeholder="AC" {...field} />
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

        </div>
    )
}

export default SurveyPage