import { DropdownButton } from "@/sections/Navbar/components/DropdownButton";
import { ServicesDropdown } from "@/sections/Navbar/components/ServicesDropdown";
import { CloneScriptDropdown } from "@/sections/Navbar/components/CloneScriptDropdown";

export const DesktopMenu = () => {
  const launchPadItems = [
    { label: "ICO Development", href: "/ico-dev" },
    { label: "STO Development", href: "/sto-dev" },
    { label: "IDO Development", href: "/ido-dev" },
  ];

  const tokenizationItems = [
    { label: "Ethereum Token Development", href: "/eth-token-dev" },
    { label: "BEP20 Token Development", href: "/bep20-token-dev" },
    { label: "Tron Token Development", href: "/tron-token-dev" },
  ];

  const companyItems = [
    { label: "Our Team", href: "/ourteam" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="text-gray-700 text-lg font-medium items-center box-border caret-transparent hidden leading-7 min-h-0 min-w-0 lg:flex md:min-h-[auto] md:min-w-[auto]">
      <div className="relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
        <DropdownButton
          label="Services"
          iconSrc="https://c.animaapp.com/mgvyjl4gKNiL9M/assets/icon-2.svg"
          dropdownContent={<ServicesDropdown />}
        />
      </div>
      <div className="relative box-border caret-transparent min-h-0 min-w-0 ml-6 md:min-h-[auto] md:min-w-[auto]">
        <DropdownButton
          label="Clone Script"
          iconSrc="https://c.animaapp.com/mgvyjl4gKNiL9M/assets/icon-2.svg"
          dropdownContent={<CloneScriptDropdown />}
        />
      </div>
      <div className="relative box-border caret-transparent min-h-0 min-w-0 ml-6 md:min-h-[auto] md:min-w-[auto]">
        <DropdownButton
          label="LaunchPad"
          iconSrc="https://c.animaapp.com/mgvyjl4gKNiL9M/assets/icon-2.svg"
          dropdownContent={
            <div className="pt-2 w-48 my-2">
              {launchPadItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-2 mx-2 py-2 rounded-sm text-sm text-gray-700 hover:bg-[#12a7e6] hover:text-white transition-colors"
                >
                  <img src="https://cdn-icons-png.flaticon.com/128/3135/3135706.png" alt="" className="ml-2 w-6 h-6 object-contain p-1 rounded-md group-hover:bg-white" />
                  <p className="max-w-24">{item.label}</p>
                </a>
              ))}
            </div>
          }
        />
      </div>
      <div className="relative box-border caret-transparent min-h-0 min-w-0 ml-6 md:min-h-[auto] md:min-w-[auto]">
        <DropdownButton
          label="Tokenization"
          iconSrc="https://c.animaapp.com/mgvyjl4gKNiL9M/assets/icon-2.svg"
          dropdownContent={
            <div className="pt-2 w-48 my-2">
              {tokenizationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-2 mx-2 py-2 rounded-sm text-sm text-gray-700 hover:bg-[#12a7e6] hover:text-white transition-colors"
                >
                  <img src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png" alt="" className="ml-2 w-6 h-6 object-contain p-1 rounded-md group-hover:bg-white" />
                  {item.label}
                </a>
              ))}
            </div>
          }
        />
      </div>
      <div className="relative box-border caret-transparent min-h-0 min-w-0 ml-6 md:min-h-[auto] md:min-w-[auto]">
        <DropdownButton
          label="Company"
          iconSrc="https://c.animaapp.com/mgvyjl4gKNiL9M/assets/icon-3.svg"
          dropdownContent={
            <div className="w-40 my-2">
              {companyItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-2 mx-2 py-2 rounded-sm text-sm text-gray-700 hover:bg-[#12a7e6] hover:text-white transition-colors"
                >
                  <img src="https://cdn-icons-png.flaticon.com/128/1087/1087815.png" alt="" className="ml-2 w-6 h-6 object-contain p-1 rounded-md group-hover:bg-white" />
                  {item.label}
                </a>
              ))}
            </div>
          }
        />
      </div>
      <a
        href="/blog"
        className="text-base box-border caret-transparent inline leading-6 min-h-0 min-w-0 ml-6 px-2 border-b-[3px] border-solid border-transparent md:block md:min-h-[auto] md:min-w-[auto] hover:border-sky-500"
      >
        Blog
      </a>
    </div>
  );
};
