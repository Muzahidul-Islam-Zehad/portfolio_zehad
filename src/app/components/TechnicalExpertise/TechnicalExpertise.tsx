import BackendTechnologies from "./BackendTechnologies";
import FrontendTechnologies from "./FrontendTechnologies";
import StorageAndOrm from "./StorageAndOrm";
import DevOpsAndTools from "./DevOpsAndTools";

// components/TechnicalExpertise.tsx
export default function TechnicalExpertise() {
    return (
        <section id="expertise" className="max-w-container-max mx-auto py-4">
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
                <DevOpsAndTools />
            </div>
        </section>
    );
}