import { useState } from "react";

export const MobileMenu = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const servicesItems = [
    { label: "Blockchain Development", href: "/blockchain-development" },
    { label: "Cryptocurrency Exchange", href: "/cryptocurrency-exchange" },
    { label: "NFT Development", href: "/nft-development" },
    { label: "DeFi Development", href: "/defi-development" },
    { label: "Smart Contract Development", href: "/smart-contract" },
    { label: "Web3 Development", href: "/web3-development" },
    { label: "Metaverse Development", href: "/metaverse-development" },
    { label: "AI Development", href: "/ai-development" },
  ];

  const cloneScriptItems = [
    { label: "Binance Clone Script", href: "/binance-clone-script" },
    { label: "Coinbase Clone Script", href: "/coinbase-clone-script" },
    { label: "Pancakeswap Clone Script", href: "/pancakeswap-clone-script" },
    { label: "Opensea Clone Script", href: "/opensea-clone-script" },
    { label: "Uniswap Clone Script", href: "/uniswap-clone-script" },
  ];

  const launchPadItems = [
    { label: "ICO Development", href: "/ico-development" },
    { label: "IDO Development", href: "/ido-development" },
    { label: "IEO Development", href: "/ieo-development" },
    { label: "STO Development", href: "/sto-development" },
  ];

  const tokenizationItems = [
    { label: "Token Development", href: "/token-development" },
    { label: "Asset Tokenization", href: "/asset-tokenization" },
    { label: "Real Estate Tokenization", href: "/real-estate-tokenization" },
    { label: "Security Token", href: "/security-token" },
  ];

  const companyItems = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="px-4 py-2 space-y-1">
        <div>
          <button
            onClick={() => toggleDropdown("services")}
            className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            <span>Services</span>
            <svg
              className={`w-5 h-5 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openDropdown === "services" && (
            <div className="pl-4 mt-1 space-y-1">
              {servicesItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-sky-50 hover:text-sky-500 rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleDropdown("cloneScript")}
            className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            <span>Clone Script</span>
            <svg
              className={`w-5 h-5 transition-transform ${openDropdown === "cloneScript" ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openDropdown === "cloneScript" && (
            <div className="pl-4 mt-1 space-y-1">
              {cloneScriptItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-sky-50 hover:text-sky-500 rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleDropdown("launchpad")}
            className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            <span>LaunchPad</span>
            <svg
              className={`w-5 h-5 transition-transform ${openDropdown === "launchpad" ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openDropdown === "launchpad" && (
            <div className="pl-4 mt-1 space-y-1">
              {launchPadItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-sky-50 hover:text-sky-500 rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleDropdown("tokenization")}
            className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            <span>Tokenization</span>
            <svg
              className={`w-5 h-5 transition-transform ${openDropdown === "tokenization" ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openDropdown === "tokenization" && (
            <div className="pl-4 mt-1 space-y-1">
              {tokenizationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-sky-50 hover:text-sky-500 rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleDropdown("company")}
            className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            <span>Company</span>
            <svg
              className={`w-5 h-5 transition-transform ${openDropdown === "company" ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openDropdown === "company" && (
            <div className="pl-4 mt-1 space-y-1">
              {companyItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-sky-50 hover:text-sky-500 rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <a
          href="/blog"
          className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
        >
          Blog
        </a>
      </div>
    </div>
  );
};
