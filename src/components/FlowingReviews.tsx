import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type Review = {
  name: string;
  title?: string;
  review: string;
  logo: string;
};

interface FlowingReviewsProps {
  reviews: Review[];
  cardWidth?: number; // px
  pauseMs?: number; // milliseconds to pause at center
  moveDuration?: number; // seconds to move between cards
}

export default function FlowingReviews({
  reviews,
  cardWidth = 360,
  pauseMs = 2000,
  moveDuration = 2,
}: FlowingReviewsProps) {
  const duplicated = [...reviews,...reviews,...reviews,...reviews,...reviews,]; // duplicate for seamless looping
  const controls = useAnimation();
  const runningRef = useRef(true);

  const [initialOffset, setInitialOffset] = useState(0);

  // compute initial offset so first screen shows multiple cards
  useEffect(() => {
    const visibleCards = Math.floor(window.innerWidth / cardWidth);
    setInitialOffset(-(cardWidth * 0)); // start at 0 for now
  }, [cardWidth]);

  useEffect(() => {
    runningRef.current = true;

    async function animateFlow() {
      while (runningRef.current) {
        const centerX = window.innerWidth / 2 - cardWidth / 2;

        for (let i = 0; i < duplicated.length && runningRef.current; i++) {
          const targetX = -((i+2) * cardWidth - centerX);
          await controls.start({
            x: targetX,
            transition: { duration: moveDuration, ease: "easeInOut" },
          });

          if (!runningRef.current) break;

          await new Promise((res) => setTimeout(res, pauseMs));
        }
      }
    }

    animateFlow();

    return () => {
      runningRef.current = false;
      controls.stop();
    };
  }, [controls, duplicated, cardWidth, pauseMs, moveDuration]);

  return (
    <div className="relative overflow-hidden py-20 -mt-32 mx-20">
      <motion.div
        className="flex gap-20"
        initial={{ x: initialOffset }}
        animate={controls}
      >
        {duplicated.map((review, i) => (
          <div
            key={i}
            className="relative group cursor-pointer hover:scale-[1.1] bg-white min-w-[320px] border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
          >
            <img
              src={review.logo}
              alt={review.name}
              className="absolute object-contain left-1/2 -translate-x-1/2 top-[-10%] w-20 h-20 mx-auto"
            />
            <h3 className="font-bold text-lg mb-2 text-center mt-10 group-hover:text-blue-500">
              {review.name}
            </h3>
            {review.title && (
              <p className="text-xs text-gray-500 uppercase mb-4 text-center">
                {review.title}
              </p>
            )}
            <p className="text-gray-600 text-sm leading-relaxed">
              {review.review}
            </p>
            <div className="absolute bottom-6 right-6">
              <svg
                className="w-8 h-8 text-cyan-400 opacity-50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
