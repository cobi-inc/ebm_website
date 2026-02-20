import dynamic from "next/dynamic";
import { chapters, type Chapter } from "@/lib/chapters";

export function ChapterContent({
  chapter,
  index,
}: {
  chapter: Chapter;
  index: number;
}) {
  // Lazily load the chapter content
  const DynamicContent = dynamic(
    () => import(`@/content/chapters/${chapter.slug}.mdx`),
    {
      loading: () => (
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-black/5 rounded w-3/4"></div>
          <div className="h-4 bg-black/5 rounded w-full"></div>
          <div className="h-4 bg-black/5 rounded w-5/6"></div>
        </div>
      ),
    }
  );

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:px-12">
      <div className="mb-8">
        <span className="text-sm font-mono text-black/40 uppercase tracking-wider">
          Chapter {index + 1} of {chapters.length}
        </span>
      </div>
      <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-h1:text-4xl prose-p:text-xl prose-p:text-black/60 prose-p:leading-relaxed">
        <DynamicContent />
      </div>
    </article>
  );
}
