"use client";

import { FaDownload } from 'react-icons/fa6'

export default function ResumeButton() {
    return (
        <a
            href="https://drive.google.com/uc?export=download&id=1QBaCLvYvF8bxpI1EQglntMTLb93Bjv5r"
            className="bg-primary-container text-white px-4 py-2 rounded-md font-semibold text-sm cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] hover:scale-105 active:scale-95 flex items-center gap-2"
        >
            <FaDownload />
            <span className="hidden md:block">Download Resume</span>
        </a>
    )
}
