"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface BookProps {
  title: string;
  color: string;
  href: string;
  delay: number;
  isComingSoon?: boolean;
}

const BookSpine = ({ title, color, href, delay, isComingSoon }: BookProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      className="relative group"
    >
      <Link
        href={isComingSoon ? "#" : href}
        className={`block relative w-64 h-80 transition-all duration-300 transform group-hover:-translate-y-8 group-hover:scale-105 shadow-[4px_0_15px_rgba(0,0,0,0.3)] rounded-sm ${
          isComingSoon ? "cursor-not-allowed grayscale" : "cursor-pointer"
        }`}
        style={{
          backgroundColor: color,
        }}
      >
        {/* Spine Texture/Lines */}
        <div className="absolute inset-0 flex flex-col justify-between py-6 pointer-events-none">
          <div className="border-y border-white/20 h-10 flex items-center justify-center">
             <div className="w-8 h-3 opacity-40">
                <Image
                  src="/cobi_logo.png"
                  alt=""
                  width={32}
                  height={11}
                  className="brightness-0 invert"
                />
             </div>
          </div>
          <div className="border-y border-white/20 h-6" />
        </div>

        {/* Horizontal Title */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <h3 className="font-serif text-lg font-black text-white text-center leading-tight tracking-tight uppercase drop-shadow-lg">
            {title}
          </h3>
        </div>

        {/* Gloss/Shadow for 3D effect */}
        <div className="absolute inset-y-0 left-0 w-2 bg-white/10" />
        <div className="absolute inset-y-0 right-0 w-3 bg-black/20" />
        
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs text-white font-bold uppercase tracking-widest">
              Coming Soon
            </span>
          </div>
        )}
      </Link>
    </motion.div>
  );
};

export default function Bookshelf() {
  const books: BookProps[] = [
    {
      title: "THE BASICS",
      color: "#BE11FF", 
      href: "/chapters/introduction-to-energy",
      delay: 0.1,
    },
    {
      title: "PROBABILISTIC INFERENCE TIME ALGORITHMS",
      color: "#1A1A1A",
      href: "#",
      delay: 0.2,
      isComingSoon: true,
    },
    {
      title: "EBMS",
      color: "#2D3748",
      href: "#",
      delay: 0.3,
      isComingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex flex-col items-center justify-center p-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <Image
          src="/cobi_logo.png"
          alt="Cobi Logo"
          width={180}
          height={63}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-serif font-black tracking-tight text-black mb-2">
          LIBRARY
        </h1>
        <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto" />
      </motion.div>

      <div className="relative">
        {/* The Wooden Shelf */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[110%] h-6 bg-[#3d2b1f] rounded-sm shadow-xl z-0" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[105%] h-4 bg-[#2a1d15] rounded-b-sm z-0" />
        
        <div className="flex items-end justify-center gap-2 relative z-10 px-10">
          {books.map((book) => (
            <BookSpine key={book.title} {...book} />
          ))}
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-32 text-black/40 text-sm font-serif italic"
      >
        Select a book to begin.
      </motion.footer>
    </div>
  );
}
