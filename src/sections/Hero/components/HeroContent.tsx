import { HeroText } from "@/sections/Hero/components/HeroText";
import { HeroCarousel } from "@/sections/Hero/components/HeroCarousel";

export const HeroContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-8 flex flex-col max-w-[368px] gap-y-8 w-full z-10 mt-8 mb-4 mx-auto px-4 md:max-w-[1272px]">
      <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-between max-w-full gap-y-8 md:gap-x-0 md:flex-row md:gap-y-0">
        <HeroText />
        <HeroCarousel />
      </div>
      <div className="absolute items-center top-[85%] box-border caret-transparent hidden justify-center w-full left-[10%] md:bottom-[-68%] md:flex md:left-0">
        <img
          // alt="banner"
          src="https://i.postimg.cc/c4wqypTV/Fx-Capital-removebg-preview.png"
          className="text-transparent aspect-[auto_1000_/_1000] box-border h-3/5 max-w-full min-h-0 min-w-0 object-cover pointer-events-none w-3/5 md:h-full md:min-h-[auto] md:min-w-[auto] md:w-full"
        />
      </div>
    </div>
  );
};
