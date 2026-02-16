"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAdjacentChapters } from "@/lib/chapters";

export function useKeyboardNav(slug: string) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const { prev, next } = getAdjacentChapters(slug);

      if (e.key === "ArrowLeft" && prev) {
        router.push(`/chapters/${prev.slug}`);
      } else if (e.key === "ArrowRight" && next) {
        router.push(`/chapters/${next.slug}`);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slug, router]);
}
