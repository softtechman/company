import { useState } from "react";

export const MobileMenu = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const servicesItems = [
    { label: "WhiteLabel Cryptocurrency Software Exchange", href: "/cryptocurrency-dev", icon: "https://cdn-icons-png.flaticon.com/128/2821/2821837.png" },
    { label: "Cryptocurrency Exchange Development", href: "/cryptocurrency-exchange", icon: "https://cdn-icons-png.flaticon.com/128/825/825508.png" },
    { label: "P2P Crypto Exchange Development", href: "/p2p-exchange-dev", icon: "https://cdn-icons-png.flaticon.com/128/9850/9850813.png" },
    { label: "Cryptocurrency Payment Gateway Development", href: "/pay-gate-dev", icon: "https://cdn-icons-png.flaticon.com/128/2830/2830284.png" },
    { label: "Smart Contract Development", href: "/smart-contract", icon: "https://cdn-icons-png.flaticon.com/128/1705/1705312.png" },
    { label: "Web3 Game Development", href: "/web3-game-dev", icon: "https://cdn-icons-png.flaticon.com/128/2920/2920277.png" },
    { label: "NFT Marketplace Development", href: "/nft-market-dev", icon: "https://cdn-icons-png.flaticon.com/128/9672/9672636.png" },
    { label: "DeFi Yield Farming Development Services", href: "/defi-farming-dev", icon: "https://cdn-icons-png.flaticon.com/128/8637/8637099.png" },
    { label: "DApp Development", href: "/dapp-dev", icon: "https://cdn-icons-png.flaticon.com/128/1087/1087815.png" },
    { label: "DeFi Development", href: "/defi-development", icon: "https://cdn-icons-png.flaticon.com/128/7641/7641727.png" },
    { label: "White Label NFT Marketplace", href: "/white-label-dev", icon: "https://cdn-icons-png.flaticon.com/128/2331/2331966.png" },
    { label: "Crypto MLM", href: "/mlm-dev", icon: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png" },
    { label: "Game Development", href: "/game-development", icon: "https://cdn-icons-png.flaticon.com/128/686/686589.png" },
    { label: "Metaverse Development", href: "/metaverse-dev", icon: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
  ];

  const cloneScriptItems = [
    { label: "Binance Clone Script", href: "/binance-clone-script" },
    { label: "Coinbase Clone Script", href: "/coinbase-clone-script" },
    { label: "Pancakeswap Clone Script", href: "/pancakeswap-clone-script" },
    { label: "Opensea Clone Script", href: "/opensea-clone-script" },
    { label: "Uniswap Clone Script", href: "/uniswap-clone-script" },
  ];

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
    <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
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
