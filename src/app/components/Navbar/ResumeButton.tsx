import React from 'react'
import { FaDownload } from 'react-icons/fa6'

export default function ResumeButton() {
    return (
        <button className="bg-primary-container text-on-surface px-4 py-2 rounded-md font-semibold text-sm cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] hover:scale-105 active:scale-95 flex flex-row items-center gap-2 aspect-auto ">
            <p> <FaDownload /></p>
            <p className="hidden md:block">Download Resume</p>
        </button>
    )
}
