"use client"

import { User } from '@/generated/prisma'
import { HandleGetCurrentUser, HandleLogout } from '@/lib/services/userService'
import { LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Avatar from './Avatar'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [user, setUser] = useState<Partial<User> | null>(null)
    const [isLoading, setIsLoading] = useState(true);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()
    const isLoginPage = pathname === "/auth/login" ? "/auth/register" : "/auth/login"

    useEffect(() => {
        const fetchUser = async () => {
            const res = await HandleGetCurrentUser();
            if (res && res.status === 200) {
                setUser(res.data);
            }
            setIsLoading(false);
        };
        fetchUser();
    }, []);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }
    const handleLogout = async () => {
        await HandleLogout()
        window.location.reload();
    }
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    return (
        <nav className="flex items-center justify-between p-4 bg-[var(--acent-color)]/90 shadow-md">
            <section>
                <Link href="/" className="flex items-center ml-6 font-bold text-xl text-white">
                    Survey ABISEKA
                </Link>
            </section>
            <section className='mx-3'>
                <ul className="flex space-x-4 justify-center items-center">
                    {isLoading ? null : user ? (
                        <li
                            onClick={toggleDropdown}
                            className='h-full w-full hover:cursor-pointer'
                        >
                            <Avatar username={user.name || ""} />
                        </li>

                    ) : (
                        <li className='h-full w-full hover:cursor-pointer'>
                            <Link href={isLoginPage} className="text-white">
                            {isLoginPage === "/auth/login" ? "Login" : "Register"}
                            </Link>
                        </li>
                    )}
                </ul>
                <div
                    ref={dropdownRef}
                    className={`absolute right-1 top-[4.2rem] mt-2 w-48 bg-white border border-gray-400 rounded-md shadow-lg overflow-hidden transition-all duration-300 
                        ${isDropdownOpen ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                >
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm  text-gray-700 hover:bg-red-500/50 hover:cursor-pointer"
                    >
                        <LogOut />
                        <span>
                            Logout
                        </span>
                    </button>
                </div>
            </section>
        </nav>
    )
}

export default Navbar