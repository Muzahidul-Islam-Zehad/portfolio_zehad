import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
  {
    name: 'Facebook',
    url: '',
    icon: <FaFacebook />,
  },
  {
    name: 'Twitter',
    url: '',
    icon: <FaXTwitter />,
  },
  {
    name: "LinkedIn",
    url: '',
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    url: '',
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
