import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { MobileMenuButton } from "@/sections/Navbar/components/MobileMenuButton";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { EnquireButton } from "@/sections/Navbar/components/EnquireButton";

export const Navbar = () => {
  return (
    <nav className="fixed backdrop-blur-sm bg-white/80 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent w-full z-50 top-0">
      <div className="items-center box-border caret-transparent flex justify-between max-w-[1400px] mx-auto p-4">
        <div className="items-center box-border caret-transparent flex">
          <NavbarLogo />
        </div>
        <MobileMenuButton />
        <DesktopMenu />
        <EnquireButton />
      </div>
    </nav>
  );
};
