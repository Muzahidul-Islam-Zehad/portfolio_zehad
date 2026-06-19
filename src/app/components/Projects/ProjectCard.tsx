import { CiStreamOn } from 'react-icons/ci';
import { Project } from './ProjectList';
import Link from 'next/link';
import { FaFileCode } from 'react-icons/fa6';


type ProjectCardProps = {
    project: Project;
    isFullWidth?: boolean;
};

const ProjectCard = ({ project, isFullWidth = false }: ProjectCardProps) => {
    return (
        <div className={`group relative bg-surface-container-low border border-border-subtle rounded-2xl overflow-hidden 
    ${isFullWidth ? 'md:col-span-2' : ''}`}>

            {/* Thumbnail */}
            <div className={`relative overflow-hidden ${isFullWidth ? 'md:flex' : ''}`}>
                <div className={`relative ${isFullWidth ? 'md:w-1/2 aspect-video md:aspect-auto' : 'aspect-video'}`}>
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700"
                        style={{ backgroundImage: `url('${project.image}')` }}
                    />

                </div>

                {/* Full width side content */}
                {isFullWidth && (
                    <div className="p-8 md:w-1/2 flex flex-col">
                        <MinimalCardContent project={project} />
                    </div>
                )}
            </div>

            {/* Normal Card Content */}
            {!isFullWidth && (
                <div className="p-8 h-full">
                    <MinimalCardContent project={project} />
                </div>
            )}
        </div>
    );
};

const MinimalCardContent = ({ project }: { project: Project }) => (
    <div className="flex flex-col justify-between ">
        <div>
            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">{project.icon}</span>
                <h3 className="font-heading text-2xl font-medium text-on-surface tracking-tight">
                    {project.title}
                </h3>
            </div>

            {/* Minimal Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                    <div
                        key={i}
                        className="text-xs font-label font-medium bg-surface-container-high/70 border border-border-subtle px-3 py-1 rounded-full flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface transition-colors"
                    >
                        <span className={tech.color}>{tech.icon}</span>
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>

            {/* Description */}
            <p className="font-body text-text-muted mb-8 line-clamp-5 ">
                {project.description}
            </p>

        </div>

        {/* links */}
        <div className="flex gap-5 text-sm font-label">
            {project.liveDemo && (
                <Link
                    href={project.liveDemo}
                    className="flex flex-row items-center justify-between gap-2 text-primary hover:text-primary-fixed font-medium border border-primary px-3 py-1 rounded-full transition-all duration-300  hover:shadow-[0_0_25px_rgba(14,165,233,0.6)]"
                >
                    <span className='text-3xl'><CiStreamOn /></span>
                    <span className="hidden lg:block">Live URL</span>
                    
                </Link>
            )}
            {project.sourceCode && (
                <Link
                    href={project.sourceCode}
                    // todo: glow button
                    className="flex flex-row items-center justify-between gap-2 text-on-surface-variant hover:text-on-surface font-medium border border-on-surface-variant px-3 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
                >
                    <span className='text-3xl'><FaFileCode /></span>
                    <span className="hidden lg:block">Source Code & Details</span>
                    
                </Link>
            )}
        </div>
    </div>
);

export default ProjectCard;