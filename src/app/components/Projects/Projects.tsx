import React from 'react'
import ProjectCard from './ProjectCard';
import { projects } from './ProjectList';

export default function Projects() {
    return (
        <section id="projects" className="max-w-container-max mx-auto py-4 mt-4">

            {/* Projects Header */}
            <div className="mb-8 text-center md:text-left">
                <p className="font-label text-sm text-primary mb-3">
                    --- PORTFOLIO HIGHLIGHTS
                </p>
                <h1 className="text-3xl md:text-5xl font-bold font-heading text-on-surface mb-4">
                    Project <span className="text-primary">Showcase</span>
                </h1>
                <p className="text-base font-body text-secondary mt-4">
                    A selection of projects demonstrating my skills in frontend and backend development, showcasing modern technologies and best practices.
                </p>
            </div>

            {/* Projects Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects.map((project, index) => {
                    // Logic: 2 normal cards → 1 full width card (repeating)
                    const isFullWidth = (Math.floor(index / 2) % 2 === 1);

                    return (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            isFullWidth={isFullWidth}
                        />
                    );
                })}
            </div>
        </section>
    )
}
