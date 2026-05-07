"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <nav className="bg-black text-white font-space-grotesk uppercase tracking-tighter text-xs md:text-sm border-b border-white w-full sticky top-0 z-50 border-solid flex justify-between items-center h-12 px-6">
      <Link href="/" className="font-bold text-white text-base tracking-widest">
        ~/root/portfolio
      </Link>

      <div className="hidden md:flex gap-2">
        <Link
          href="/projects"
          className={`px-2 py-1 hover:bg-white hover:text-black transition-none cursor-pointer active:invert ${
            pathname === "/projects" ? "bg-white text-black" : "text-white"
          }`}
        >
          projects
        </Link>
        <Link
          href="/about"
          className={`px-2 py-1 hover:bg-white hover:text-black transition-none cursor-pointer active:invert ${
            pathname === "/about" ? "bg-white text-black" : "text-white"
          }`}
        >
          about
        </Link>
        <Link
          href="/"
          className="text-white px-2 py-1 hover:bg-white hover:text-black transition-none cursor-pointer active:invert"
        >
          stack
        </Link>
        <Link
          href="/contact"
          className={`px-2 py-1 hover:bg-white hover:text-black transition-none cursor-pointer active:invert ${
            pathname === "/contact" ? "bg-white text-black" : "text-white"
          }`}
        >
          contact
        </Link>
      </div>

      <button className="border border-white px-3 py-1 hover:bg-white hover:text-black transition-none cursor-pointer hidden md:block">
        [terminal_access]
      </button>
    </nav>
  );
}
