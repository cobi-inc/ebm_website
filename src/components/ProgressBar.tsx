"use client";

import { usePathname } from "next/navigation";
import { getChapterBySlug, getChapterIndexInBook, getBookChapterCount } from "@/lib/chapters";

export function ProgressBar() {
  const pathname = usePathname();
  const slug = pathname.split("/chapters/")[1] ?? "";
  const chapter = getChapterBySlug(slug);
  
  if (!chapter) return null;

  const indexInBook = getChapterIndexInBook(slug);
  const totalInBook = getBookChapterCount(chapter.bookId);
  const progress = ((indexInBook + 1) / totalInBook) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/10">
      <div
        className="h-full bg-[var(--color-accent)] transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
