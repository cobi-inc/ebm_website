"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { getAdjacentChapters } from "@/lib/chapters";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";

export function ChapterNav({ slug }: { slug: string }) {
  const router = useRouter();
  const { prev, next } = getAdjacentChapters(slug);
  const [hoveredDirection, setHoveredDirection] = useState<
    "prev" | "next" | null
  >(null);

  useKeyboardNav(slug);

  return (
    <>
      {prev && (
        <button
          onClick={() => router.push(`/chapters/${prev.slug}`)}
          onMouseEnter={() => setHoveredDirection("prev")}
          onMouseLeave={() => setHoveredDirection(null)}
          className="fixed left-4 md:left-[17rem] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/5 hover:bg-black/10 text-black/50 hover:text-black transition-all group hidden md:flex items-center"
          aria-label={`Previous: ${prev.title}`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {hoveredDirection === "prev" && (
            <span className="absolute left-full ml-2 whitespace-nowrap bg-black text-white text-sm px-3 py-1.5 rounded-lg">
              {prev.title}
            </span>
          )}
        </button>
      )}

      {next && (
        <button
          onClick={() => router.push(`/chapters/${next.slug}`)}
          onMouseEnter={() => setHoveredDirection("next")}
          onMouseLeave={() => setHoveredDirection(null)}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/5 hover:bg-black/10 text-black/50 hover:text-black transition-all group hidden md:flex items-center"
          aria-label={`Next: ${next.title}`}
        >
          {hoveredDirection === "next" && (
            <span className="absolute right-full mr-2 whitespace-nowrap bg-black text-white text-sm px-3 py-1.5 rounded-lg">
              {next.title}
            </span>
          )}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
