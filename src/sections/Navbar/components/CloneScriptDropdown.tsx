import { useState } from "react";

export const CloneScriptDropdown = () => {
  const [activeCategory, setActiveCategory] = useState("exchange");

  const categories = [
    { id: "exchange", label: "Exchange Scripts" },
    { id: "defi", label: "DeFi Scripts" },
    { id: "nft", label: "NFT Scripts" },
    { id: "wallet", label: "Wallet Scripts" },
    { id: "trading", label: "Trading Scripts" },
  ];

  const scripts = {
    exchange: [
      { label: "Binance Clone Script", href: "/binance-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/825/825508.png" },
      { label: "Coinbase Clone Script", href: "/coinbase-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/825/825508.png" },
      { label: "Kraken Clone Script", href: "/kraken-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/825/825508.png" },
      { label: "Bybit Clone Script", href: "/bybit-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/825/825508.png" },
      { label: "OKX Clone Script", href: "/okx-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/825/825508.png" },
    ],
    defi: [
      { label: "Pancakeswap Clone Script", href: "/pancakeswap-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/2830/2830284.png" },
      { label: "Uniswap Clone Script", href: "/uniswap-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/2830/2830284.png" },
      { label: "SushiSwap Clone Script", href: "/sushiswap-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/2830/2830284.png" },
      { label: "Aave Clone Script", href: "/aave-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/2830/2830284.png" },
      { label: "Compound Clone Script", href: "/compound-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/2830/2830284.png" },
    ],
    nft: [
      { label: "OpenSea Clone Script", href: "/opensea-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/9850/9850813.png" },
      { label: "Rarible Clone Script", href: "/rarible-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/9850/9850813.png" },
      { label: "Blur Clone Script", href: "/blur-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/9850/9850813.png" },
      { label: "Magic Eden Clone Script", href: "/magic-eden-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/9850/9850813.png" },
      { label: "Foundation Clone Script", href: "/foundation-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/9850/9850813.png" },
    ],
    wallet: [
      { label: "MetaMask Clone Script", href: "/metamask-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/2331/2331966.png" },
      { label: "Trust Wallet Clone Script", href: "/trust-wallet-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/2331/2331966.png" },
      { label: "Coinbase Wallet Clone Script", href: "/coinbase-wallet-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/2331/2331966.png" },
      { label: "Ledger Clone Script", href: "/ledger-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/2331/2331966.png" },
      { label: "Exodus Clone Script", href: "/exodus-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/2331/2331966.png" },
    ],
    trading: [
      { label: "TradingView Clone Script", href: "/tradingview-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png" },
      { label: "3Commas Clone Script", href: "/3commas-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png" },
      { label: "Cryptohopper Clone Script", href: "/cryptohopper-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png" },
      { label: "Pionex Clone Script", href: "/pionex-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png" },
      { label: "Bitsgap Clone Script", href: "/bitsgap-clone-script", icon: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png" },
    ],
  };

  return (
    <div className="flex w-[750px]">
      <div className="w-48 py-4 px-4 bg-gray-50">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase px-3">Categories</h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onMouseEnter={() => setActiveCategory(category.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                activeCategory === category.id
                  ? "bg-sky-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative flex items-center justify-center w-px">
        <div className="absolute h-[80%] w-px bg-gray-200"></div>
      </div>
      <div className="flex-1 py-4 px-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase">
          {categories.find((c) => c.id === activeCategory)?.label}
        </h3>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="space-y-1">
            {scripts[activeCategory as keyof typeof scripts]
              .slice(0, 3)
              .map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-500 rounded transition-colors"
                >
                  <span className="text-sky-500">▸</span>
                  {item.label}
                </a>
              ))}
          </div>
          <div className="relative">
            <div className="absolute left-0 h-[80%] w-px bg-gray-200 top-1/2 -translate-y-1/2"></div>
            <div className="space-y-1 pl-4">
              {scripts[activeCategory as keyof typeof scripts]
                .slice(3)
                .map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-500 rounded transition-colors"
                  >
                    <span className="text-sky-500">▸</span>
                    {item.label}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
