
import Link from "next/link";
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
            href="/experience"
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            Experience
          </Link>

          <Link
            href="/contact"
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* resume download Button */}
        <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition-opacity active:scale-95 cursor-pointer">
          Download Resume
        </button>
      </div>
    </nav>

  )
}
