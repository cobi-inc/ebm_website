"use client";

import { usePathname } from "next/navigation";
import { chapters, getChapterIndex } from "@/lib/chapters";

export function ProgressBar() {
  const pathname = usePathname();
  const slug = pathname.split("/chapters/")[1] ?? "";
  const index = getChapterIndex(slug);
  const progress =
    index >= 0 ? ((index + 1) / chapters.length) * 100 : 0;

  if (index < 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/10">
      <div
        className="h-full bg-[#f1a482] transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
