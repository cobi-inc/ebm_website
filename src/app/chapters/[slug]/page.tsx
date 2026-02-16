import { notFound } from "next/navigation";
import { chapters, getChapterBySlug, getChapterIndex } from "@/lib/chapters";
import { ChapterNav } from "@/components/ChapterNav";
import { ChapterContent } from "./ChapterContent";

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) return { title: "Not Found" };
  return { title: `${chapter.title} — EBM Tutorial` };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) notFound();

  const index = getChapterIndex(slug);

  return (
    <div className="relative">
      <ChapterNav slug={slug} />
      <ChapterContent chapter={chapter} index={index} />
    </div>
  );
}
