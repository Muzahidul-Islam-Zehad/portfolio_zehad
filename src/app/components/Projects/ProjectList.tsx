import { BsStripe } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { FaEye } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { IoIosAlert } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAxios, SiDaisyui, SiExpress } from "react-icons/si";

export type Project = {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
    techStack: Array<{
        name: string;
        icon?: React.ReactNode;                 
        color?: string;
    }>;
    liveDemo?: string;
    sourceCode: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "NewsDayLight",
        description: "NewsDayLight is a dynamic news platform with a responsive design. Users can browse trending articles, post content, and manage articles via an intuitive dashboard. Admins have full control over content and user management, while premium subscriptions unlock exclusive content.",
        icon: <FaEye />,
        image: "/assets/newsdaylight.avif",
        techStack: [
            {
                name: "React.js",
                icon: <FaReact />,
                color: "text-blue-500"
            },
            {
                name: "Tailwind CSS",
                icon: <RiTailwindCssFill />,
                color: "text-teal-500"
            },
            {
                name:"DaisyUI",
                icon: <SiDaisyui />,
                color: "text-teal-500"

            },
            {
                name: "Firebase",
                icon: <IoLogoFirebase />,
                color: "text-red-500"
            },
            {
                name: "Stripe",
                icon: <BsStripe />,
                color: "text-yellow-500"
            },
            {
                name: "Express.js",
                icon: <SiExpress />,
                color: "text-gray-100"
            },
            {
                name: "MongoDB",
                icon: <DiMongodb />,
                color: "text-green-500"
            },
            {
                name:"Axios",
                icon: <SiAxios />,
                color: "text-gray-100"

            },
            {
                name:"SweetAlert2",
                icon: <IoIosAlert />,
                color: "text-pink-500"
            }
        ],
        liveDemo: "https://newsdaylight-99199.web.app",
        sourceCode: "https://github.com/Muzahidul-Islam-Zehad/news-day-light"
    },
    {
        id: 2,
        title: "Marathon Management",
        description: "Marathon Management is a web application designed to manage marathon events and user activities. It offers secure authentication, a responsive user interface, and dynamic content updates. Users can easily manage their activities, track their progress, and interact with a streamlined dashboard. The application is optimized for all device types, from mobile to desktop.",
        icon: <FaEye />,
        image: "/assets/marathon.avif",
        techStack: [
            {
                name: "React.js",
                icon: <FaReact />,
                color: "text-blue-500"
            },
            {
                name: "Tailwind CSS",
                icon: <RiTailwindCssFill />,
                color: "text-teal-500"
            },
            {
                name:"DaisyUI",
                icon: <SiDaisyui />,
                color: "text-teal-500"

            },
            {
                name: "Firebase",
                icon: <IoLogoFirebase />,
                color: "text-red-500"
            },
            {
                name: "Express.js",
                icon: <SiExpress />,
                color: "text-gray-100"
            },
            {
                name: "MongoDB",
                icon: <DiMongodb />,
                color: "text-green-500"
            },
            {
                name:"Axios",
                icon: <SiAxios />,
                color: "text-gray-100"

            },
            {
                name:"SweetAlert2",
                icon: <IoIosAlert />,
                color: "text-pink-500"
            }
        ],
        liveDemo: "https://marathon-web-app.web.app",
        sourceCode: "https://github.com/Muzahidul-Islam-Zehad/marathon-management"
    },
    {
        id: 3,
        title: "CrowdCube – Crowdfunding Platform",
        description: "CrowdCube is a powerful crowdfunding platform that enables users to raise funds for their passions, ideas, and causes. Whether it's for medical expenses, creative projects, or innovative startups, our platform connects individuals with a supportive community of backers.",
        icon: <FaEye />,
        image: "/assets/donation.avif",
        techStack: [
            {
                name: "React.js",
                icon: <FaReact />,
                color: "text-blue-500"
            },
            {
                name: "Tailwind CSS",
                icon: <RiTailwindCssFill />,
                color: "text-teal-500"
            },
            {
                name:"DaisyUI",
                icon: <SiDaisyui />,
                color: "text-teal-500"

            },
            {
                name: "Firebase",
                icon: <IoLogoFirebase />,
                color: "text-red-500"
            },
            {
                name: "Express.js",
                icon: <SiExpress />,
                color: "text-gray-100"
            },
            {
                name: "MongoDB",
                icon: <DiMongodb />,
                color: "text-green-500"
            },
            {
                name:"Axios",
                icon: <SiAxios />,
                color: "text-gray-100"

            },
            {
                name:"SweetAlert2",
                icon: <IoIosAlert />,
                color: "text-pink-500"
            }
        ],
        liveDemo: "https://crowdcube-8ab29.web.app",
        sourceCode: "https://github.com/Muzahidul-Islam-Zehad/Crowd-Cube"
    }
];