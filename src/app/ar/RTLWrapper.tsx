"use client";

import { useEffect } from "react";

export default function RTLWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.setAttribute("lang", "ar");
    document.documentElement.setAttribute("dir", "rtl");

    return () => {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
    };
  }, []);

  return <>{children}</>;
}
