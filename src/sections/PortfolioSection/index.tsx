import { useState } from "react";
import { PortfolioItem } from "@/sections/PortfolioSection/PortfolioItem";
import treasureIcon from "@/assets/treasure-icon.png";
import laptopCrypto from "@/assets/portfolio/laptop-crypto .png";
import laptopDefi from "@/assets/portfolio/laptop-defi.png";
import laptopNft from "@/assets/portfolio/laptop-nft.png";
import laptopOtc from "@/assets/portfolio/laptop-otc.png";
import laptopMlm from "@/assets/portfolio/laptop-mlm.png";
import laptopTokens from "@/assets/portfolio/laptop-tokens.png";

const portfolioItems = [
  { id: "crypto", title: "Cryptocurrency Exchange", image: laptopCrypto },
  { id: "defi", title: "Decentralized Finance (DeFi)", image: laptopDefi },
  { id: "nft", title: "NFT Marketplace", image: laptopNft },
  { id: "otc", title: "OTC Trading", image: laptopOtc },
  { id: "mlm", title: "MLM Platform", image: laptopMlm },
  { id: "tokens", title: "Tokens", image: laptopTokens },
];

export const PortfolioSection = () => {
  const [activeItem, setActiveItem] = useState("crypto");

  const currentImage = portfolioItems.find((item) => item.id === activeItem)?.image;

  return (
    <section className="bg-background mb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <img
            src='https://i.postimg.cc/66GT8gSF/portfolio.png'
            alt="Portfolio Icon"
            className="w-20 h-20 mx-auto mb-6 animate-pulse"
          />
          <h1 className="text-2xl md:text-4xl font-bold">
            Our <span className="text-[hsl(var(--accent))]">Portfolio</span>, Your Proof of Trust
          </h1>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Portfolio List */}
          <div className="space-y-2">
            {portfolioItems.map((item) => (
              <PortfolioItem
                key={item.id}
                title={item.title}
                isActive={activeItem === item.id}
                onClick={() => setActiveItem(item.id)}
              />
            ))}
          </div>

          {/* Laptop Mockup */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={currentImage}
                alt={portfolioItems.find((item) => item.id === activeItem)?.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
