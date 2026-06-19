import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-on-surface bg-surface-glass backdrop-blur-md">
      <div className="mx-auto max-w-container-max py-6 font-label px-4">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

          {/* Logo / Brand */}
          <div>
            <div className="font-heading font-bold text-xl text-on-surface tracking-tight">
              Kazi<span className="text-primary">Zehad</span>
            </div>
            <p className="mt-2 text-sm text-on-surface-variant">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">

            {/* GitHub */}
            <Link
              href="https://github.com/Muzahidul-Islam-Zehad"
              target="_blank"
              className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex flex-row items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-primary">
                <p>
                  <FaGithub />
                </p>
                <p>
                  GitHub
                </p>
              </div>
            </Link>


            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/kmiz"
              target="_blank"
              className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex flex-row items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-primary">
                <p>
                  <FaLinkedin />
                </p>
                <p>
                  LinkedIn
                </p>
              </div>
            </Link>

            {/* X (Twitter) */}
            <Link
              href="https://www.facebook.com/kaziZehad.FUZU"
              target="_blank"
              className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex flex-row items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-primary">
                <p>
                  <FaFacebook />
                </p>
                <p>
                  Facebook
                </p>
              </div>
            </Link>

            {/* Email */}
            <Link
              href="mailto:zehadkazi88@gmail.com"
              className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex flex-row items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-primary">
                <p>
                  <MdEmail />
                </p>
                <p>
                  Email
                </p>
              </div>
            </Link>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-sm text-on-surface-variant">
              © {new Date().getFullYear()} KaziZehad. All rights reserved.
            </p>
          </div>

        </div>
      </div >
    </footer >
  );
}