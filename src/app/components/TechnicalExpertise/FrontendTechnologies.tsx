import React from 'react'
import { FaReact } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiAxios, SiTypescript } from 'react-icons/si'
import { TbBrandRedux } from 'react-icons/tb'

const frontendSkills = [
    {
        name: 'Next.js',
        icon: <RiNextjsFill />,
        iconColor: 'text-white'
    },
    {
        name: 'React',
        icon: <FaReact />,
        iconColor: 'text-cyan-500'
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript />,
        iconColor: 'text-blue-500'
    },
    {
        name: 'Tailwind CSS',
        icon: <RiTailwindCssFill />,
        iconColor: 'text-cyan-500'
    },
    {
        name: 'Redux Toolkit',
        icon: <TbBrandRedux />,
        iconColor: 'text-purple-500'
    },
    {
        name: 'Axios',
        icon: <SiAxios />,
        iconColor: 'text-green-500'
    }
]

export default function FrontendTechnologies() {
    return (
        <div className="lg:col-span-7 bg-slate-900/50 border border-slate-700/50 rounded-3xl p-4 hover:border-sky-500/30 transition-all duration-300 group">
            <div className="flex flex-col md:flex-row justify-start md:items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-linear-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">⚡</span>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-white">Frontend Architecture</h3>
                    <p className="text-slate-400">Modern, performant and accessible user interfaces</p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {
                    frontendSkills.map((skill, index) => {
                        return (<div key={index} className="flex flex-col md:flex-row items-center gap-3 bg-slate-800/50 hover:bg-slate-800 rounded-2xl px-5 py-4 transition-colors justify-center">
                            <span className={`text-2xl ${skill.iconColor}`}>{skill.icon}</span>
                            <span className="font-label text-center">{skill.name}</span>
                        </div>)
                    })
                }

            </div>
        </div>
    )
}
