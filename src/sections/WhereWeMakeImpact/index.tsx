import { motion } from "framer-motion";

type ImpactItem = {
  title: string;
  description: string;
};

const IMPACT_ITEMS: ImpactItem[] = [
  { title: "Private Blockchain Development", description: "Secure, permissioned networks for authorized participants." },
  { title: "Blockchain Consulting", description: "Strategy, design, and implementation for scalable solutions." },
  { title: "DeFi & Web3 Applications", description: "Decentralized, transparent, user-driven applications." },
  { title: "NFT & Token Development", description: "Create unique digital assets and crypto tokens." },
  { title: "Customized Blockchain Development", description: "Tailored, secure, and scalable solutions." },
  { title: "Public Blockchain Development", description: "Open, decentralized networks with transparency." },
  { title: "Enterprise Blockchain Development", description: "Scalable solutions to streamline operations." },
  { title: "AI-Powered Blockchain Development", description: "Combine AI with blockchain for smarter systems." },
];

export const WhereWeMakeImpact = () => {
  // Rectangle half-dimensions from center; cards align along this border (no top edge)
  const rectHalfWidth = 420;   // half of the rectangle width
  const rectHalfHeight = 300;  // half of the rectangle height

  return (
    <section className="relative bg-white box-border caret-transparent py-20 overflow-hidden">
      <div className="relative box-border caret-transparent max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 text-4xl font-bold leading-[54px]">
            Where We Make an <span className="text-sky-500">Impact</span>
          </h2>
        </div>

        <div className="relative flex items-center justify-center min-h-[700px]">
          {/* Dashed rectangular guide border (cards align to this except the top edge) */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-dashed border-sky-400/40"
            style={{ width: rectHalfWidth * 2, height: rectHalfHeight * 2 }}
          />
          {/* Center visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20"
          >
            <div className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full flex items-center justify-center bg-white shadow-2xl">
              <motion.img
                src="https://www.theFxCapital.com/assets/homepage/where-we-make-an-impact/where_we_make_an_impact.webp"
                className="w-[75%] h-[75%] object-contain"
                alt="Impact center"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = "https://c.animaapp.com/mgqxinb9LGHf0V/assets/40.png";
                }}
              />
              {/* rotating dotted ring */}
              <motion.div
                className="absolute inset-[-24px] rounded-full border-2 border-dashed border-sky-400/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Radial cards */}
          <motion.ul
            className="absolute inset-0 list-none m-0 p-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {IMPACT_ITEMS.map((item, idx) => {
              // Distribute items evenly along the rectangle border excluding the top edge.
              // Remaining perimeter length: left + bottom + right = 2*rectHalfHeight + 2*rectHalfWidth + 2*rectHalfHeight - top(2*rectHalfWidth)
              const remainingPerimeter = 2 * rectHalfWidth + 4 * rectHalfHeight;
              const t = (idx + 0.5) / IMPACT_ITEMS.length; // center each segment
              let s = t * remainingPerimeter; // distance along remaining edges

              // Edge 1: Right edge, from top-right to bottom-right (length = 2*rectHalfHeight)
              if (s <= 2 * rectHalfHeight) {
                const y = -rectHalfHeight + s; // from -h to +h
                const x = rectHalfWidth;
                return (
                  <li key={item.title} className="absolute z-10" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}>
                    <motion.div whileHover={{ y: -6, scale: 1.03 }} className="w-[220px] max-w-[46vw] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl border border-gray-100 p-4">
                      <h3 className="text-gray-900 text-base md:text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </motion.div>
                  </li>
                );
              }
              s -= 2 * rectHalfHeight;

              // Edge 2: Bottom edge, from bottom-right to bottom-left (length = 2*rectHalfWidth)
              if (s <= 2 * rectHalfWidth) {
                const x = rectHalfWidth - s; // from +w to -w
                const y = rectHalfHeight;
                return (
                  <li key={item.title} className="absolute z-10" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}>
                    <motion.div whileHover={{ y: -6, scale: 1.03 }} className="w-[220px] max-w-[46vw] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl border border-gray-100 p-4">
                      <h3 className="text-gray-900 text-base md:text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </motion.div>
                  </li>
                );
              }
              s -= 2 * rectHalfWidth;

              // Edge 3: Left edge, from bottom-left to top-left (length = 2*rectHalfHeight)
              // We stop at top-left, leaving the top edge empty
              const y = rectHalfHeight - s; // from +h to -h
              const x = -rectHalfWidth;
              return (
                <li key={item.title} className="absolute z-10" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}>
                  <motion.div whileHover={{ y: -6, scale: 1.03 }} className="w-[220px] max-w-[46vw] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl border border-gray-100 p-4">
                    <h3 className="text-gray-900 text-base md:text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </motion.div>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};


