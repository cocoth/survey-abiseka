"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChartColumnIncreasing, House } from "lucide-react";
import Image from "next/image";
import { User } from "@/generated/prisma";
import { HandleGetCurrentRole, HandleGetCurrentUser } from "@/lib/services/userService";

const Sidebar = () => {
    const [user, setUser] = useState<string>("")
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true)
            const res = await HandleGetCurrentRole()
            if (res && res.status === 200) {
                // Check if the response is in the expected format
                const data = await res?.data
                setUser(data.role)
            }
            setIsLoading(false)
            console.log("User: ", JSON.stringify(res))
        };
        fetchUser()
    }, [])

    return (
        <aside className="w-64 h-screen bg-gray-100 border-e-2 border-black p-4 sticky top-0 left-0">
            <nav>
                <ul className="grid items-center space-y-4">
                    <li>
                        <Link
                            href={user === "admin" ? "/dashboard" : "/home"}
                            className="flex gap-2 px-4 py-2 rounded-md hover:bg-blue-700/50 transition"
                        >
                            <House />
                            <span>
                                {user === "admin" ? "Dashboard" : "Home"}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={user === "admin" ? "/dashboard/survey" : "/home/survey"}
                            className="flex gap-2 px-4 py-2 rounded-md hover:bg-blue-700/50 transition"
                        >
                            <ChartColumnIncreasing />
                            <span>
                                Survey
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/profile"
                            className="flex gap-2 px-4 py-2 rounded-md hover:bg-blue-700/50 transition"
                        >
                            <Image
                                src="/profile.svg"
                                alt="Profile"
                                width={24}
                                height={24}
                                className="inline-block mr-2"
                            />
                            <span>
                                Profile
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;