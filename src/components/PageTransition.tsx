"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { getChapterIndex } from "@/lib/chapters";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "10%" : "-10%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-10%" : "10%",
    opacity: 0,
  }),
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const slug = pathname.split("/chapters/")[1] ?? "";
  const currentIndex = getChapterIndex(slug);

  const prevIndexRef = useRef(currentIndex);
  const directionRef = useRef(1);

  if (currentIndex !== prevIndexRef.current) {
    directionRef.current = currentIndex > prevIndexRef.current ? 1 : -1;
    prevIndexRef.current = currentIndex;
  }

  const direction = directionRef.current;

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="popLayout" custom={direction} initial={false}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
