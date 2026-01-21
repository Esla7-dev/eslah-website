"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";

export default function ProjectGallery({
  images = [],
  title,
  isArabic = false,
}: {
  images?: string[];
  title: string;
  isArabic?: boolean;
}) {
  const safe = useMemo(() => images.filter(Boolean), [images]);
  const [active, setActive] = useState<string | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && active) {
        setActive(null);
      }
    };

    if (active) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [active]);

  const emptyText = isArabic ? "المعرض قريباً" : "Gallery coming soon";
  const galleryText = isArabic ? "المعرض" : "Gallery";
  const closeText = isArabic ? "إغلاق" : "Close";

  if (!safe.length) {
    return (
      <div className="rounded-2xl border border-white/10 p-6 text-white/60">
        {emptyText}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {safe.map((src) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(src)}
            className="overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition text-left"
          >
            <Image
              src={src}
              alt={title}
              width={1400}
              height={900}
              className="h-56 w-full object-cover"
              priority={false}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active ? (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={galleryText}
        >
          <div className="max-w-5xl mx-auto h-full flex items-center justify-center">
            <div
              className="w-full rounded-2xl border border-white/10 overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="text-sm text-white/70">{galleryText}</div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="text-sm border border-white/20 px-3 py-1 rounded hover:border-white/30 transition"
                  aria-label={closeText}
                >
                  {closeText}
                </button>
              </div>

              <Image
                src={active}
                alt={title}
                width={2400}
                height={1600}
                className="w-full h-[70vh] object-contain bg-black"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
