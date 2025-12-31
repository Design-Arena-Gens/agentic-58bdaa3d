import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Viral 2026 App Ideas Atlas",
  description:
    "A curated atlas of innovative, problem-solving app concepts poised to go viral in 2026."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-midnight text-slate-100 scroll-smooth">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
