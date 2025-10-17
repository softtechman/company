import { motion } from "framer-motion";

export type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(6, 171, 224, 0.2)" }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-4">
        <img src={props.icon}
          // alt={props.title}
          className="w-16 h-16 object-contain" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{props.title}</h3>
      <p className="text-gray-600 leading-relaxed">{props.description}</p>
    </motion.div>
  );
};
