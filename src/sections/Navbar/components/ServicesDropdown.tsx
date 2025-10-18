export const ServicesDropdown = () => {
    const leftColumn = [
      { label: "WhiteLabel Cryptocurrency Software Exchange", href: "/cryptocurrency-dev", icon: "https://cdn-icons-png.flaticon.com/128/2821/2821837.png" },
      { label: "Cryptocurrency Exchange Development", href: "/cryptocurrency-exchange", icon: "https://cdn-icons-png.flaticon.com/128/825/825508.png" },
      { label: "P2P Crypto Exchange Development", href: "/p2p-exchange-dev", icon: "https://cdn-icons-png.flaticon.com/128/9850/9850813.png" },
      { label: "Cryptocurrency Payment Gateway Development", href: "/pay-gate-dev", icon: "https://cdn-icons-png.flaticon.com/128/2830/2830284.png" },
      { label: "Smart Contract Development", href: "/smart-contract", icon: "https://cdn-icons-png.flaticon.com/128/1705/1705312.png" },
      { label: "Web3 Game Development", href: "/web3-game-dev", icon: "https://cdn-icons-png.flaticon.com/128/2920/2920277.png" },
      { label: "NFT Marketplace Development", href: "/nft-market-dev", icon: "https://cdn-icons-png.flaticon.com/128/9672/9672636.png" },
    ];
  
    const rightColumn = [
      { label: "DeFi Yield Farming Development Services", href: "/defi-farming-dev", icon: "https://cdn-icons-png.flaticon.com/128/8637/8637099.png" },
      { label: "DApp Development", href: "/dapp-dev", icon: "https://cdn-icons-png.flaticon.com/128/1087/1087815.png" },
      { label: "DeFi Development", href: "/defi-development", icon: "https://cdn-icons-png.flaticon.com/128/7641/7641727.png" },
      { label: "White Label NFT Marketplace", href: "/white-label-dev", icon: "https://cdn-icons-png.flaticon.com/128/2331/2331966.png" },
      { label: "Crypto MLM", href: "/mlm-dev", icon: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png" },
      { label: "Game Development", href: "/game-development", icon: "https://cdn-icons-png.flaticon.com/128/686/686589.png" },
      { label: "Metaverse Development", href: "/metaverse-dev", icon: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
    ];
  
    return (
      <div className="flex w-[600px]">
        <div className="flex-1 py-4 px-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase">Core Services</h3>
          <div className="space-y-1">
            {leftColumn.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center gap-2 mx-2 py-2 rounded-sm text-sm text-gray-700 hover:bg-[#12a7e6] hover:text-white transition-colors"
              >
                <img src={item.icon} alt="" className="ml-2 w-6 h-6 object-contain p-1 rounded-md group-hover:bg-white" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center w-px">
          <div className="absolute h-[80%] w-px bg-gray-200"></div>
        </div>
        <div className="flex-1 py-4 px-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase">Advanced Solutions</h3>
          <div className="space-y-1">
            {rightColumn.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center gap-2 mx-2 py-2 rounded-sm text-sm text-gray-700 hover:bg-[#12a7e6] hover:text-white transition-colors"
              >
                <img src={item.icon} alt="" className="ml-2 w-6 h-6 object-contain p-1 rounded-md group-hover:bg-white" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  