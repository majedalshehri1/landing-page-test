"use client";

import HeroSection from "@/components/sections/HeroSection";
import OurIdeaSection from "@/components/sections/OurIdeaSection";
import ProjectComponentsSection from "@/components/sections/ProjectComponentsSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import TeamSection from "@/components/sections/TeamSection";
import Footer from "@/components/layout/Footer";

export default function YusrLandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <OurIdeaSection />
      <ProjectComponentsSection />
      <TechnologiesSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
