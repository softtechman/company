import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { PartnersSection } from "@/sections/PartnersSection";
import { InnovationSection } from "@/sections/InnovationSection";
import { AIBlockchainSection } from "@/sections/AIBlockchainSection";
import { BlockchainJourneySection } from "@/sections/BlockchainJourneySection";
import { IndustriesSection } from "@/sections/IndustriesSection";
import { PortfolioSection } from "@/sections/PortfolioSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ChatWidget } from "@/components/ChatWidget";

export const App = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto scroll-smooth text-start indent-[0px] normal-case visible border-separate font-poppins">
      <Navbar />
      <Hero />
      <PartnersSection />
      <InnovationSection />
      <AIBlockchainSection />
      <BlockchainJourneySection />
      <IndustriesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingButtons />
      <ChatWidget />
    </body>
  );
};
