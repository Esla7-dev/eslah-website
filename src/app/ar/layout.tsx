import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RTLProvider from "./RTLProvider";
import { ReactNode } from "react";

export const metadata = {
  title: "إصلاح — استوديو تصميم معماري",
  description: "حلول تصميم معمارية واضحة، مهيأة للاعتماد والتنفيذ",
  keywords: ["تصميم معماري", "هندسة معمارية", "استوديو تصميم", "تصميم داخلي", "إصلاح"],
  openGraph: {
    title: "إصلاح — استوديو تصميم معماري",
    description: "حلول تصميم معمارية واضحة، مهيأة للاعتماد والتنفيذ",
    locale: "ar_SA",
  },
};

export default function ArabicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <RTLProvider>
      <a href="#main-content" className="skip-to-content">
        تخطي إلى المحتوى الرئيسي
      </a>
      <Navbar isArabic={true} />
      <main id="main-content">{children}</main>
      <Footer isArabic={true} />
    </RTLProvider>
  );
}
