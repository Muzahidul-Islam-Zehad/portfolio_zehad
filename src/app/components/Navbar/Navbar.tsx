
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-surface-glass backdrop-blur-md border-b border-on-surface">
      <div className="flex justify-between items-center px-4 h-16 max-w-container-max mx-auto">

        {/* Logo */}
        <div className="font-heading font-bold text-3xl text-on-surface tracking-tight">
          Kazi<span className="text-primary">Zehad</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-primary font-bold border-b-2 border-primary pb-1"
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            Projects
          </Link>

          <Link
            href="/achievements"
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            Achievements
          </Link>

          <Link
            href="/contact"
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* resume download Button */}
        
        <button className="bg-primary-container text-on-surface px-4 py-2 rounded-md font-semibold text-sm cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] hover:scale-105 active:scale-95 flex flex-row items-center gap-2 aspect-auto ">
          <p> <FaDownload /></p>
          <p className="hidden md:block">Download Resume</p>
        </button>
      </div>
    </nav>

  )
}
