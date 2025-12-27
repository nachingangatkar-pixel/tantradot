"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "@/images/logo.png";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  const headerClass = `sticky top-0 z-50 bg-white md:bg-white/80 md:backdrop-blur-sm text-slate-900 border-b border-slate-200 transition-shadow duration-300 ${hasScrolled ? "shadow-md" : ""}`;

  const desktopLinkColor = "text-slate-700 hover:text-slate-900";
  const mobileMenuBg = "bg-white text-slate-700 border-slate-200";

  return (
    <header data-force-light className={headerClass}>
      <div className="max-w-8xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="Company Logo"
              width={260}
              height={50}
              className="rounded-md"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative ${desktopLinkColor} text-lg group`}
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="md:hidden text-slate-800"
          >
            {navbarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {navbarOpen && (
          <div className={`md:hidden mt-4 rounded-lg shadow-lg border ${mobileMenuBg} mobile-menu`}>
            <ul className="flex flex-col divide-y">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setNavbarOpen(false)}
                    className={`block px-4 py-3 text-lg hover:bg-slate-100`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
