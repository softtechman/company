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
  // {
  //   title: "",
  //   description: "",
  //   icon: <Lock className="w-0 h-0 text-primary" />,
  // },
  // {
  //   title: "",
  //   description: "",
  //   icon: <Lock className="w0 h-0 text-primary" />,
  // },
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
    <section className="relative py-20 px-4 overflow-hidden bg-[url('https://i.postimg.cc/KY1RVbC7/impact-section.webp')] bg-cover bg-center">
      {/* Decorative Plus Signs */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="rounded-full flex items-center justify-center mt-[-4%] mb-2">
              <img className="w-20 h-20" src="https://i.postimg.cc/yNSwtSNT/bitcoin.png" />
            </div>
          </div>
          <div className="box-border caret-transparent mb-2">
            <h2 className="text-gray-900 text-[28px] font-bold box-border caret-transparent leading-[42px] mb-4 md:text-4xl md:leading-[54px]">
              <span className="text-[28px] box-border caret-transparent leading-[42px] md:text-4xl md:leading-[54px]">
              Where {" "}
              </span>
              <span className="text-sky-500 text-[28px] box-border caret-transparent leading-[42px] md:text-4xl md:leading-[54px]">
              We Make an Impact
              </span>
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Top Row - 2 Cards with spacing to show center image */}
          <div className="flex justify-between mx-auto">
            {topServices.map((service, index) => (
              // <Card
              //   key={index}
              //   className={`group cursor-pointer hover:text-blue-500 relative p-8 bg-white rounded-2xl border-0 shadow-[0_16px_32px_rgba(0,0,0,0.10),_0_2px_8px_rgba(0,0,0,0.06)]
              //   transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform-gpu
              //   hover:-translate-y-1  hover:scale-[1.03] hover:shadow-[0_28px_56px_rgba(0,0,0,0.20),_0_6px_18px_rgba(0,0,0,0.12)]
              //   ${service.title === "" ? "invisible" : "animate-[fadeInUp_3s_ease-out_forwards]"}`}
              // >

              //   {/* Icon positioned half outside */}
              //   <div className="absolute -top-[15%] w-24 h-24  left-1/2 -translate-x-1/2 rounded-full flex items-center justify-center">
              //     <div className="rounded-full  flex items-center justify-center">
              //       {service.icon}
              //     </div>
              //   </div>

              //   <div className="flex flex-col items-center text-center space-y-3 mt-8">
              //     <h3 className="text-lg md:text-xl font-semibold text-gray-900 tracking-tight group-hover:text-blue-500">
              //       {service.title}
              //     </h3>
              //     <p className="text-sm md:text-base hover:text-black text-gray-600 leading-relaxed">
              //       {service.description}
              //     </p>
              //   </div>
              // </Card>
                <div key={index} className="w-[25%] relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-gray-100 p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer">
                  <div className="flex justify-center mt-[-28%] mb-4">
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
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0AA5D8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

            ))}
          </div>

          {/* Middle Row - 2 Cards with Central Background Image */}
          <div className="relative mb-8">
            {/* Background Blockchain Cube - Large and centered, static */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[60%] w-128 h-128 scale-[1.1] pointer-events-none z-0">
              <img
                src={blockchainCube}
                alt="Blockchain Technology"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex justify-between mt-16">
              {middleServices.map((service, index) => (
                <div key={index} className="w-[25%] relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-gray-100 p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer">
                <div className="flex justify-center mt-[-28%] mb-4">
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
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0AA5D8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - 4 Cards in Same Line */}
          <div className="flex justify-between gap-6 mt-16">
            {bottomServices.map((service, index) => (
                <div key={index} className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-gray-100 p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer">
                <div className="flex justify-center mt-[-28%] mb-4">
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
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0AA5D8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

