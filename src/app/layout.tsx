import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { geist, inter, jetbrains } from "./Fonts/fonts";

export const metadata: Metadata = {
  title: "Kazi Zehad - Full Stack Developer",
  description: "I am a passionate full stack developer specializing in building scalable web applications using modern technologies. With expertise in high-availability distributed systems, I create performant and user-focused solutions that meet the demands of today's digital landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` h-full antialiased ${geist.variable} ${jetbrains.variable} ${inter.variable}`}
    >
      <head>
        <link rel="icon" href="/assets/fabicon.ico" sizes="32x32" type="image/x-icon" />
      </head>
      <body className="min-h-full flex flex-col bg-neutral text-neutral-100">

        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="glow-sphere animate-blob-1 absolute top-1/4 right-0 w-125 h-125 bg-primary rounded-full"></div>

          <div className="glow-sphere animate-blob-2 absolute bottom-0 left-1/6 w-100 h-100 bg-tertiary rounded-full"></div>
        </div>
        <Navbar />
        <section className="min-h-[calc(100vh-170px)] overflow-x-hidden">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
