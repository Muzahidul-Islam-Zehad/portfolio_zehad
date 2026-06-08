import { RiNextjsFill } from 'react-icons/ri'
import Buttons from './Buttons'
import SocialLinks from './SocialLinks'
import Image from 'next/image'
import FloatingSkill from './FloatingSkill'

export default function HeroSection() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center gap-8 py-12">
            <div className="">
                <h6 className="text-sm font-label text-primary uppercase">
                    --- Full Stack Developer
                </h6>
                <h1 className="text-5xl font-heading font-bold text-on-surface mt-2">
                    Building Scalable Web Applications with <span className="text-primary">Modern Technologies</span>
                </h1>
                <p className="text-base font-body text-secondary mt-4">
                    I develop performant, scalable, and user-focused web applications using modern technologies and production-grade architecture. Specializing in high-availability distributed systems.
                </p>

                {/* projects and resume download button */}
                <Buttons />

                <p className="text-sm text-secondary mt-4">
                    -------------------
                </p>

                {/* social links */}
                <SocialLinks />
            </div>
            <figure className=" relative shrink-0 w-70 h-70 lg:w-90 lg:h-90">
                {/* profile image */}
                <div className="w-full h-full rounded-full overflow-hidden">
                    <Image src="/assets/profile.avif" alt="profile" width={400} height={400} priority />
                </div>
                {/* floating skills */}
                <FloatingSkill />
            </figure>
        </section>
    )
}
