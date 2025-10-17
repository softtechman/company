import { motion } from "framer-motion";

const innovations = [
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/53.png",
    title: "AI-Powered Trading Bots",
    description: "Automated trading with machine learning algorithms"
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/54.png",
    title: "Smart Contract Auditing",
    description: "AI-driven security analysis and vulnerability detection"
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/55.png",
    title: "Predictive Analytics",
    description: "Market trend prediction using advanced AI models"
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/56.png",
    title: "Natural Language Processing",
    description: "AI chatbots for customer support and trading assistance"
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/57.png",
    title: "Fraud Detection",
    description: "Real-time AI monitoring for suspicious activities"
  }
];

export const InnovationSection = () => {
  return (
    <section className="relative bg-white bg-[url('https://www.thecryptoape.com/assets/homepage/ai-powered-innovation/ai_powered_innovation_bg.webp')] bg-no-repeat bg-cover box-border caret-transparent overflow-hidden py-20">
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="relative box-border caret-transparent max-w-[1400px] w-full z-10 mx-auto px-4">
        <div className="items-center box-border caret-transparent flex flex-col text-center">
          <div className="box-border caret-transparent mb-8">
            <img
              alt="Blockchain Icon"
              src="https://c.animaapp.com/mgqxinb9LGHf0V/assets/41.png"
              className="text-transparent aspect-[auto_72_/_72] box-border max-w-full object-contain pointer-events-none w-[72px]"
            />
          </div>
          <div className="box-border caret-transparent mb-12">
            <h2 className="text-gray-900 text-[28px] font-bold box-border caret-transparent leading-[42px] md:text-4xl md:leading-[54px]">
              Our{" "}
              <span className="text-sky-500 text-[28px] box-border caret-transparent leading-[42px] md:text-4xl md:leading-[54px]">
                AI Powered Innovation
              </span>
              {" "}in Blockchain
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            {innovations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 171, 224, 0.3)" }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                <img src={item.icon}
                  // alt={item.title} 
                  className="w-16 h-16 mx-auto mb-4 object-contain" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
