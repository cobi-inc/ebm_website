"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { chapters } from "@/lib/chapters";

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentSlug = pathname.split("/chapters/")[1] ?? "";

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-[var(--color-sidebar)] text-white"
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[var(--color-sidebar)] text-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-6 border-b border-white/10">
          <Image
            src="/cobi_logo.png"
            alt="Cobi Logo"
            width={180}
            height={63}
            className="mb-4"
            priority
          />
          <h1 className="text-lg font-bold tracking-tight">EBM Tutorial</h1>
          <p className="text-sm text-white/60 mt-1">& Cobi Library Guide</p>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            {chapters.map((chapter, index) => {
              const isActive = currentSlug === chapter.slug;
              return (
                <li key={chapter.id}>
                  <Link
                    href={`/chapters/${chapter.slug}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-white/15 text-white font-semibold"
                        : "text-white/70 hover:bg-[var(--color-sidebar-hover)] hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${
                        isActive
                          ? "border-white bg-white/20"
                          : "border-white/30"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span>{chapter.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
