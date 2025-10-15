import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 100, suffix: "+", label: "Expert Developers" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-600 box-border caret-transparent py-16">
      <div className="box-border caret-transparent max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center text-white"
    >
      <div className="text-5xl font-bold mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-lg opacity-90">{label}</div>
    </motion.div>
  );
};
