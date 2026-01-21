"use client";

import { useEffect, ReactNode } from "react";

export default function RTLProvider({ children }: { children: ReactNode }) {
  // Set immediately on mount, before paint
  if (typeof document !== "undefined") {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  }

  useEffect(() => {
    // Ensure it's set
    document.documentElement.setAttribute("lang", "ar");
    document.documentElement.setAttribute("dir", "rtl");

    // Cleanup on unmount
    return () => {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
    };
  }, []);

  return <>{children}</>;
}
