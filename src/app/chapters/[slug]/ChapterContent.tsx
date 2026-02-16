"use client";

import { PageTransition } from "@/components/PageTransition";
import { chapters, type Chapter } from "@/lib/chapters";

export function ChapterContent({
  chapter,
  index,
}: {
  chapter: Chapter;
  index: number;
}) {
  return (
    <PageTransition direction={1}>
      <article className="max-w-3xl mx-auto px-6 py-16 md:px-12">
        <div className="mb-8">
          <span className="text-sm font-mono text-black/40 uppercase tracking-wider">
            Chapter {index + 1} of {chapters.length}
          </span>
        </div>
        <div className="prose prose-lg prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-8">{chapter.title}</h1>
          <p className="text-xl text-black/60 leading-relaxed">
            This chapter is coming soon. Content for &ldquo;{chapter.title}
            &rdquo; will be added here.
          </p>
          <div className="mt-12 p-6 bg-black/[0.03] rounded-xl border border-black/10">
            <p className="text-black/50 text-sm font-mono">
              Placeholder content — navigate between chapters using the arrows
              on the sides or the left/right arrow keys on your keyboard.
            </p>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
