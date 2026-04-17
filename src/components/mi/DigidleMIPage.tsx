import { MINav } from "./MINav";
import { MIHero } from "./MIHero";
import { MIBrandsSection } from "./MIBrandsSection";
import { MICapabilitiesSection } from "./MICapabilitiesSection";
import { MIFaqSection } from "./MIFaqSection";
import { MINetworkSection } from "./MINetworkSection";
import { MIInquiryForm } from "./MIInquiryForm";
import { MIFooterSections } from "./MIFooterSections";

/**
 * Digidle homepage — dark gateway layout with emerald accents.
 */
export function DigidleMIPage() {
  return (
    <div className="relative min-h-screen bg-transparent font-sans text-gray-400 antialiased selection:bg-emerald-500/30 selection:text-emerald-100">
      <MINav />
      <main className="text-gray-400">
        <MIHero />
        <MIBrandsSection />
        <MICapabilitiesSection />
        <MIFaqSection />
        <MINetworkSection />
        <MIInquiryForm />
        <MIFooterSections />
      </main>
    </div>
  );
}
