"use client"

import { useActiveSection } from "@/app/Hooks/useActiveSection"

export default function NavLinks() {
    const activeSection = useActiveSection()

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#expertise", label: "Expertise" },
        { href: "#projects", label: "Projects" },
        { href: "#achievements", label: "Achievements" },
        { href: "#contact", label: "Contact" }
    ]

    return (
        <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className={`${activeSection === link.href.slice(1) ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-colors duration-300'}`}
                >
                    {link.label}
                </a>
            ))}
        </div>
    )
}

