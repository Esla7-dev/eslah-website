import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "ESLAH — Architecture & Design Studio",
  description:
    "Multidisciplinary design team delivering coordinated outcomes across architecture, interiors, landscape, and planning.",
  keywords: ["architecture", "interior design", "landscape design", "urban planning", "BIM", "Revit", "3D visualization"],
  authors: [{ name: "ESLAH" }],
  openGraph: {
    title: "ESLAH — Architecture & Design Studio",
    description:
      "Client-centered design deliverables: scope, constraints, and outcomes — not just images.",
    type: "website",
    locale: "en_US",
    siteName: "ESLAH",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ESLAH Architecture & Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESLAH — Architecture & Design Studio",
    description:
      "Multidisciplinary design team delivering coordinated outcomes across architecture, interiors, landscape, and planning.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
