import { Card } from "@/components/ui/card";
import blockchainCube from "@/assets/blockchain-cube.png";
import { Lock, Globe, MessageSquare, Building2, Coins, Wallet, Blocks, Sparkles } from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const topServices: ServiceCard[] = [
  {
    title: "Private Blockchain Development",
    description: "Private blockchain development builds secure, permissioned networks where only authorized participants can access data and manage data efficiently.",
    icon: <img src="https://i.postimg.cc/vm8qygXN/private.png" className="text-primary" />,
  },
  {
    title: "Public Blockchain Development",
    description: "Public blockchain development creates open, decentralized networks where anyone can participate with full transparency and security.",
    icon: <img src="https://i.postimg.cc/cJ19WgTj/public.png" className="text-primary" />,
  },
];

const middleServices: ServiceCard[] = [
  {
    title: "Blockchain Consulting",
    description: "Blockchain consulting guides businesses in the strategy, design, and implementation of secure blockchain solutions to drive growth and innovation.",
    icon: <img src="https://i.postimg.cc/rpynT0g9/consulting.png" className="text-primary" />,
  },
  {
    title: "Enterprise Blockchain Development",
    description: "Enterprise blockchain development builds secure, scalable, and permissioned blockchain solutions tailored to streamline business operations and drive efficiency.",
    icon: <img src="https://i.postimg.cc/KYcqbkQ9/enterprise.png" className="text-primary" />,
  },
];

const bottomServices: ServiceCard[] = [
  {
    title: "DeFi & Web3 Applications",
    description: "DeFi & Web3 application development empowers businesses with decentralized, transparent, and user-driven solutions for the future of digital finance and the web.",
    icon: <img src="https://i.postimg.cc/1zRCSnMM/defi.png" className="text-primary" />,
  },
  {
    title: "NFT & Token Development",
    description: "NFT & Token Development services help create unique digital assets and crypto tokens with secure, scalable, and customizable blockchain solutions.",
    icon: <img src="https://i.postimg.cc/W4pWVFSY/nft.png" className="text-primary" />,
  },
  {
    title: "Customized Blockchain Development",
    description: "Customized blockchain development delivers tailored, secure, and scalable solutions built to match your unique business needs, goals, and industry demands.",
    icon: <img src="https://i.postimg.cc/tgRSbZD5/customize.png" className="text-primary" />,
  },
  {
    title: "AI-Powered Blockchain Development",
    description: "AI-powered blockchain development combines artificial intelligence with blockchain to deliver smarter, secure, automated, and future-ready business solutions.",
    icon: <img src="https://i.postimg.cc/25jcYbTZ/ai.png" className="text-primary" />,
  },
];

export const Impact = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-[url('https://i.postimg.cc/KY1RVbC7/impact-section.webp')] bg-cover bg-center lg:w-[90%] w-[70%] md:[75%] mx-auto">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="rounded-full flex items-center justify-center mt-[-4%] mb-2">
              <img className="w-20 h-20" src="https://i.postimg.cc/yNSwtSNT/bitcoin.png" />
            </div>
          </div>
          <h2 className="text-gray-900 text-2xl font-bold mb-4 xl:text-4xl">
            <span>Where </span>
            <span className="text-sky-500">We Make an Impact</span>
          </h2>
        </div>

        <div className="relative">
          {/* Top Row */}
            <div className="w-96 h-96 mx-auto  lg:scale-[1.5] lg:w-96 lg:h-96 lg:top-16 mb-8 lg:mb-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <img src={blockchainCube} alt="Blockchain Technology" className="w-full h-full object-contain" />
            </div>
          <div className="flex flex-wrap lg:justify-between justify-center gap-6 mb-16 w-full">
            {topServices.map((service, index) => (
                <div
                  key={index}
                  className="min-w-[290px] max-w-[290px] lg:min-w-[100px] lg:w-[23%] relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-gray-100 p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer flex-shrink-0"
                >
                <div className="flex justify-center -mt-16 mb-4">
                  <div className="w-24 h-24 transition-transform duration-500 group-hover:rotate-[6deg]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#0AA5D8] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-between relative mb-16">
            {/* Central Image */}

            {/* Middle Services */}
            <div className="flex flex-wrap lg:justify-between justify-center gap-6 w-full">
              {middleServices.map((service, index) => (
                <div key={index} className="min-w-[290px] max-w-[290px] lg:min-w-[100px] lg:w-[23%]  relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-gray-100 p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer">
                  <div className="flex justify-center -mt-16 mb-4">
                    <div className="w-24 h-24 transition-transform duration-500 group-hover:rotate-[6deg]">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#0AA5D8] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Middle Row */}

          {/* Bottom Row */}
          <div className="flex flex-wrap lg:justify-between justify-center gap-6">
            {bottomServices.map((service, index) => (
              <div key={index} className="min-w-[290px] max-w-[290px] lg:min-w-[100px] lg:w-[23%]  relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-gray-100 p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer">
                <div className="flex justify-center -mt-16 mb-4">
                  <div className="w-24 h-24 transition-transform duration-500 group-hover:rotate-[6deg]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#0AA5D8] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
