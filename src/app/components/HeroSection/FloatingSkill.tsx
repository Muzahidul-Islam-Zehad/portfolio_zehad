
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaDocker } from 'react-icons/fa6'
import { RiNextjsFill, RiNodejsLine, RiTailwindCssFill } from 'react-icons/ri'
import {  SiTypescript } from 'react-icons/si'

const skills = [
  {
    name: 'Next.js',
    icon: <RiNextjsFill />,
    top: "",
    bottom: "bottom-[5%]",
    left: "left-[10%]",
    right: "",
    color: "text-white"
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    top: "top-[5%]",
    bottom: "",
    left: "right-[10%]",
    right: "",
    color: "text-blue-500"
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    top: "",
    bottom: "-bottom-[5%]",
    left: "left-[45%]",
    right: "",
    color: "text-blue-500"
  },
  {
    name: 'Node.js',
    icon: <RiNodejsLine />,
    top: "top-[45%]",
    bottom: "",
    left: "",
    right: "-right-[5%]",
    color: "text-green-500"
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql />,
    top: "",
    bottom: "bottom-[5%]",
    left: "",
    right: "right-[10%]",
    color: "text-blue-400"
  },
]

export default function FloatingSkill() {
  return (
    <>

      {
        skills.map((skill, index) => {
          return (
            <div key={index} className={`absolute flex flex-row items-center justify-center gap-3 px-4 py-1 w-10 h-10 ${skill.top} ${skill.bottom} ${skill.left} ${skill.right} bg-transparent backdrop-blur-sm rounded-full border border-primary text-xl font-medium text-on-surface shadow-lime-950`}>
              <div className={skill.color}>
                {skill.icon}
              </div>
            </div>
          )
        })
      }
    </>
  )
}
