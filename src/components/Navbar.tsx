"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar({ isArabic = false }: { isArabic?: boolean }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = isArabic
    ? [
        { href: "/ar/services", label: "خدماتنا" },
        { href: "/ar/projects", label: "المشاريع" },
        { href: "/ar/about", label: "من نحن" },
      ]
    : [
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
      ];

  const homeHref = isArabic ? "/ar" : "/";
  const contactHref = isArabic ? "/ar/contact" : "/contact";
  const contactLabel = isArabic ? "تواصل" : "Contact";
  const langSwitchHref = isArabic ? "/" : "/ar";
  const langSwitchLabel = isArabic ? "EN" : "ع";

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-6 border-b border-white/10">
      <Link href={homeHref} className="text-xl font-semibold">
        ESLAH
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-sm items-center">
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
          href={contactHref}
          className="border px-4 py-2 rounded hover:bg-white/10 transition"
        >
          {contactLabel}
        </Link>
        <Link
          href={langSwitchHref}
          className="text-white/60 hover:text-white transition text-xs"
          title={isArabic ? "Switch to English" : "التبديل إلى العربية"}
        >
          {langSwitchLabel}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
        aria-label={mobileMenuOpen ? (isArabic ? "إغلاق القائمة" : "Close menu") : (isArabic ? "فتح القائمة" : "Open menu")}
        aria-expanded={mobileMenuOpen}
      >
        <span className={`h-0.5 w-full bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`h-0.5 w-full bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`h-0.5 w-full bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-black z-50 px-4 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg py-3 border-b border-white/10 ${pathname === link.href ? "text-white" : "text-white/60"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={contactHref}
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg py-3 border-b border-white/10 text-white/60"
          >
            {contactLabel}
          </Link>
          <Link
            href={langSwitchHref}
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg py-3 text-white/60"
          >
            {isArabic ? "Switch to English" : "التبديل إلى العربية"} ({langSwitchLabel})
          </Link>
        </div>
      )}
    </nav>
  );
}
