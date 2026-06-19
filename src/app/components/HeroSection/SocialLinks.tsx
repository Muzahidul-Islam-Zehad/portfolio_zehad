
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/kaziZehad.FUZU',
    icon: <FaFacebook />,
  },
  {
    name: "LinkedIn",
    url: 'https://www.linkedin.com/in/kmiz',
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    url: 'https://github.com/Muzahidul-Islam-Zehad',
    icon: <FaGithub />,
  }
]


export default function SocialLinks() {
  return (
    <div className="flex flex-row items-center gap-2 mt-4">
        {
            socialLinks.map((link, index) => (
                <Link key={index} href={link.url} className={`text-2xl text-on-surface hover:shadow-[0_0_10px_rgba(14,165,233,0.6)] transition-all duration-100 rounded-full p-2 bg-on-primary-fixed-variant `}>
                    {link.icon}
                </Link>
            ))
        }
    </div>
  )
}
