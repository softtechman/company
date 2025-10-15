import { ContactInfo } from "@/sections/Footer/components/ContactInfo";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const FooterAbout = () => {
  return (
    <div className="items-stretch box-border caret-transparent gap-x-5 flex flex-col justify-between gap-y-5 text-center w-full md:w-[30%]">
      <div className="items-center box-border caret-transparent flex">
        <img
          alt="CryptoApe Logo"
          src="https://c.animaapp.com/mgqxinb9LGHf0V/assets/17.jpg"
          className="text-transparent aspect-[auto_180_/_50] box-border max-w-full pointer-events-none w-[180px]"
        />
      </div>
      <div className="box-border caret-transparent">
        <h3 className="text-gray-800 text-xl font-semibold box-border caret-transparent leading-7 text-left">
          About Us
        </h3>
        <p className="text-gray-600 text-sm box-border caret-transparent leading-[22.75px] text-left mt-4">
          CryptoApe is an exclusive blockchain and cryptocurrency development
          company that offers instant and complete crypto solutions to kickstart
          your business.
        </p>
      </div>
      <ContactInfo />
      <SocialLinks />
    </div>
  );
};
