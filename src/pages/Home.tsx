import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { PartnersSection } from "@/sections/PartnersSection";
import { PortfolioSection } from "@/sections/PortfolioSection";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ChatWidget } from "@/components/ChatWidget";
import { Impact } from "@/sections/Impact";
import { InovationSection } from "@/sections/InovationSection";
import { IndustrySection } from "@/sections/IndustrySection";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto scroll-smooth text-start indent-[0px] normal-case visible border-separate font-poppins">
      <Navbar />
      <Hero />
      <PartnersSection />
      <Impact />
      {/* <Impact1Section /> */}
      <InovationSection />
      <CTASection />
      <IndustrySection />
      <PortfolioSection />
      <ChatWidget />
      <Contact />
    </body>
  );
}


