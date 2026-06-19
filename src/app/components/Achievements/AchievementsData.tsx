export type Achievement = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;           
  link?: string;           
  description?: string;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "MERN Stack Developer",
    issuer: "Programmin Hero",
    date: "May 2025",
    image: "/assets/certificate-ph10.avif",           
    link: "https://drive.google.com/file/d/1RVY7gpXIPvaOF52eN4yuaD6h2ybmX72n/view?usp=sharing",
    description: "Proficient in MongoDB, Express.js, React, and Node.js for building full-stack web applications.",
  },
  // Add more as needed
];