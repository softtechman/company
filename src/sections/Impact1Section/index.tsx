import { ImpactCard } from "@/sections/Impact1Section/components/ImpactCard";

export const Impact1Section = () => {
  return (
    <section className="relative bg-white box-border caret-transparent overflow-hidden py-16 md:py-24">
      <div className="absolute items-center box-border caret-transparent hidden justify-center inset-0 md:flex">
        <img
          src="https://c.animaapp.com/mgthshavCoBeyc/assets/icon-4.svg"
          alt="Background Icon"
          className="absolute box-border caret-transparent h-full w-full inset-0"
        />
      </div>
      <div className="relative box-border caret-transparent max-w-[368px] w-full z-10 mx-auto px-4 md:max-w-[1272px]">
        <div className="items-center box-border caret-transparent flex flex-col text-center mb-12 md:mb-16">
          <div className="box-border caret-transparent mb-8 -0 animate-fade-in-rotate" style={{ animationDelay: '0.1s' }}>
            <img
              alt="Blockchain Icon"
              src="https://c.animaapp.com/mgthshavCoBeyc/assets/41.png"
              className="text-transparent aspect-[auto_72_/_72] box-border max-w-full object-contain pointer-events-none w-[72px]"
            />
          </div>
          <h2 className="text-gray-900 text-[28px] font-bold box-border caret-transparent leading-[42px] mb-4 animate-fade-in-up md:text-4xl md:leading-[54px]" style={{ animationDelay: '0.2s' }}>
            Where We Make an{" "}
            <span className="text-sky-500">Impact</span>
          </h2>
          <p className="text-gray-600 box-border caret-transparent leading-[26px] max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            From startups to enterprises, we empower businesses across industries with blockchain solutions that drive real results.
          </p>
        </div>

        <div className="items-start box-border caret-transparent flex flex-wrap gap-8 justify-center md:gap-12">
          <ImpactCard
            iconSrc="https://c.animaapp.com/mgthshavCoBeyc/assets/28.png"
            iconAlt="Finance Icon"
            title="Finance & Banking"
            description="Secure payment gateways, digital wallets, and DeFi platforms that transform traditional finance."
            delay="0.4s"
          />
          <ImpactCard
            iconSrc="https://c.animaapp.com/mgthshavCoBeyc/assets/29.png"
            iconAlt="Gaming Icon"
            title="Gaming & Entertainment"
            description="NFT marketplaces, play-to-earn games, and metaverse experiences that engage users."
            delay="0.5s"
          />
          <ImpactCard
            iconSrc="https://c.animaapp.com/mgthshavCoBeyc/assets/30.png"
            iconAlt="Real Estate Icon"
            title="Real Estate"
            description="Tokenized property platforms and smart contract solutions for transparent transactions."
            delay="0.6s"
          />
          <ImpactCard
            iconSrc="https://c.animaapp.com/mgthshavCoBeyc/assets/31.png"
            iconAlt="Healthcare Icon"
            title="Healthcare"
            description="Secure patient data management and blockchain-based medical record systems."
            delay="0.7s"
          />
          <ImpactCard
            iconSrc="https://c.animaapp.com/mgthshavCoBeyc/assets/32.png"
            iconAlt="Supply Chain Icon"
            title="Supply Chain"
            description="Transparent tracking systems and automated logistics with blockchain technology."
            delay="0.8s"
          />
          <ImpactCard
            iconSrc="https://c.animaapp.com/mgthshavCoBeyc/assets/33.png"
            iconAlt="E-commerce Icon"
            title="E-commerce"
            description="Crypto payment integration and decentralized marketplace solutions."
            delay="0.9s"
          />
        </div>
      </div>
    </section>
  );
};
