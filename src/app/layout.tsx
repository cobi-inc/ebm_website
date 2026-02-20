import type { Metadata } from "next";
import { Merriweather, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Cobi Library",
  description:
    "An interactive library of tutorials on Energy-Based Models and the Cobi ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${jetbrainsMono.variable}`}>
      <body className="font-serif bg-[var(--color-background)] text-black antialiased">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
