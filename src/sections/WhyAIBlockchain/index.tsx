import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
//images
import automateImg from "@/assets/whyaiblockchain/automate.png";
import improveImg from "@/assets/whyaiblockchain/improve.png";
import lowcostsImg from "@/assets/whyaiblockchain/lowcosts.png";
import personalizeImg from "@/assets/whyaiblockchain/personalize.png";
import predictImg from "@/assets/whyaiblockchain/predict.png";
import aiblockchain from "@/assets/whyaiblockchain/aiblockchain.png";


const WhyAIBlockchain = () => {
  const { elementRef, getScrollTransform } = useScrollAnimation();
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 1000;
  const hideBackground = windowWidth < 650;

  const benefits = [
    { title: "Low Operational Costs", image: lowcostsImg, position: "left" },
    { title: "Personalize user experience", image: personalizeImg, position: "left" },
    { title: "Automate decision-making", image: automateImg, position: "right" },
    { title: "Improve security & compliance", image: improveImg, position: "right" },
  ];

  return (
    <section className="relative overflow-hidden py-16 xl:w-full lg:w-[90%] mx-auto w-[80%]  ">
      {/* Background image */}
      {!hideBackground && (
        <div
          className="
            absolute inset-0 pointer-events-none
            opacity-100 transition-opacity duration-500
            bg-[url('https://i.postimg.cc/13b5jJBH/ai-blockchain-section.webp')]
            bg-no-repeat bg-bottom xl:bg-[length:1300px_auto] lg:bg-[length:1000px_auto]  bg-[length:800px_auto]  translate-y-[-32%] xl:translate-y-0 lg:translate-y-[-10%]
          "
        />

      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center">
             <img src="https://i.postimg.cc/pLdqx0db/whyai.png" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why use <span className="text-[#06ABE0]">AI</span> in Blockchain
            Development
          </h2>
        </div>

        {/* === Layout === */}
        {!isMobile ? (
          /* --- Desktop Layout (≥1000px) --- */
          <div className="lg:grid grid-cols-12 gap-8 items-center">
            {/* Left column */}
            <div
              className="col-span-3 space-y-12"
              style={getScrollTransform("left")}
            >
              {benefits
                .filter((b) => b.position === "left")
                .map((benefit, i) => (
                  <BenefitCard key={`left-${i}`} benefit={benefit} />
                ))}
            </div>

            {/* Center image */}
            <div className="col-span-6 flex flex-col items-center justify-center">
              <img
                src={predictImg}
                alt="Predict risk before they happen"
                className="w-32 h-32 lg:h-40 lg:w-40 xl:w-60 xl:h-60 object-cover rounded-2xl transform transition-transform hover:-translate-y-3 hover:scale-110 duration-500"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center max-w-60">
                Predict risk before they happen
              </h3>
            </div>

            {/* Right column */}
            <div
              className="col-span-3 space-y-12"
              style={getScrollTransform("right")}
            >
              {benefits
                .filter((b) => b.position === "right")
                .map((benefit, i) => (
                  <BenefitCard key={`right-${i}`} benefit={benefit} />
                ))}
            </div>
          </div>
        ) : (
          /* --- Mobile / Tablet Layout (<1000px) --- */
          <div className="flex flex-col items-center space-y-10">
            {/* Left benefits */}
            <div className="lg:grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits
                .filter((b) => b.position === "left")
                .map((benefit, i) => (
                  <BenefitCard key={`mobile-left-${i}`} benefit={benefit} />
                ))}
            </div>

            {/* Center image (centered in row 3) */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={predictImg}
                alt="Predict risk before they happen"
                className="w-24 h-24 md:h-32 md:w-32 lg:w-32 lg:h-32 object-cover rounded-2xl transform transition-transform hover:-translate-y-3 hover:scale-110 duration-500"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center max-w-60">
                Predict risk before they happen
              </h3>
            </div>

            {/* Right benefits */}
            <div className="lg:grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto">
              {benefits
                .filter((b) => b.position === "right")
                .map((benefit, i) => (
                  <BenefitCard key={`mobile-right-${i}`} benefit={benefit} />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const BenefitCard = ({ benefit }: { benefit: any }) => {
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;
    const rotationValue = ((mouseX - centerX) / (rect.width / 2)) * 360;
    setRotation(rotationValue);
  };

  return (
    <div
      className="lg:flex lg:flex-col items-center text-center group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation(0)}
    >
      <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-all duration-300">
        <img
          src={benefit.image}
          alt={benefit.title}
          className="w-20 h-20 object-cover rounded-full transition-transform duration-200"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#06ABE0] transition-colors duration-300 max-w-[150px] leading-tight">
        {benefit.title}
      </h3>
    </div>
  );
};

export default WhyAIBlockchain;
