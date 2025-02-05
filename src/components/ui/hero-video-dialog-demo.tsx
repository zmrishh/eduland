"use client"

import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"

export function HeroVideoDialogDemo() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <HeroVideoDialog
        className="block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/C05egU-FcUc"
        thumbnailSrc="/thumbnail.png"
        thumbnailAlt="Watch Learnado Demo"
      />
    </div>
  )
}
