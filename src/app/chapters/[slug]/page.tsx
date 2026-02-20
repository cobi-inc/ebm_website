import { notFound } from "next/navigation";
import { 
  chapters, 
  getChapterBySlug, 
  getChapterIndexInBook, 
  getBookChapterCount,
  getModuleIndexInBook,
  getChapterIndexInModule,
  getModuleChapterCount
} from "@/lib/chapters";
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

  const indexInBook = getChapterIndexInBook(slug);
  const totalInBook = getBookChapterCount(chapter.bookId);
  const moduleIndex = getModuleIndexInBook(slug);
  const chapterIndexInModule = getChapterIndexInModule(slug);
  const totalInModule = getModuleChapterCount(slug);

  return (
    <div className="relative">
      <ChapterNav slug={slug} />
      <ChapterContent 
        chapter={chapter} 
        indexInBook={indexInBook} 
        totalInBook={totalInBook} 
        moduleIndex={moduleIndex}
        chapterIndexInModule={chapterIndexInModule}
        totalInModule={totalInModule}
      />
    </div>
  );
}
