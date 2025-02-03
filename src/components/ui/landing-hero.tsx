"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=2276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Branislav Rodman",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-painting-of-a-palm-leaf-on-a-multicolored-background-AaNPwrSNOFE",
    title: "Neon Palm",
    author: "Tim Mossholder",
  },
  {
    url: "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-blurry-photo-of-a-crowd-of-people-UgbxzloNGsc",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/rippling-crystal-blue-water-9-OCsKoyQlk",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/de/fotos/mann-im-schwarzen-hemd-unter-blauem-himmel-m8RDNiuEXro",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
]

function LandingHero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Floating sensitivity={-0.5} className="relative">
          <FloatingElement
            depth={0.5}
            className="absolute top-[8%] right-[12%] md:top-[10%] md:right-[15%]"
          >
            <motion.img
              src={exampleImages[0].url}
              alt={exampleImages[0].title}
              className="w-28 h-24 sm:w-36 sm:h-32 md:w-44 md:h-36 lg:w-48 lg:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[6deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black rounded-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={1}
            className="absolute bottom-[12%] right-[15%] md:bottom-[15%] md:right-[18%]"
          >
            <motion.img
              src={exampleImages[1].url}
              alt={exampleImages[1].title}
              className="w-32 h-24 sm:w-40 sm:h-32 md:w-48 md:h-40 lg:w-56 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rotate-[8deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black rounded-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={4}
            className="absolute top-[45%] left-[12%] md:top-[40%] md:left-[15%]"
          >
            <motion.img
              src={exampleImages[2].url}
              alt={exampleImages[2].title}
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 object-cover -rotate-[12deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black rounded-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={2}
            className="absolute bottom-[10%] left-[15%] md:bottom-[12%] md:left-[18%]"
          >
            <motion.img
              src={exampleImages[3].url}
              alt={exampleImages[3].title}
              className="w-40 h-32 sm:w-48 sm:h-40 md:w-56 md:h-48 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black rotate-[5deg] rounded-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={1}
            className="absolute top-[25%] right-[35%] md:top-[30%] md:right-[40%]"
          >
            <motion.img
              src={exampleImages[4].url}
              alt={exampleImages[4].title}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black rotate-[15deg] rounded-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            />
          </FloatingElement>
        </Floating>

        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center relative z-20">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full flex-col flex whitespace-pre leading-tight font-mono font-black tracking-tight space-y-1 md:space-y-4 text-black mix-blend-multiply"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
          >
            <span className="bg-[#FF4081] -rotate-2 px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black inline-block">Make Learning</span>
            <LayoutGroup>
              <motion.span layout className="flex whitespace-pre justify-center">
                <motion.span
                  layout
                  className="flex whitespace-pre bg-[#faf9f6] rotate-1 px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  {""}
                </motion.span>
                <TextRotate
                  texts={[
                    "fancy",
                    "fun",
                    "lovely ♥",
                    "inspiring ✨",
                    "🪩 funky",
                    "💃🕺",
                    "sexy",
                    "🕶️ cool",
                    "go 🚀",
                    "🔥🔥🔥",
                    "dynamic ⚡",
                    "pop ✨",
                    "rock 🤘",
                  ]}
                  mainClassName="overflow-hidden pr-3 bg-[#00E5FF] rotate-1 px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black"
                  staggerDuration={0.03}
                  staggerFrom="last"
                  rotationInterval={3000}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </motion.span>
            </LayoutGroup>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center font-mono font-bold pt-4 sm:pt-8 md:pt-10 lg:pt-12 bg-[#B2FF59] -rotate-1 px-4 py-2 mt-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black max-w-2xl"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
          >
            Upload PDFs, highlight key points, and streamline your learning. Fast, intuitive, and built for effortless studying.
          </motion.p>

          <div className="flex flex-row justify-center space-x-4 items-center mt-10 sm:mt-16 md:mt-20 lg:mt-20">
            <motion.button
              className="sm:text-base md:text-lg lg:text-xl font-mono font-black tracking-tight bg-[#FF1744] text-white px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.7 }}
            >
              <Link href="/docs/introduction">
                Get started <span className="font-serif ml-1">→</span>
              </Link>
            </motion.button>
            <motion.button
              className="sm:text-base md:text-lg lg:text-xl font-mono font-black tracking-tight bg-black text-white px-6 py-3 shadow-[4px_4px_0px_0px_rgba(255,23,68,1)] border-2 border-[#FF1744] hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[6px_6px_0px_0px_rgba(255,23,68,1)] transition-all"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.7 }}
            >
              <Link href="https://github.com/danielpetho/fancy">Watch Demo</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { LandingHero }
