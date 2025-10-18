import { Hero } from "@/sections/Hero";
import { PartnersSection } from "@/sections/PartnersSection";
import { PortfolioSection } from "@/sections/PortfolioSection";
import { CTASection } from "@/sections/CTASection";
import { Impact } from "@/sections/Impact";
import { InnovationSection } from "@/sections/InnovationSection";
import { IndustrySection } from "@/sections/IndustrySection";
import { Contact } from "@/components/Contact";
import ClientReviews  from "@/sections/ClientReviews";
import WhyAIBlockchain from "@/sections/WhyAIBlockchain";

export default function Home() {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto scroll-smooth text-start indent-[0px] normal-case visible border-separate font-poppins">
      <Hero />
      <PartnersSection />
      <Impact />
      <InnovationSection />
      <WhyAIBlockchain />
      <CTASection />
      <IndustrySection />
      <PortfolioSection />
      <ClientReviews />
      <Contact />
    </body>
  );
}


