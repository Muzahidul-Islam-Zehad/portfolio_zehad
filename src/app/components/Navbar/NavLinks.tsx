import React from 'react'
import Link from "next/link";   
export default function NavLinks() {
    return (
        <div className="hidden md:flex items-center gap-8">
            <a
                href="#home"
                className="text-primary font-bold border-b-2 border-primary pb-1"
            >
                Home
            </a>

            <a
                href="#projects"
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
                Projects
            </a>

            <a
                href="#achievements"
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
                Achievements
            </a>

            <a
                href="#contact"
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
                Contact
            </a>
        </div>
    )
}
