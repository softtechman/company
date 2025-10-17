import { useState, useEffect } from 'react';
import InnovationCard from './InnovationCard';

const innovations = [
  {
    title: "AI-Enhanced Crypto Exchange",
    description: "Personalized trading suggestions, chatbots for support, and KYC automation."
  },
  {
    title: "Autonomous DAO Management",
    description: "Use AI to make smarter governance decisions and automate DAO proposals."
  },
  {
    title: "AI-Powered Smart Contracts",
    description: "Self-optimizing contracts that adapt and detect fraud in real-time."
  },
  {
    title: "AI-Based Security Protocols",
    description: "Anomaly detection, fraud alerts, and identity verification with machine learning."
  },
  {
    title: "Predictive Analytics for DeFi",
    description: "AI models that forecast trading behavior, token trends, and liquidity risks."
  }
];

const InnovationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % innovations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getPositionFor = (idx: number) => {
    const prevIndex = (currentIndex - 1 + innovations.length) % innovations.length;
    const nextIndex = (currentIndex + 1) % innovations.length;
    if (idx === currentIndex) return 'center';
    if (idx === prevIndex) return 'left';
    if (idx === nextIndex) return 'right';
    return 'hidden';
  };

  // removed: previous grid-based class mapping in favor of absolute-positioned carousel

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-20">
      <div className="relative h-[280px] md:h-[300px] overflow-hidden">
        {innovations.map((item, idx) => {
          const position = getPositionFor(idx) as 'left' | 'center' | 'right' | 'hidden';
          const base = 'absolute top-1/2 left-1/2 -translate-y-1/2 transform-gpu transition-transform transition-opacity transition-shadow duration-700 ease-[cubic-bezier(.22,1,.36,1)]';
          // Offsets include card width plus gap (sm: 320+16=336px, md: 384+24=408px)
          const posClass = position === 'left'
            ? '-translate-x-[calc(50%+336px)] md:-translate-x-[calc(50%+408px)] opacity-80 scale-95 z-0 pointer-events-none'
            : position === 'right'
            ? '-translate-x-[calc(50%-336px)] md:-translate-x-[calc(50%-408px)] opacity-80 scale-95 z-0 pointer-events-none'
            : position === 'center'
            ? '-translate-x-1/2 opacity-100 scale-100 z-10'
            : 'opacity-0 pointer-events-none';
          return (
            <div key={idx} className={`${base} ${posClass}`}>
              <div className="w-80 md:w-96">
                <InnovationCard
                  title={item.title}
                  description={item.description}
                  highlighted={position === 'center'}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InnovationCarousel;