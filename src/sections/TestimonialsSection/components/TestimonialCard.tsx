import { motion } from "framer-motion";
import { Star } from "lucide-react";

export type TestimonialCardProps = {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
  index: number;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: props.index * 0.2 }}
      className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <img
          src={props.image}
          alt={props.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{props.name}</h4>
          <p className="text-sm text-gray-600">{props.role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(props.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed">{props.text}</p>
    </motion.div>
  );
};
