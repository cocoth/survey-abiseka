"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { HandleLogin } from '@/lib/services/userService'


const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string().min(8, {
        message: "password must be at least 8 characters.",
    })
})

const LoginPage = () => {
    const [setshowPassword, setSetshowPassword] = useState(false)
    const [Login, setLogin] = useState(false)
    const [pending, setPending] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const res = await HandleLogin(values)
            if (res && res.status !== 200) {
                setErrorMessage(res.message || "Login gagal");
                setPending(false)
                return
            }
            setLogin(true)
            window.location.href = "/"
        } catch (error) {
            setErrorMessage("An error occurred while logging in. Please try again later.");
        } finally {
            setPending(false)
        }
    }



    return (
        <div className='bg-[var(--light-color)] min-h-screen flex items-center justify-center'>
            <Card className="w-full max-w-md p-6 mx-auto mt-10 bg-white rounded-xl shadow-xl shadow-gray-900/50 dark:bg-gray-800 sm:p-8 md:max-w-md lg:max-w-lg">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-gray-900 dark:text-white">
                        Login
                    </CardTitle>
                    {errorMessage && (
                        <div className="w-full text-white bg-red-500 border rounded-md text-sm text-center mt-2 py-1">
                            <p>
                                {errorMessage}
                            </p>
                        </div>
                    )}
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex w-full justify-center items-center">
                                <Button type="submit"
                                    className='cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"'
                                >
                                    Login
                                </Button>
                            </div>
                            <p className='text-center text-sm text-gray-500 dark:text-gray-400">'>
                                Don't have an account? <Link href="/auth/register" className="text-blue-500 hover:underline">Register</Link>
                            </p>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginPage