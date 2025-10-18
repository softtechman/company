import { ContactInfo } from "@/sections/Footer/components/ContactInfo";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const FooterAbout = () => {
  return (
    <div className="items-stretch box-border caret-transparent gap-x-5 flex flex-col justify-between gap-y-5 text-center w-full md:w-[30%]">
      <div className="items-center box-border caret-transparent flex">
      <img
        // alt="FxCapital Logo"
        src="https://i.postimg.cc/T2sDpfGH/fxcapital-2.png"
        className="text-transparent aspect-[auto_190_/_60] box-border h-10 max-w-full pointer-events-none w-16 h-14"
      />
      <h2 className="text-xl text-bold">
        FxCapital
      </h2>
      </div>
      <div className="box-border caret-transparent">
        <h3 className="text-gray-800 text-xl font-semibold box-border caret-transparent leading-7 text-left">
          About Us
        </h3>
        <p className="text-gray-600 text-sm box-border caret-transparent leading-[22.75px] text-left mt-4">
          FxCapital is an exclusive blockchain and cryptocurrency development
          company that offers instant and complete crypto solutions to kickstart
          your business.
        </p>
      </div>
      <ContactInfo />
      <SocialLinks />
    </div>
  );
};
