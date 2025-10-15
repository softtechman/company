import { motion } from "framer-motion";
import { FeatureCard } from "@/sections/WhyChooseSection/components/FeatureCard";

const features = [
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/34.png",
    title: "Expert Team",
    description: "100+ blockchain developers, architects, and consultants",
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/35.png",
    title: "Proven Track Record",
    description: "500+ successful projects delivered across 50+ countries",
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/36.png",
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance",
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/37.png",
    title: "Cutting-Edge Tech",
    description: "Latest blockchain technologies and frameworks",
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/38.png",
    title: "Security First",
    description: "Bank-grade security with multi-layer protection",
  },
  {
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/39.png",
    title: "Fast Delivery",
    description: "Agile development with quick turnaround times",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="bg-white box-border caret-transparent py-16">
      <div className="box-border caret-transparent max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[54px] mb-4">
            Why Choose <span className="text-sky-500">CryptoApe</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that drive real results.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
