export interface Book {
  id: string;
  title: string;
  slug: string;
  color: string;
}

export interface Chapter {
  id: string;
  bookId: string;
  title: string;
  slug: string;
}

export interface Module {
  id: string;
  bookId: string;
  title: string;
  chapterSlugs: string[];
}

export const books: Book[] = [
  {
    id: "basics",
    title: "AI BASICS",
    slug: "the-basics",
    color: "#2D3748",
  },
  {
    id: "ebm",
    title: "ENERGY BASED MODELS",
    slug: "energy-based-models",
    color: "#BE11FF",
  },
];

export const modules: Module[] = [
  { id: "m1", bookId: "basics", title: "Layers", chapterSlugs: ["linear-layers", "convolutional-layers", "normalization-layers"] },
  { id: "m2", bookId: "basics", title: "Activations", chapterSlugs: ["relu-activation", "sigmoid-activation", "tanh-activation"] },
  { id: "m3", bookId: "basics", title: "Training Objectives", chapterSlugs: ["mse-loss", "cross-entropy-loss", "kl-divergence"] },
  { id: "m4", bookId: "ebm", title: "Introduction", chapterSlugs: ["introduction-to-energy"] },
  { id: "m5", bookId: "ebm", title: "Dynamics", chapterSlugs: ["langevin-dynamics"] },
  { id: "m6", bookId: "ebm", title: "Library", chapterSlugs: ["using-the-cobi-library"] },
];

export const chapters: Chapter[] = [
  // AI Basics - Layers
  { id: "b1-1", bookId: "basics", title: "Linear Layers", slug: "linear-layers" },
  { id: "b1-2", bookId: "basics", title: "Convolutional Layers", slug: "convolutional-layers" },
  { id: "b1-3", bookId: "basics", title: "Normalization Layers", slug: "normalization-layers" },
  // AI Basics - Activations
  { id: "b2-1", bookId: "basics", title: "ReLU Activation", slug: "relu-activation" },
  { id: "b2-2", bookId: "basics", title: "Sigmoid Activation", slug: "sigmoid-activation" },
  { id: "b2-3", bookId: "basics", title: "Tanh Activation", slug: "tanh-activation" },
  // AI Basics - Training Objectives
  { id: "b3-1", bookId: "basics", title: "MSE Loss", slug: "mse-loss" },
  { id: "b3-2", bookId: "basics", title: "Cross-Entropy Loss", slug: "cross-entropy-loss" },
  { id: "b3-3", bookId: "basics", title: "KL Divergence", slug: "kl-divergence" },
  // Energy Based Models
  {
    id: "e1",
    bookId: "ebm",
    title: "Introduction to Energy",
    slug: "introduction-to-energy",
  },
  {
    id: "e2",
    bookId: "ebm",
    title: "Langevin Dynamics",
    slug: "langevin-dynamics",
  },
  {
    id: "e3",
    bookId: "ebm",
    title: "Using the Cobi Library",
    slug: "using-the-cobi-library",
  },
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getModuleByChapterSlug(slug: string): Module | undefined {
  return modules.find((m) => m.chapterSlugs.includes(slug));
}

export function getBookByChapterSlug(slug: string): Book | undefined {
  const chapter = getChapterBySlug(slug);
  if (!chapter) return undefined;
  return books.find((b) => b.id === chapter.bookId);
}

export function getAdjacentChapters(slug: string): {
  prev: Chapter | null;
  next: Chapter | null;
} {
  const chapter = getChapterBySlug(slug);
  if (!chapter) return { prev: null, next: null };

  const bookChapters = chapters.filter((c) => c.bookId === chapter.bookId);
  const index = bookChapters.findIndex((c) => c.slug === slug);
  
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? bookChapters[index - 1] : null,
    next: index < bookChapters.length - 1 ? bookChapters[index + 1] : null,
  };
}

export function getChapterIndex(slug: string): number {
  return chapters.findIndex((c) => c.slug === slug);
}

export function getChapterIndexInBook(slug: string): number {
  const chapter = getChapterBySlug(slug);
  if (!chapter) return -1;
  const bookChapters = chapters.filter((c) => c.bookId === chapter.bookId);
  return bookChapters.findIndex((c) => c.slug === slug);
}

export function getBookChapterCount(bookId: string): number {
  return chapters.filter((c) => c.bookId === bookId).length;
}

export function getModuleIndexInBook(slug: string): number {
  const chapter = getChapterBySlug(slug);
  if (!chapter) return -1;
  const bookModules = modules.filter((m) => m.bookId === chapter.bookId);
  return bookModules.findIndex((m) => m.chapterSlugs.includes(slug));
}

export function getChapterIndexInModule(slug: string): number {
  const module = getModuleByChapterSlug(slug);
  if (!module) return -1;
  return module.chapterSlugs.indexOf(slug);
}

export function getModuleChapterCount(slug: string): number {
  const module = getModuleByChapterSlug(slug);
  if (!module) return 0;
  return module.chapterSlugs.length;
}
