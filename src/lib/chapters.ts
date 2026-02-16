export interface Chapter {
  id: string;
  title: string;
  slug: string;
}

export const chapters: Chapter[] = [
  {
    id: "1",
    title: "Introduction to Energy",
    slug: "introduction-to-energy",
  },
  {
    id: "2",
    title: "Langevin Dynamics",
    slug: "langevin-dynamics",
  },
  {
    id: "3",
    title: "Using the Cobi Library",
    slug: "using-the-cobi-library",
  },
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getAdjacentChapters(slug: string): {
  prev: Chapter | null;
  next: Chapter | null;
} {
  const index = chapters.findIndex((c) => c.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}

export function getChapterIndex(slug: string): number {
  return chapters.findIndex((c) => c.slug === slug);
}
