
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import ResumeButton from "./ResumeButton";
import NavLinks from "./NavLinks";
export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-surface-glass backdrop-blur-md border-b border-on-surface">
      <div className="flex justify-between items-center px-4 h-16 max-w-container-max mx-auto">

        {/* Logo */}
        <div className="font-heading font-bold text-3xl text-on-surface tracking-tight">
          Kazi<span className="text-primary">Zehad</span>
        </div>

        {/* Nav Links */}
        <NavLinks/>

        {/* resume download Button */}
        
        <ResumeButton/>
        
      </div>
    </nav>

  )
}
