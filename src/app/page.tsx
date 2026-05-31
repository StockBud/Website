import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { DownloadCTASection } from "@/components/sections/DownloadCTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <SocialProofSection />
        <PositioningSection />
        <HowItWorksSection />
        <DownloadCTASection />
      </main>
      <Footer />
    </>
  );
}
