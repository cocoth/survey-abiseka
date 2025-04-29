import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 shadow-xl shadow-black">
            <section>
                <Link href="/" className="flex items-center space-x-2 font-bold text-xl text-[var(--primary-color)]">
                    Survey Abiseka
                </Link>
            </section>
            <section>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/auth/login" className="text-gray-700 hover:text-blue-500">Login</Link>
                    </li>
                    <li>
                        <Link href="/auth/register" className="text-gray-700 hover:text-blue-500">Register</Link>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Navbar