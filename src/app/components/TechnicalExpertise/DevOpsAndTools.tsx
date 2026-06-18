import React from 'react'
import { FaAws, FaDocker, FaGithub, FaLinux } from 'react-icons/fa6'
import { VscAzureDevops } from 'react-icons/vsc'

export default function DevOpsAndTools() {
    return (
        <div className="lg:col-span-7 bg-slate-900/50 border border-slate-700/50 rounded-3xl p-4 hover:border-amber-500/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl"><VscAzureDevops /></span>
                </div>
                <div>
                    <h3 className="text-2xl font-heading font-semibold text-white">DevOps & Tooling</h3>
                    <p className="text-secondary font-body">Modern development workflow & infrastructure</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-label">
                <div className="text-center bg-slate-800/50 hover:bg-slate-800 p-4 rounded-2xl transition-colors flex flex-col items-center">
                    <div className="text-3xl mb-2 text-blue-500"><FaDocker /></div>
                    <p className="font-medium text-sm">Docker</p>
                </div>
                <div className="text-center bg-slate-800/50 hover:bg-slate-800 p-4 rounded-2xl transition-colors flex flex-col items-center">
                    <div className="text-3xl mb-2 text-blue-500"><FaAws /></div>
                    <p className="font-medium text-sm">AWS</p>
                </div>
                <div className="text-center bg-slate-800/50 hover:bg-slate-800 p-4 rounded-2xl transition-colors flex flex-col items-center">
                    <div className="text-3xl mb-2 text-blue-500"><FaGithub /></div>
                    <p className="font-medium text-sm">GitHub</p>
                </div>
                <div className="text-center bg-slate-800/50 hover:bg-slate-800 p-4 rounded-2xl transition-colors flex flex-col items-center">
                    <div className="text-3xl mb-2 text-blue-500"><FaLinux /></div>
                    <p className="font-medium text-sm">Linux + Git</p>
                </div>
            </div>
        </div>
    )
}
