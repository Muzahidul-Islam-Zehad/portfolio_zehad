import React from 'react'
import Link from "next/link";   
export default function NavLinks() {
    return (
        <div className="hidden md:flex items-center gap-8">
            <Link
                href="/"
                className="text-primary font-bold border-b-2 border-primary pb-1"
            >
                Home
            </Link>

            <Link
                href="/projects"
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
                Projects
            </Link>

            <Link
                href="/achievements"
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
                Achievements
            </Link>

            <Link
                href="/contact"
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
                Contact
            </Link>
        </div>
    )
}
