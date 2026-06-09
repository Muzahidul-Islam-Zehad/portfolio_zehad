import React from 'react'
import { RiNodejsLine } from 'react-icons/ri'
import { SiExpress } from 'react-icons/si'

const backendSkills = [
    {
        name: 'Node.js',
        icon: <RiNodejsLine />,
        iconColor: 'text-green-500'
    },
    {
        name: "Express.js",
        icon: <SiExpress />,
        iconColor: 'text-white'
    }
]

export default function BackendTechnologies() {
    return (
        <div className="lg:col-span-5 bg-slate-900/50 border border-slate-700/50 rounded-3xl p-4 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-start md:items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">🔧</span>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-white">Backend Systems</h3>
                    <p className="text-slate-400">Scalable APIs and microservices</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill, index) => (
                    <div key={index} className="px-5 py-3 bg-slate-800 text-sm rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center gap-2 hover:bg-slate-800/50 transition-colors">
                        <span className={`text-2xl ${skill.iconColor} mr-2`}>{skill.icon}</span>
                        <span className="font-label text-center">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

