"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  text: string;
}

export const TextReveal: FC<TextRevealProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div className="sticky top-0 mx-auto flex h-full items-center bg-transparent">
        <p className="flex flex-wrap p-5 text-2xl font-bold md:text-3xl lg:text-4xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 0.1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity }}
        className="text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};
