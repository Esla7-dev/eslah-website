"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
      <Link href="/" className="text-xl font-semibold">
        ESLAH
      </Link>

      <div className="flex gap-6 text-sm items-center">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "text-white" : "text-white/60 hover:text-white transition"}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="border px-4 py-2 rounded hover:bg-white/10 transition"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
