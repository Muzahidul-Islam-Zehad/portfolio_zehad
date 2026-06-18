import { FaDatabase } from "react-icons/fa6";
import BackendTechnologies from "./BackendTechnologies";
import FrontendTechnologies from "./FrontendTechnologies";
import { VscAzureDevops } from "react-icons/vsc";
import StorageAndOrm from "./StorageAndOrm";

// components/TechnicalExpertise.tsx
export default function TechnicalExpertise() {
    return (
        <section className="max-w-container-max mx-auto py-4">
            {/* Header */}
            <div className="mb-8 text-center md:text-left">
                <p className="font-label text-sm text-primary mb-3">
                    --- ENGINEERING CAPABILITIES
                </p>
                <h1 className="text-3xl md:text-5xl font-bold font-heading text-on-surface mb-4">
                    Technical <span className="text-primary">Expertise</span>
                </h1>
                <p className="text-base font-body text-secondary mt-4">
                    Building production-grade, scalable applications with modern architecture and developer experience.
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Frontend Architecture */}
                <FrontendTechnologies />

                {/* Backend Systems */}
                <BackendTechnologies />

                {/* Database & ORM */}
                <StorageAndOrm />

                {/* DevOps & Tools */}
                <div className="lg:col-span-7 bg-slate-900/50 border border-slate-700/50 rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                            <span className="text-3xl"><VscAzureDevops /></span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-white">DevOps & Tooling</h3>
                            <p className="text-slate-400">Modern development workflow & infrastructure</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center bg-slate-800/50 hover:bg-slate-800 p-6 rounded-2xl transition-colors">
                            <div className="text-3xl mb-2">🐳</div>
                            <p className="font-medium text-sm">Docker</p>
                        </div>
                        <div className="text-center bg-slate-800/50 hover:bg-slate-800 p-6 rounded-2xl transition-colors">
                            <div className="text-3xl mb-2">☁️</div>
                            <p className="font-medium text-sm">AWS</p>
                        </div>
                        <div className="text-center bg-slate-800/50 hover:bg-slate-800 p-6 rounded-2xl transition-colors">
                            <div className="text-3xl mb-2">⚡</div>
                            <p className="font-medium text-sm">GitHub Actions</p>
                        </div>
                        <div className="text-center bg-slate-800/50 hover:bg-slate-800 p-6 rounded-2xl transition-colors">
                            <div className="text-3xl mb-2">🔧</div>
                            <p className="font-medium text-sm">Linux + Git</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}