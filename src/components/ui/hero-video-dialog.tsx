"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Play, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out"

interface HeroVideoProps {
  animationStyle?: AnimationStyle
  videoSrc: string
  thumbnailSrc: string
  thumbnailAlt?: string
  className?: string
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
}

export function HeroVideoDialog({
  animationStyle = "top-in-bottom-out",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const selectedAnimation = animationVariants[animationStyle]

  return (
    <div className={cn("relative", className)}>
      <div
        className="relative cursor-pointer group"
        onClick={() => setIsVideoOpen(true)}
      >
        <div className="transform transition-transform duration-200 hover:translate-x-1 hover:translate-y-1">
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            width={1920}
            height={1080}
            className="w-full rounded-xl border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group-hover:brightness-[0.9] ease-out"
          />
          <div className="absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl">
            <div className="bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28">
              <div
                className={`flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100`}
              >
                <Play
                  className="size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out"
                  style={{
                    filter:
                      "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-black/50 backdrop-blur-md p-4 sm:p-6 md:p-8"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsVideoOpen(false)
              }
            }}
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                className="absolute -top-12 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 hover:bg-neutral-900/70 transition-colors"
                onClick={() => setIsVideoOpen(false)}
              >
                <XIcon className="size-5" />
              </motion.button>
              <div className="w-full h-full relative">
                <iframe
                  src={videoSrc}
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  style={{ border: "none" }}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
