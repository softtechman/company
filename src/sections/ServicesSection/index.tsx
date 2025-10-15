import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

const services = [
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/28.png",
    title: "Cryptocurrency Exchange Development",
    description: "Build secure, scalable, and feature-rich crypto exchanges with advanced trading engines.",
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/29.png",
    title: "DeFi Development",
    description: "Create decentralized finance platforms with smart contracts, yield farming, and staking.",
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/30.png",
    title: "NFT Marketplace Development",
    description: "Launch your own NFT marketplace with minting, trading, and auction features.",
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/31.png",
    title: "Metaverse Development",
    description: "Build immersive metaverse experiences with virtual worlds and digital assets.",
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/32.png",
    title: "Web3 Development",
    description: "Develop decentralized applications with blockchain integration and smart contracts.",
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/33.png",
    title: "AI & ML Solutions",
    description: "Integrate artificial intelligence and machine learning into your blockchain projects.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="bg-gray-50 box-border caret-transparent py-16">
      <div className="box-border caret-transparent max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[54px] mb-4">
            Our <span className="text-sky-500">Services</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive blockchain development services to help you build the future of decentralized technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
