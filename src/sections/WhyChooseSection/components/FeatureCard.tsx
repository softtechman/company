import { motion } from "framer-motion";

export type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  index: number;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: props.index * 0.1 }}
      className="text-center p-6"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-block mb-4"
      >
        <img src={props.icon} alt={props.title} className="w-20 h-20 object-contain" />
      </motion.div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{props.title}</h3>
      <p className="text-gray-600 leading-relaxed">{props.description}</p>
    </motion.div>
  );
};
