"use client"

import { motion, LayoutGroup } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import Link from "next/link"

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=500&auto=format&fit=crop",
    alt: "Student studying with laptop in library",
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
    alt: "Group study session with laptops",
  },
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop",
    alt: "Person testing software on laptop",
  },
  {
    url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500&auto=format&fit=crop",
    alt: "Student working on assignments",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
    alt: "College students collaborating",
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500&auto=format&fit=crop",
    alt: "Person writing notes while studying",
  }
]

function LandingHero() {
  const [showDialog, setShowDialog] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)



  return (
    <section className="w-full h-screen overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative bg-none z-0">
      {/* <div className="absolute inset-0 grid grid-cols-[repeat(40,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] bg-dots-pattern bg-dots [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
        {Array.from({ length: 800 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-black/10"
            style={{
              gridColumn: `${(i % 40) + 1} / span 1`,
              gridRow: `${Math.floor(i / 40) + 1} / span 1`
            }}
          />
        ))}
      </div> */}
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.img
            src={exampleImages[0].url}
            alt={exampleImages[0].alt}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.img
            src={exampleImages[1].url}
            alt={exampleImages[1].alt}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
        >
          <motion.img
            src={exampleImages[2].url}
            alt={exampleImages[2].alt}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
        >
          <motion.img
            src={exampleImages[3].url}
            alt={exampleImages[3].alt}
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none rotate-[6deg]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
        >
          <motion.img
            src={exampleImages[4].url}
            alt={exampleImages[4].alt}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none rotate-[19deg]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight tracking-tight space-y-1 md:space-y-4 font-inter"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span className="bg-yellow-300 px-4 py-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-bold">Make Learning</span>
          <LayoutGroup>
            <motion.span layout className="flex items-center whitespace-pre flex-nowrap font-bold">
              <TextRotate
                texts={[
                  "fun🎉",
                  "lovely❤️",
                  "inspiring",
                  "funky👽",
                  "💃🕺",
                  "sexy",
                  "🕶️cool",
                  "go🚀",
                  "🔥🔥🔥",
                  "dynamic",
                  "pop✨",
                  "rock🤘",
                ]}
                mainClassName="overflow-hidden px-4 sm:px-5 text-white bg-blue-500 py-0 pb-2 md:pb-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap inline-flex items-center justify-center font-bold"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
              <motion.span
                className="flex whitespace-pre font-bold"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                {" "} again
              </motion.span>
            </motion.span>
          </LayoutGroup>
        </motion.h1>
        <motion.p
          className="relative text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-5xl mx-auto px-4 py-6 bg-green-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-20 mt-6"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          <span className="font-black">We&apos;re working on making learning fun and engaging.</span> Join our waitlist to be the first to know when we launch!
        </motion.p>

        <div className="mx-auto max-w-2xl text-center">
          {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Get Started Today
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join our community and start learning with us.
          </p> */}
          <div className="mt-10 flex items-center justify-center gap-x-8">
            <Link
              href="/sign-up"
              className="rounded-xl px-8 py-5 text-lg font-bold text-white bg-[#FF3366] border-4 border-[#000000] shadow-[4px_4px_0px_0px_#000000] 
  hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            >
              Get Started
            </Link>
            <Link
              href="/demo"
              className="rounded-xl px-8 py-5 text-lg font-bold text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            >
              Watch Our Demo
            </Link>
          </div>
        </div>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-md border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-inter">🎉 You&apos;re on the list!</DialogTitle>
              <DialogDescription className="text-lg font-inter">
                Thanks for joining! We&apos;ll notify you when we launch. Keep an eye on your inbox for updates about our what we&apos;re cooking.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export { LandingHero }