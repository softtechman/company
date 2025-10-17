import { motion } from "framer-motion";

const benefits = [
  {
    icon: "https://www.theFxCapital.com/assets/homepage/why-use-ai-in-blockchain-development/enhanced_security.webp",
    title: "Enhanced Security",
    description: "AI algorithms detect and prevent security threats in real-time, ensuring your blockchain network remains secure against evolving cyber attacks."
  },
  {
    icon: "https://www.theFxCapital.com/assets/homepage/why-use-ai-in-blockchain-development/smart_contract_optimization.webp",
    title: "Smart Contract Optimization",
    description: "AI analyzes and optimizes smart contracts for efficiency, reducing gas fees and improving execution speed while maintaining security."
  },
  {
    icon: "https://www.theFxCapital.com/assets/homepage/why-use-ai-in-blockchain-development/predictive_analytics.webp",
    title: "Predictive Analytics",
    description: "Machine learning models forecast market trends and user behavior, enabling data-driven decisions for your blockchain platform."
  },
  {
    icon: "https://www.theFxCapital.com/assets/homepage/why-use-ai-in-blockchain-development/automated_compliance.webp",
    title: "Automated Compliance",
    description: "AI ensures regulatory compliance by automatically monitoring transactions and flagging suspicious activities in real-time."
  },
  {
    icon: "https://www.theFxCapital.com/assets/homepage/why-use-ai-in-blockchain-development/fraud_detection.webp",
    title: "Fraud Detection",
    description: "Advanced AI algorithms identify fraudulent patterns and anomalies, protecting your platform and users from malicious activities."
  },
  {
    icon: "https://www.theFxCapital.com/assets/homepage/why-use-ai-in-blockchain-development/personalized_user_experience.webp",
    title: "Personalized User Experience",
    description: "AI-driven recommendations and interfaces adapt to user preferences, creating engaging and intuitive blockchain applications."
  }
];

export const AIBlockchainSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white box-border caret-transparent py-20">
      <div className="box-border caret-transparent max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <img
              src="https://c.animaapp.com/mgqxinb9LGHf0V/assets/41.png"
              // alt="AI Icon"
              className="w-20 h-20 mx-auto object-contain"
            />
          </div>
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[54px] mb-4">
            Why Use <span className="text-sky-500">AI in Blockchain</span> Development
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Combining artificial intelligence with blockchain technology creates powerful, intelligent, and secure solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(6, 171, 224, 0.2)" }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="mb-6"
              >
                <img src={benefit.icon} alt={benefit.title} className="w-20 h-20 object-contain mx-auto" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
