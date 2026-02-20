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

const BookCover = ({ title, color, href, delay, isComingSoon }: BookProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      className="relative group"
    >
      <Link
        href={isComingSoon ? "#" : href}
        className={`block relative w-56 h-80 transition-all duration-300 transform group-hover:-translate-y-6 group-hover:scale-105 shadow-2xl rounded-r-sm ${
          isComingSoon ? "cursor-not-allowed grayscale" : "cursor-pointer"
        }`}
        style={{
          backgroundColor: color,
        }}
      >
        {/* Spine shadow (left edge of the cover) */}
        <div className="absolute inset-y-0 left-0 w-4 bg-black/20 rounded-l-sm" />
        
        {/* Cover Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
          <div className="flex flex-col items-center">
            <div className="w-12 h-4 mb-8 opacity-60">
                <Image
                  src="/cobi_logo.png"
                  alt=""
                  width={48}
                  height={17}
                  className="brightness-0 invert mx-auto"
                />
            </div>
            <h3 className="font-serif text-xl font-black text-center leading-tight tracking-tight uppercase drop-shadow-md">
              {title}
            </h3>
          </div>
          
          <div className="text-[10px] text-center opacity-40 font-mono tracking-widest uppercase">
            Cobi Press
          </div>
        </div>

        {/* Highlight/Gloss */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-r-sm" />
        
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm text-white font-bold uppercase tracking-widest bg-black/60 px-3 py-1 rounded">
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
        className="text-center mb-20"
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
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[115%] h-6 bg-[#3d2b1f] rounded-sm shadow-xl z-0" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-[#2a1d15] rounded-b-sm z-0" />
        
        <div className="flex items-end justify-center gap-8 relative z-10 px-10">
          {books.map((book) => (
            <BookCover key={book.title} {...book} />
          ))}
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-32 text-black/40 text-sm font-serif italic"
      >
        Select a book to begin your journey.
      </motion.footer>
    </div>
  );
}
