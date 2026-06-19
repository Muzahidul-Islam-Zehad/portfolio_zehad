import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa6'
import { GoProjectSymlink } from 'react-icons/go'

export default function Buttons() {
    return (
        <div className="flex flex-row gap-4 mt-6 md:justify-start justify-center">
            <button type="button" className="bg-primary-container text-on-primary px-4 py-2 rounded font-medium cursor-pointer hover:shadow-[0_0_25px_rgba(14,165,233,0.6)]  active:scale-95 transition-all duration-100 aspect-auto capitalize hover:text-on-surface flex flex-row items-center gap-2 justify-between">
                <div className="font-bold text-base">
                    <GoProjectSymlink />
                </div>
                <div className="hidden lg:block">
                    View Projects
                </div>
            </button>
            <button type="button" className="outline-1 outline-secondary px-4 py-2 rounded capitalize font-medium cursor-pointer text-primary hover:shadow-[0_0_25px_rgba(14,165,233,0.6)]  active:scale-95 transition-all duration-100 aspect-auto bg-transparent hover:text-on-surface flex flex-row items-center gap-2 justify-between">
                <div className="font-bold text-base">
                    <FaDownload />
                </div>
                <div className="hidden lg:block">
                    Download Resume
                </div>
            </button>

            <button type="button" className="outline-1 outline-secondary px-4 py-2 rounded-full capitalize font-medium cursor-pointer text-primary hover:shadow-[0_0_25px_rgba(14,165,233,0.6)]  active:scale-95 transition-all duration-100 aspect-auto bg-transparent hover:text-on-surface flex flex-row items-center gap-2 justify-between">
                <div>
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary" />
                    </div>
                </div>
                <div className="">
                    Contact Me
                </div>
            </button>
        </div>
    )
}
