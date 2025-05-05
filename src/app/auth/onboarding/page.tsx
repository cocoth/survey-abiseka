"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
    namaUniversitas: z.string().min(3, {
        message: "Nama Universitas harus lebih dari 3 karakter.",
    }),
    kodeUniversitas: z.string().min(3, {
        message: "Kode Universitas harus lebih dari 3 karakter.",
    }),
    akreditasi: z.string().min(3, {
        message: "Akreditasi harus lebih dari 3 karakter.",
    }),
    tanggalBerdiri: z.string().min(3, {
        message: "Tanggal Berdiri harus lebih dari 3 karakter.",
    }),
    noSKPendirian: z.string().min(3, {
        message: "No SK Pendirian harus lebih dari 3 karakter.",
    }),
    tanggalSKPendirian: z.string().min(3, {
        message: "Tanggal SK Pendirian harus lebih dari 3 karakter.",
    }),
    alamat: z.string().min(3, {
        message: "Alamat harus lebih dari 3 karakter.",
    }),

})

const OnBoardingPage = () => {
    const [pending, setPending] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            namaUniversitas: "",
            kodeUniversitas: "",
            akreditasi: "",
            tanggalBerdiri: "",
            noSKPendirian: "",
            tanggalSKPendirian: "",
            alamat: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            // const res = await HandleRegister(values)
            // if (res && res.status !== 200) {
            //     setErrorMessage(res.message || "Register gagal");
            //     setPending(false)
            //     return
            // }
            // window.location.href = "/auth/onboarding"
        } catch (error) {
            setErrorMessage("An error occurred while register. Please try again later.");
        } finally {
            setPending(false)
        }
    }
    return (
        <div>

            <section className='flex justify-center items-center mt-10 mb-20'>
                <Card className='w-full max-w-md p-8 mx-auto bg-white rounded-xl shadow-xl shadow-gray-900/50 dark:bg-gray-800 sm:p-10 md:max-w-3xl lg:max-w-4xl'>
                    <CardHeader>
                        <CardTitle className='text-center text-2xl font-bold'>
                            Onboarding Process
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='text-center'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:grid md:grid-cols-2 w-full justify-center gap-4 space-y-8">
                                <section className='grid gap-3'>
                                    <FormField
                                        control={form.control}
                                        name="namaUniversitas"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nama Universitas</FormLabel>
                                                <FormControl>
                                                    <Input required placeholder="Universitas PGRI Semarang" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="kodeUniversitas"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Kode Universitas</FormLabel>
                                                <FormControl>
                                                    <Input required placeholder="678901" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="akreditasi"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Akreditasi</FormLabel>
                                                <FormControl>
                                                    <select
                                                        {...field}
                                                        required
                                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                    >
                                                        <option value="">Pilih Akreditasi</option>
                                                        <option value="buruk">Buruk</option>
                                                        <option value="cukup">Cukup</option>
                                                        <option value="baik">Baik</option>
                                                        <option value="sangat baik">Sangat Baik</option>
                                                        <option value="unggul">Unggul</option>
                                                    </select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="tanggalBerdiri"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Tanggal Berdiri Universitas</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="date"
                                                        required
                                                        {...field}
                                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </section>
                                <section className='grid gap-3'>

                                    <FormField
                                        control={form.control}
                                        name="noSKPendirian"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>No SK Pendirian</FormLabel>
                                                <FormControl>
                                                    <Input required placeholder="123456789" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="tanggalSKPendirian"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Tanggal SK Pendirian</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="date"
                                                        required
                                                        {...field}
                                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="alamat"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Alamat</FormLabel>
                                                <FormControl>
                                                    <textarea
                                                        {...field}
                                                        required
                                                        placeholder="Jl. Raya No. 1"
                                                        className="w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
                                                        rows={4}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </section>

                                <div className="flex w-full justify-center items-center col-span-2">
                                    <Button type="submit"
                                        className='cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline'
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}

export default OnBoardingPage