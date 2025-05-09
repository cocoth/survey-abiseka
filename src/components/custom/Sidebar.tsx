"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChartColumnIncreasing, CircleUserRound, House } from "lucide-react";
import Image from "next/image";
import { User } from "@/generated/prisma";
import { HandleGetCurrentRole, HandleGetCurrentUser } from "@/lib/services/userService";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const [role, setRole] = useState<string>("")
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true)
            const res = await HandleGetCurrentRole()
            if (res && res.status === 200) {
                // Check if the response is in the expected format
                const data = await res?.data
                setRole(data.role)
            }
            setIsLoading(false)
            console.log("User: ", JSON.stringify(res))
        };
        fetchUser()
    }, [])

    const navItems = [
        {
            label: role === "admin" ? "Dashboard" : "Home",
            href: role === "admin" ? "/dashboard" : "/home",
            icon: <House className="w-7 h-7" />,
            active: pathname === "/home" || pathname === "/dashboard",
        },
        {
            label: "Survey",
            href: role === "admin" ? "/dashboard/survey" : "/home/survey",
            icon: <ChartColumnIncreasing className="w-7 h-7" />,
            active: pathname === "/home/survey" || pathname === "/dashboard/survey",
        },
        {
            label: "Profile",
            href: "/profile",
            icon: <CircleUserRound className="w-7 h-7" />,
            active: pathname === "/profile",
        },
    ];

    return (
        <aside className="w-1/5 h-screen bg-[var(--secondary-color)] p-4 sticky top-0 left-0">
            <nav>
                <ul className="grid items-center space-y-4 font-bold text-white">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-2 font-bold rounded-md transition ${
                                    item.active ? "bg-gray-50/30" 
                                    : "hover:bg-blue-500/40"
                                    }`}
                            >
                                {item.icon}
                                <span className="font-bold">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;