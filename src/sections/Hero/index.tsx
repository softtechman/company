import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <section className="relative bg-white bg-[linear-gradient(rgb(255,255,255),rgb(4,150,198))] box-border caret-transparent flex flex-col z-0 mt-[88px] mb-0 pb-0 md:mb-48 md:pb-24">
          <HeroContent />
        </section>
      </div>
    </div>
  );
};
