import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/onlylogo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={Logo}
                alt="TantraDot"
                width={44}
                height={44}
                className="rounded-md"
              />
              <div>
                <p className="text-lg font-semibold text-white">
                  TantraDOT
                </p>
                <p className="text-sm text-slate-400">
                  Building thoughtful web experiences
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm">
              We design and build scalable web applications using modern
              technologies like Next.js, TypeScript, and cloud-native tools.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase text-white">
              Pages
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase text-white">
              What We Do
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/development-it" className="hover:text-white">Development & IT</Link></li>
              <li><Link href="/digital-marketing" className="hover:text-white">Digital Marketing</Link></li>
              <li><Link href="/talent-acquisition" className="hover:text-white">Talent Acquisition</Link></li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-slate-800" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 text-center md:text-left">
            © {year} TantraDOT Technologies. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            <a
              aria-label="Twitter/X"
              href="https://x.com/TantraDot"
              className="rounded-md p-2 hover:bg-slate-800 transition"
              title="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.92c-.63.28-1.3.48-2 .57.72-.43 1.27-1.1 1.53-1.9-.67.4-1.42.7-2.22.86A3.52 3.52 0 0015.5 4c-1.94 0-3.5 1.68-3.5 3.75 0 .29.03.57.1.84-2.91-.15-5.5-1.64-7.23-3.9-.3.5-.47 1.08-.47 1.7 0 1.17.6 2.2 1.52 2.8-.56-.02-1.09-.18-1.55-.43v.04c0 1.82 1.28 3.34 2.98 3.68-.33.1-.68.15-1.04.15-.25 0-.5-.02-.74-.07.5 1.6 2 2.77 3.77 2.8A7.07 7.07 0 012 19.54c.64.38 1.4.6 2.2.6 5.32 0 8.23-4.46 8.23-8.33v-.38c.57-.42 1.05-.95 1.44-1.55z" />
              </svg>
            </a>

            <a
              aria-label="GitHub"
              href="#"
              className="rounded-md p-2 hover:bg-slate-800 transition"
              title="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.8 5.43.8 11.7c0 4.86 3.16 8.98 7.55 10.44.55.1.75-.24.75-.53v-1.86c-3.07.68-3.72-1.36-3.72-1.36-.5-1.24-1.23-1.57-1.23-1.57-.99-.68.08-.66.08-.66 1.1.08 1.68 1.14 1.68 1.14.97 1.66 2.53 1.18 3.15.9.1-.71.38-1.18.7-1.45-2.45-.28-5.02-1.24-5.02-5.5 0-1.21.43-2.2 1.13-2.98-.12-.28-.5-1.42.1-2.96 0 0 .92-.3 3.02 1.13a10.4 10.4 0 012.75-.38c.94 0 1.9.12 2.75.38 2.09-1.43 3-1.13 3-1.13.6 1.54.22 2.68.1 2.96.7.78 1.13 1.77 1.13 2.98 0 4.27-2.58 5.22-5.04 5.5.39.34.73 1.02.73 2.06v3.06c0 .3.18.64.76.53 4.38-1.46 7.53-5.58 7.53-10.44C23.2 5.43 18.27.5 12 .5z" />
              </svg>
            </a>

            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/tantradottechnologies/"
              className="rounded-md p-2 hover:bg-slate-800 transition"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>

            <a
              aria-label="Instagram"
              href="https://www.instagram.com/tantradottechnologies?igsh=dmxqNHNsaTA4cDUz"
              className="rounded-md p-2 hover:bg-slate-800 transition"
              title="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </a>

            <a
              aria-label="Threads"
              href="#"
              className="rounded-md p-2 hover:bg-slate-800 transition"
              title="Threads"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.002 2c-5.525 0-10 4.477-10 10 0 5.525 4.475 10 10 10s10-4.475 10-10c0-5.523-4.475-10-10-10zm.002 1.667c4.602 0 8.333 3.731 8.333 8.333s-3.731 8.333-8.333 8.333-8.333-3.731-8.333-8.333 3.731-8.333 8.333-8.333z" />
                <path d="M12 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
