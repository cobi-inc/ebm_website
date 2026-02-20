"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chapters, books, modules, getChapterBySlug, getModuleByChapterSlug } from "@/lib/chapters";

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedModuleIds, setExpandedModuleIds] = useState<string[]>([]);

  const currentSlug = pathname.split("/chapters/")[1] ?? "";
  const currentChapter = getChapterBySlug(currentSlug);
  const currentBookId = currentChapter?.bookId;
  const currentModule = getModuleByChapterSlug(currentSlug);

  // Automatically expand the current module
  useEffect(() => {
    if (currentModule && !expandedModuleIds.includes(currentModule.id)) {
      setExpandedModuleIds((prev) => [...prev, currentModule.id]);
    }
  }, [currentModule]);

  const toggleModule = (moduleId: string) => {
    setExpandedModuleIds((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const currentBook = books.find(b => b.id === currentBookId);
  const bookModules = modules.filter(m => m.bookId === currentBookId);

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
        } md:translate-x-0 overflow-y-auto`}
      >
        <div className="p-6 border-b border-white/10">
          <Link href="/">
            <Image
              src="/cobi_logo_transparent_background.png"
              alt="Cobi Logo"
              width={180}
              height={63}
              className="mb-4"
              priority
            />
          </Link>
          <h1 className="text-lg font-bold tracking-tight uppercase">
            {currentBook?.title || "Library"}
          </h1>
        </div>

        <nav className="p-4 space-y-2">
          {currentBook && (
            <div key={currentBook.id}>
              <div className="space-y-1">
                {bookModules.map((module, index) => {
                  const isExpanded = expandedModuleIds.includes(module.id);
                  const isModuleActive = module.chapterSlugs.includes(currentSlug);

                  return (
                    <div key={module.id} className="space-y-1">
                      <button
                        onClick={() => toggleModule(module.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                          isModuleActive 
                            ? "bg-white/10 text-white font-medium" 
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>Chapter {index + 1}: {module.title}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden space-y-1 ml-4 border-l border-white/10"
                          >
                            {module.chapterSlugs.map((slug) => {
                              const chapter = chapters.find(c => c.slug === slug);
                              if (!chapter) return null;
                              const isActive = currentSlug === slug;

                              return (
                                <li key={chapter.id}>
                                  <Link
                                    href={`/chapters/${chapter.slug}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-colors ${
                                      isActive
                                        ? "bg-white/15 text-white font-semibold"
                                        : "text-white/50 hover:bg-white/5 hover:text-white"
                                    }`}
                                  >
                                    <span>{chapter.title}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {!currentBook && (
            <div className="p-4 text-center">
              <Link 
                href="/"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                ← Return to Bookshelf
              </Link>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}
