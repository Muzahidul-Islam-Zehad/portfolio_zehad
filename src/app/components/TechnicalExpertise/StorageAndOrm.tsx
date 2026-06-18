import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiMongodb } from 'react-icons/di'
import { FaDatabase } from 'react-icons/fa6'
import { SiMongoose, SiPrisma, SiRedis } from 'react-icons/si'

export default function StorageAndOrm() {
    return (
        <div className="lg:col-span-5 bg-slate-900/50 border border-slate-700/50 rounded-3xl p-4 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl"><FaDatabase /></span>
                </div>
                <div>
                    <h3 className="text-2xl font-heading font-semibold text-white">Data & Storage</h3>
                    <p className="text-secondary font-body">Reliable data architecture</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center bg-slate-800/50 p-2 rounded-2xl font-label">
                    <div className="flex flex-wrap gap-2">
                        <div className="font-medium bg-transparent border border-primary rounded-2xl px-3 py-1 flex flex-row items-center gap-1 ">
                            <span className="text-blue-500 text-lg"><BiLogoPostgresql /></span> <span>PostgreSQL</span>
                        </div>
                        <div className="font-medium bg-transparent border border-primary rounded-2xl px-3 py-1 flex flex-row items-center gap-1 ">
                            <span className="text-blue-500 text-lg"><SiPrisma /></span> <span>Prisma</span>
                        </div>
                    </div>
                    <span className="text-tertiary text-sm font-bold">Expert</span>
                </div>
                <div className="flex justify-between items-center bg-slate-800/50 p-2 rounded-2xl font-label">
                    <div className="flex flex-wrap gap-2">
                        <div className="font-medium bg-transparent border border-primary rounded-2xl px-3 py-1 flex flex-row items-center gap-1">
                            <span className="text-green-500 text-lg">
                                <DiMongodb />
                            </span>
                            <span>MongoDB</span>
                        </div>
                        <div className="font-medium bg-transparent border border-primary rounded-2xl px-3 py-1 flex flex-row items-center gap-1">
                            <span className="text-red-500 text-lg">
                                <SiMongoose />
                            </span>
                            <span>Mongoose</span>
                        </div>
                    </div>
                    <span className="text-tertiary text-sm font-bold">Advanced</span>
                </div>
                <div className="flex justify-between items-center bg-slate-800/50 p-2 rounded-2xl font-label">
                    <div className="flex flex-wrap gap-2">
                        <div className="font-medium bg-transparent border border-primary rounded-2xl px-3 py-1 flex flex-row items-center gap-1">
                            <span className="text-red-500 text-lg">
                                <SiRedis />
                            </span>
                            <span>Redis</span>
                        </div>
                    </div>
                    <span className="text-tertiary text-sm font-bold">Intermediate</span>
                </div>
            </div>
        </div>
    )
}
