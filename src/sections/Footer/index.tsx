import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <div className="bg-white box-border caret-transparent w-full">
      <FooterContent />
      <FooterCopyright />
    </div>
  );
};
