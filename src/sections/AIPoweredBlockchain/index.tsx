import { motion } from "framer-motion";

const FEATURES = [
  { title: "Predictive Analytics for DeFi", desc: "Forecast trading behavior, token trends, and liquidity risks.", img: "https://www.theFxCapital.com/assets/homepage/ai-powered/predictive_analytics.webp" },
  { title: "AI-Based Security Protocols", desc: "Anomaly detection, fraud alerts, identity verification.", img: "https://www.theFxCapital.com/assets/homepage/ai-powered/security.webp" },
  { title: "AI-Enhanced Crypto Exchange", desc: "Personalized suggestions, chatbots, KYC automation.", img: "https://www.theFxCapital.com/assets/homepage/ai-powered/exchange.webp" },
  { title: "Autonomous DAO Management", desc: "Smarter governance and automated proposals.", img: "https://www.theFxCapital.com/assets/homepage/ai-powered/dao.webp" },
  { title: "AI-Powered Smart Contracts", desc: "Self-optimizing contracts and real-time fraud detection.", img: "https://www.theFxCapital.com/assets/homepage/ai-powered/smart_contracts.webp" },
];

export const AIPoweredBlockchain = () => {
  return (
    <section className="relative bg-white box-border caret-transparent py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none">
        <motion.div
          className="absolute -top-16 -left-32 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-cyan-200 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <div className="relative box-border caret-transparent max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 text-4xl font-bold leading-[54px]">
            Our AI Powered <span className="text-sky-500">Innovation</span> in Blockchain
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <motion.img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-sky-500/0 via-sky-500/0 to-sky-500/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


