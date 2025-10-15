import { FooterAbout } from "@/sections/Footer/components/FooterAbout";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[1400px] mx-auto p-4">
      <div className="items-start box-border caret-transparent gap-x-8 flex flex-col justify-between gap-y-8 md:flex-row">
        <FooterAbout />
        <FooterLinks />
      </div>
    </div>
  );
};
