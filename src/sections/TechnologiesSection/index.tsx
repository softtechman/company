import { motion } from "framer-motion";

const technologies = [
  { name: "Ethereum", logo: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/42.png" },
  { name: "Binance", logo: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/43.png" },
  { name: "Polygon", logo: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/44.png" },
  { name: "Solana", logo: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/45.png" },
  { name: "Cardano", logo: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/46.png" },
  { name: "Polkadot", logo: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/47.png" },
  { name: "Avalanche", logo: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/48.png" },
  { name: "Tron", logo: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/49.png" },
];

export const TechnologiesSection = () => {
  return (
    <section className="bg-gray-50 box-border caret-transparent py-16">
      <div className="box-border caret-transparent max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[54px] mb-4">
            Technologies We <span className="text-sky-500">Work With</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We leverage the most advanced blockchain platforms and technologies to build your solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-lg p-6 shadow-md flex items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              <img src={tech.logo} alt={tech.name} className="w-24 h-24 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
