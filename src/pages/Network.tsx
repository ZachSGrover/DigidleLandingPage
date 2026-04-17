import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatIsDigidle } from "@/components/WhatIsDigidle";
import { HowItWorks } from "@/components/HowItWorks";
import { ValueProposition } from "@/components/ValueProposition";
import { SocialProof } from "@/components/SocialProof";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

/** Digidle Network — original community / marketplace landing (formerly `/`). */
const Network = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatIsDigidle />
      <HowItWorks />
      <ValueProposition />
      <SocialProof />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Network;
