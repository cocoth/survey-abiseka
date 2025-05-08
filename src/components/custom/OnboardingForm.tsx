"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HandleOnBoarding, HandleUpdateOnBoarding } from "@/lib/services/onBoardingService";
import { Data_PT } from "@/generated/prisma";

const formSchema = z.object({
    nama: z.string().min(3, { message: "Nama Universitas harus lebih dari 3 karakter." }),
    kode: z.string().min(3, { message: "Kode Universitas harus lebih dari 3 karakter." }),
    akreditasi: z.string().min(3, { message: "Akreditasi harus lebih dari 3 karakter." }),
    tanggalBerdiri: z.string().min(3, { message: "Tanggal Berdiri harus lebih dari 3 karakter." }),
    noSKPendirian: z.string().min(3, { message: "No SK Pendirian harus lebih dari 3 karakter." }),
    tanggalSKPendirian: z.string().min(3, { message: "Tanggal SK Pendirian harus lebih dari 3 karakter." }),
    alamat: z.string().min(3, { message: "Alamat harus lebih dari 3 karakter." }),
});

interface OnboardingFormProps {
    userId: string;
    initialData: Partial<Data_PT> | null;
    isUpdate?: boolean;
    isProfilePage?: boolean;
}

const OnboardingForm: React.FC<OnboardingFormProps> = ({ userId, initialData, isProfilePage, isUpdate = false }) => {
    const [pending, setPending] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
            ? {
                  nama: initialData.nama ?? "",
                  kode: initialData.kode ?? "",
                  akreditasi: initialData.akreditasi ?? "",
                  tanggalBerdiri: initialData.tanggal_berdiri ? initialData.tanggal_berdiri.toISOString().split("T")[0] : "",
                  noSKPendirian: initialData.no_SK_pendirian ?? "",
                  tanggalSKPendirian: initialData.tanggal_SK_pendirian ? initialData.tanggal_SK_pendirian.toISOString().split("T")[0] : "",
                  alamat: initialData.alamat ?? "",
              }
            : {
                  nama: "",
                  kode: "",
                  akreditasi: "",
                  tanggalBerdiri: "",
                  noSKPendirian: "",
                  tanggalSKPendirian: "",
                  alamat: "",
              },
    });

    useEffect(() => {
        if (initialData) {
            const mappedData = {
                nama: initialData.nama ?? "",
                kode: initialData.kode ?? "",
                akreditasi: initialData.akreditasi ?? "",
                tanggalBerdiri: initialData.tanggal_berdiri
                    ? new Date(initialData.tanggal_berdiri).toISOString().split("T")[0]
                    : "",
                noSKPendirian: initialData.no_SK_pendirian ?? "",
                tanggalSKPendirian: initialData.tanggal_SK_pendirian
                    ? new Date(initialData.tanggal_SK_pendirian).toISOString().split("T")[0]
                    : "",
                alamat: initialData.alamat ?? "",
            };
            form.reset(mappedData);
        }
    }, [initialData, form]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setPending(true);
            let res = null;

            if (isUpdate) {
                res = await HandleUpdateOnBoarding(userId, {
                    ...values,
                    tanggalBerdiri: new Date(values.tanggalBerdiri),
                    tanggalSKPendirian: new Date(values.tanggalSKPendirian),
                });
            } else {
                res = await HandleOnBoarding({
                    ...values,
                    tanggalBerdiri: new Date(values.tanggalBerdiri),
                    tanggalSKPendirian: new Date(values.tanggalSKPendirian),
                });
            }

            if (!res || res.status !== 200) {
                setErrorMessage(res?.message || "Gagal menyimpan data onboarding.");
                return;
            }

            window.location.href = "/";
        } catch (error) {
            setErrorMessage("Terjadi kesalahan. Silakan coba lagi nanti.");
        } finally {
            setPending(false);
        }
    }

    return (
        <Card className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl shadow-gray-900/50 dark:bg-gray-800 sm:p-10 md:max-w-3xl lg:max-w-4xl">
            <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">
                    {!isProfilePage && (isUpdate ? "Update Onboarding" : "Onboarding Process")}
                </CardTitle>
                {errorMessage && (
                    <div className="w-full text-white bg-red-500 border rounded-md text-sm text-center mt-2 py-1">
                        <p>{errorMessage}</p>
                    </div>
                )}
            </CardHeader>
            <CardContent className="text-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:grid md:grid-cols-2 w-full justify-center gap-4 space-y-8">
                        <section className="grid gap-3">
                            <FormField
                                control={form.control}
                                name="nama"
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
                                name="kode"
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
                                            <Input type="date" required {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </section>
                        <section className="grid gap-3">
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
                                            <Input type="date" required {...field} />
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
                            <Button
                                type="submit"
                                className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                            >
                                {isUpdate ? "Update" : "Submit"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default OnboardingForm;