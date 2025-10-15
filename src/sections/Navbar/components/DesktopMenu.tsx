import { NavbarDropdown } from "@/sections/Navbar/components/NavbarDropdown";
import { NavbarLink } from "@/sections/Navbar/components/NavbarLink";

export const DesktopMenu = () => {
  return (
    <div className="text-gray-700 text-lg font-medium items-center box-border caret-transparent hidden leading-7 min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]">
      <NavbarDropdown
        label="Services"
        iconSrc="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-2.svg"
      />
      <NavbarDropdown
        label="Clone Script"
        iconSrc="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-2.svg"
        variant="ml-6"
      />
      <NavbarDropdown
        label="LaunchPad"
        iconSrc="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-2.svg"
        variant="ml-6"
      />
      <NavbarDropdown
        label="Tokenization"
        iconSrc="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-2.svg"
        variant="ml-6"
      />
      <NavbarDropdown
        label="Company"
        iconSrc="https://c.animaapp.com/mgqxinb9LGHf0V/assets/icon-3.svg"
        variant="ml-6"
      />
      <NavbarLink />
    </div>
  );
};
