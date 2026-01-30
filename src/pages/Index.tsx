import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import PlantTypesSection from "@/components/PlantTypesSection";
import CareGuideSection from "@/components/CareGuideSection";
import ProblemsSection from "@/components/ProblemsSection";
import GrowthSection from "@/components/GrowthSection";
import StylingSection from "@/components/StylingSection";
import WhyLovedSection from "@/components/WhyLovedSection";
import CheatSheetSection from "@/components/CheatSheetSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Navigation />
      <main>
        <HeroSection />
        <WhatIsSection />
        <PlantTypesSection />
        <CareGuideSection />
        <ProblemsSection />
        <GrowthSection />
        <StylingSection />
        <WhyLovedSection />
        <CheatSheetSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
