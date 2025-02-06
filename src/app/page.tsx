"use client";

import { LandingHero } from "@/components/ui/landing-hero";
import { FeaturesSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid";
import { FeaturesBento } from "@/components/ui/features-bento";
import { PricingDemo } from "@/components/ui/pricing-demo";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import { HeroVideoDialogDemo } from "@/components/ui/hero-video-dialog-demo";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Preview from "@/components/ui/preview";
import { useRef } from "react";
import { TextReveal } from "@/components/text-reveal";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const topLeftRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const middleLeftRef = useRef<HTMLDivElement>(null);
  const middleRightRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);

  const beams = [
    {
      ref: topLeftRef,
      colors: ["#4285f4", "#34a853"],
      duration: 3,
      icon: "/website.svg",
      alt: "Website",
      position: "left-16 top-16"
    },
    {
      ref: topRightRef,
      colors: ["#4285f4", "#34a853"],
      duration: 4,
      icon: "/read.svg",
      alt: "Read",
      position: "right-16 top-16"
    },
    {
      ref: middleLeftRef,
      colors: ["#000000", "#ffffff"],
      duration: 3.5,
      icon: "/youtube.svg",
      alt: "Youtube",
      position: "left-8 top-1/2 -translate-y-1/2"
    },
    {
      ref: middleRightRef,
      colors: ["#FF4A00", "#FF9000"],
      duration: 5,
      icon: "/bulb.svg",
      alt: "Bulb",
      position: "right-8 top-1/2 -translate-y-1/2"
    },
    {
      ref: bottomLeftRef,
      colors: ["#25D366", "#128C7E"],
      duration: 4.5,
      icon: "/pdf.svg",
      alt: "PDF",
      position: "left-16 bottom-16"
    },
    {
      ref: bottomRightRef,
      colors: ["#00B2FF", "#006AFF"],
      duration: 3.8,
      icon: "/quiz.svg",
      alt: "Quiz",
      position: "right-16 bottom-16"
    }
  ] as const;

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <div className="fixed inset-0 bg-[radial-gradient(#00000015_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <NavBarDemo />
      
      <div className="relative">
        <section id="hero" className="mb-12">
          <LandingHero />
        </section>

        <section id="demo" className="mb-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl lg:text-7xl font-bold text-black mb-8 tracking-tight text-center">
              Learnado in Action
            </h2>         
            <HeroVideoDialogDemo />
          </div>
        </section>

        <section id="features" className="mb-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-end">
                <div className="max-w-xl">
                  <TextReveal 
                    text="Be it PDF, youtube, or a website, we can give you on the go learning"
                    className="h-[60vh]"
                  />
                </div>
              </div>

              <div className="relative h-[500px]" ref={containerRef}>
                {/* Center Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 flex items-center justify-center bg-white rounded-xl shadow-lg p-4 z-10">
                  <div ref={centerRef} className="w-40 h-24">
                    <img src="/learnado.png" alt="Learnado" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Beams and Icons */}
                {beams.map((beam, index) => (
                  <div key={index}>
                    <AnimatedBeam
                      containerRef={containerRef}
                      fromRef={centerRef}
                      toRef={beam.ref}
                      pathColor="#e0e0e0"
                      pathWidth={3}
                      gradientStartColor={beam.colors[0]}
                      gradientStopColor={beam.colors[1]}
                      duration={beam.duration}
                    />
                    <div 
                      ref={beam.ref} 
                      className={`absolute ${beam.position} w-24 h-24 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 z-10 hover:scale-110 transition-transform duration-200`}
                    >
                      <img src={beam.icon} alt={beam.alt} className="w-16 h-16" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="bento" className="mb-20">
          <FeaturesBento />
        </section>

        <section id="about" className="mb-20">
          <FeaturesSectionWithBentoGrid />
        </section>

        <section id="pricing" className="mb-20">
          <PricingDemo />
        </section>

        <Preview />
      </div>
    </main>
  );
}
