import { LandingHero } from "@/components/ui/landing-hero";
import { FeaturesSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#faf9f6] relative">
      <div className="absolute inset-0 bg-[radial-gradient(#00000015_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none fixed" />
      <div className="flex-1 flex flex-col relative">
        <LandingHero />
        <FeaturesSectionWithBentoGrid />
      </div>
    </main>
  );
}
