import { LandingHero } from "@/components/ui/landing-hero";
import { FeaturesSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid";
import { FeaturesBento } from "@/components/ui/features-bento";
import { PricingDemo } from "@/components/ui/pricing-demo";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import { HeroVideoDialogDemo } from "@/components/ui/hero-video-dialog-demo";
import Preview from "@/components/ui/preview";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] relative">
      <div className="fixed inset-0 bg-[radial-gradient(#00000015_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <NavBarDemo />
      <div className="flex-1 relative">
        <section id="hero">
          <LandingHero />
        </section>
        <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-5xl lg:text-7xl font-bold text-black mb-8 tracking-tight text-center">
          Learnado in Action
        </h2>         
         <HeroVideoDialogDemo />
        </div>
        <section id="features">
          <FeaturesBento />
        </section>
        <section id="about">
          <FeaturesSectionWithBentoGrid />
        </section>
        <section id="pricing" className="relative z-0">
          <PricingDemo />
        </section>
        <Preview />
      </div>
    </main>
  );
}
