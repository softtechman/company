import ServicesCard from "@/components/ServicesCard";
import fintechImg from "@/assets/fintech.jpg";
import aiImg from "@/assets/ai.jpg";
import ecommerceImg from "@/assets/ecommerce.jpg";
import gamingImg from "@/assets/gaming.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import metaverseImg from "@/assets/metaverse.jpg";
import educationImg from "@/assets/education.jpg";
import logisticsImg from "@/assets/logistics.jpg";
import { motion } from "framer-motion";

export const IndustrySection = () => {
  const services = [
    { title: "Fintech", image: fintechImg },
    { title: "Artificial Intelligence", image: aiImg },
    { title: "ECommerce & Retail", image: ecommerceImg },
    { title: "Gaming", image: gamingImg },
    { title: "Healthcare", image: healthcareImg },
    { title: "Metaverse", image: metaverseImg },
    { title: "Education", image: educationImg },
    { title: "Logistics", image: logisticsImg },
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 sm:w-full mx-auto w-[60%]">
      <div className="max-w-7xl mx-auto">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <img
              src="https://c.animaapp.com/mgqxinb9LGHf0V/assets/41.png"
              alt="Industries Icon"
              className="w-20 h-20 mx-auto object-contain"
            />
          </div>
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[54px] mb-4">
            Industries We <span className="text-sky-500">Specialize In</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServicesCard
              key={service.title}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

