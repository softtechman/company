import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation & Discovery",
    description: "We understand your vision, goals, and requirements through detailed discussions",
    icon: "https://www.thecryptoape.com/assets/homepage/your-blockchain-journey-starts-with-cryptoape/consultation_and_discovery.webp"
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "Our experts create a comprehensive roadmap tailored to your business needs",
    icon: "https://www.thecryptoape.com/assets/homepage/your-blockchain-journey-starts-with-cryptoape/strategy_and_planning.webp"
  },
  {
    number: "03",
    title: "Design & Development",
    description: "We build your solution using cutting-edge technologies and best practices",
    icon: "https://www.thecryptoape.com/assets/homepage/your-blockchain-journey-starts-with-cryptoape/design_and_development.webp"
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your platform is secure, scalable, and bug-free",
    icon: "https://www.thecryptoape.com/assets/homepage/your-blockchain-journey-starts-with-cryptoape/testing_and_quality_assurance.webp"
  },
  {
    number: "05",
    title: "Deployment & Launch",
    description: "We handle the complete deployment process and ensure a smooth launch",
    icon: "https://www.thecryptoape.com/assets/homepage/your-blockchain-journey-starts-with-cryptoape/deployment_and_launch.webp"
  },
  {
    number: "06",
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and optimization to keep your platform running perfectly",
    icon: "https://www.thecryptoape.com/assets/homepage/your-blockchain-journey-starts-with-cryptoape/support_and_maintenance.webp"
  }
];

export const BlockchainJourneySection = () => {
  return (
    <section className="bg-white box-border caret-transparent py-20">
      <div className="box-border caret-transparent max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[54px] mb-4">
            Your Blockchain Journey Starts With <span className="text-sky-500">CryptoApe</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we guide you through every step of your blockchain development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>
              <div className="mt-4">
                <motion.img
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  src={step.icon}
                  alt={step.title}
                  className="w-20 h-20 mb-6 object-contain mx-auto"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
