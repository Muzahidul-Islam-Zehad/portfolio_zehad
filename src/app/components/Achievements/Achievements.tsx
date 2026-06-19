import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaAward } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'
import { achievements } from './AchievementsData'
export default function Achievements() {
  return (
    <section id="achievements" className="max-w-container-max mx-auto py-8 mt-12">
      <div className="mb-8 text-center md:text-left">
        <p className="font-label text-sm text-primary mb-3">
          --- ACHIEVEMENTS
        </p>
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-on-surface mb-4">
          Achievements <span className="text-primary"> & Certifications</span>
        </h1>
        <p className="text-base font-body text-secondary mt-4">
          Recognitions and certifications that validate my expertise in system design,
          cloud infrastructure, and software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className=" glass-card rounded-2xl overflow-hidden transition-all duration-300 border border-border-subtle"
          >
            {/* Certificate Image */}
            <div className="relative aspect-16/10 overflow-hidden bg-surface-container">
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-cover "
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 leading-tight">
                {achievement.title}
              </h3>

              <p className="text-primary font-medium mb-1">{achievement.issuer}</p>
              <p className="text-text-muted text-sm mb-4">{achievement.date}</p>

              {achievement.description && (
                <p className="text-text-muted text-sm leading-relaxed mb-5 line-clamp-2">
                  {achievement.description}
                </p>
              )}

              {achievement.link && (
                <Link
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-fixed transition-colors group-hover:gap-3"
                >
                  View Certificate
                  <FaExternalLinkAlt className="text-xs" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
