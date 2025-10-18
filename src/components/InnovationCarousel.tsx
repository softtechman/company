import { useEffect, useRef, useState } from "react";
import InnovationCard from "./InnovationCard";

const innovations = [
  { title: "AI-Enhanced Crypto Exchange", description: "Personalized trading suggestions, chatbots for support, and KYC automation." },
  { title: "Autonomous DAO Management", description: "Use AI to make smarter governance decisions and automate DAO proposals." },
  { title: "AI-Powered Smart Contracts", description: "Self-optimizing contracts that adapt and detect fraud in real-time." },
  { title: "AI-Based Security Protocols", description: "Anomaly detection, fraud alerts, and identity verification with machine learning." },
  { title: "Predictive Analytics for DeFi", description: "AI models that forecast trading behavior, token trends, and liquidity risks." }
];

const CARD_WIDTH = 384;
const GAP = 24;
const INTERVAL = 2000; // pause between slides
const TRANSITION_DURATION = 1000; // slide duration in ms

const InnovationCarousel = () => {
  const [index, setIndex] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
  const highlightedIndex = visibleCards === 1 ? 0 : 1; // always center for 2 or 3 cards

  // Duplicate enough cards for seamless infinite loop
  const displayCards = [...innovations, ...innovations];

  useEffect(() => {
    const interval = setInterval(() => {
      // Move one card width
      const newOffset = trackOffset - (CARD_WIDTH + GAP);
      setTrackOffset(newOffset);
      setIndex((prev) => (prev + 1) % innovations.length);

      // Seamless reset if offset passed one set of innovations
      const totalWidth = innovations.length * (CARD_WIDTH + GAP);
      if (Math.abs(newOffset) >= totalWidth) {
        // Reset offset instantly
        setTrackOffset(newOffset + totalWidth);
      }
    }, INTERVAL + TRANSITION_DURATION);

    return () => clearInterval(interval);
  }, [trackOffset]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 overflow-hidden">
      <div className="relative h-[300px] flex items-center">
        <div
          ref={trackRef}
          className="flex transition-transform duration-[3000ms] ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ transform: `translateX(${trackOffset}px)` }}
        >
          {displayCards.map((item, idx) => {
            const relativeIdx = (idx - index + displayCards.length) % innovations.length;
            const isHighlighted = relativeIdx === highlightedIndex;

            const scale = isHighlighted ? 1 : 0.95;

            return (
              <div
                key={idx}
                className="flex-shrink-0 rounded-lg p-2"
                style={{
                  width: CARD_WIDTH,
                  marginRight: GAP,
                  transform: `scale(${scale})`,
                  transition: `transform ${TRANSITION_DURATION}ms, background-color ${TRANSITION_DURATION}ms`,
                }}
              >
                <InnovationCard
                  title={item.title}
                  description={item.description}
                  highlighted={isHighlighted}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InnovationCarousel;
