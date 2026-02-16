import type { Metadata } from "next";
import { Merriweather, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { ProgressBar } from "@/components/ProgressBar";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EBM Tutorial & Cobi Library Guide",
  description:
    "An interactive tutorial on Energy-Based Models and the Cobi Library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${jetbrainsMono.variable}`}>
      <body className="font-serif bg-[var(--color-background)] text-black antialiased">
        <ProgressBar />
        <Sidebar />
        <main className="ml-0 md:ml-64 min-h-screen transition-[margin] duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}
