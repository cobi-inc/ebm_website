"use client";

import { type Chapter } from "@/lib/chapters";

// Pre-import all MDX files to ensure instantaneous navigation
import ConvolutionalLayers from "@/content/chapters/convolutional-layers.mdx";
import CrossEntropyLoss from "@/content/chapters/cross-entropy-loss.mdx";
import IntroToEnergy from "@/content/chapters/introduction-to-energy.mdx";
import KLDivergence from "@/content/chapters/kl-divergence.mdx";
import LangevinDynamics from "@/content/chapters/langevin-dynamics.mdx";
import LinearLayers from "@/content/chapters/linear-layers.mdx";
import MSELoss from "@/content/chapters/mse-loss.mdx";
import NormalizationLayers from "@/content/chapters/normalization-layers.mdx";
import ReLUActivation from "@/content/chapters/relu-activation.mdx";
import SigmoidActivation from "@/content/chapters/sigmoid-activation.mdx";
import TanhActivation from "@/content/chapters/tanh-activation.mdx";
import UsingCobi from "@/content/chapters/using-the-cobi-library.mdx";

const MDX_COMPONENTS: Record<string, any> = {
  "convolutional-layers": ConvolutionalLayers,
  "cross-entropy-loss": CrossEntropyLoss,
  "introduction-to-energy": IntroToEnergy,
  "kl-divergence": KLDivergence,
  "langevin-dynamics": LangevinDynamics,
  "linear-layers": LinearLayers,
  "mse-loss": MSELoss,
  "normalization-layers": NormalizationLayers,
  "relu-activation": ReLUActivation,
  "sigmoid-activation": SigmoidActivation,
  "tanh-activation": TanhActivation,
  "using-the-cobi-library": UsingCobi,
};

export function ChapterContent({
  chapter,
  moduleIndex,
  chapterIndexInModule,
  totalInModule,
}: {
  chapter: Chapter;
  indexInBook: number;
  totalInBook: number;
  moduleIndex: number;
  chapterIndexInModule: number;
  totalInModule: number;
}) {
  const Content = MDX_COMPONENTS[chapter.slug];

  if (!Content) {
    return (
      <div className="p-8 text-red-500 font-bold">
        Error: Content for "{chapter.slug}" not found in registry.
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:px-12">
      <div className="mb-8">
        <span className="text-sm font-mono text-black/40 uppercase tracking-wider">
          Chapter {moduleIndex + 1} | Page {chapterIndexInModule + 1} of {totalInModule}
        </span>
      </div>
      <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-h1:text-4xl prose-p:text-xl prose-p:text-black/60 prose-p:leading-relaxed">
        <Content />
      </div>
    </article>
  );
}
