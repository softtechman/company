import { motion } from "framer-motion";

const industries = [
  {
    icon: "https://www.theFxCapital.com/assets/homepage/industries-we-specialize-in/finance_and_banking.webp",
    title: "Finance & Banking",
    description: "Digital banking, payment systems, and financial services"
  },
  {
    icon: "https://www.theFxCapital.com/assets/homepage/industries-we-specialize-in/healthcare.webp",
    title: "Healthcare",
    description: "Medical records, supply chain, and patient data management"
  },
  {
    icon: "https://www.theFxCapital.com/assets/homepage/industries-we-specialize-in/real_estate.webp",
    title: "Real Estate",
    description: "Property tokenization and smart contract transactions"
  },
  {
    icon: "https://www.theFxCapital.com/assets/homepage/industries-we-specialize-in/supply_chain_and_logistics.webp",
    title: "Supply Chain & Logistics",
    description: "Logistics tracking and inventory management"
  },
  {
    icon: "https://www.theFxCapital.com/assets/homepage/industries-we-specialize-in/gaming_and_entertainment.webp",
    title: "Gaming & Entertainment",
    description: "NFT games, metaverse, and digital collectibles"
  },
  {
    icon: "https://www.theFxCapital.com/assets/homepage/industries-we-specialize-in/e_commerce_and_retail.webp",
    title: "E-commerce & Retail",
    description: "Decentralized marketplaces and crypto payments"
  },
  {
    icon: "https://www.theFxCapital.com/assets/homepage/industries-we-specialize-in/education.webp",
    title: "Education",
    description: "Credential verification and learning platforms"
  },
  {
    icon: "https://www.theFxCapital.com/assets/homepage/industries-we-specialize-in/government_and_public_sector.webp",
    title: "Government & Public Sector",
    description: "Digital identity and public records management"
  }
];

export const IndustriesSection = () => {
  return (
    <section className="bg-gray-50 box-border caret-transparent py-20">
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
              alt="Industries Icon"
              className="w-20 h-20 mx-auto object-contain"
            />
          </div>
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[54px] mb-4">
            Industries We <span className="text-sky-500">Specialize In</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Delivering blockchain solutions across diverse sectors with industry-specific expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(6, 171, 224, 0.2)",
                scale: 1.05
              }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="mb-4 inline-block"
              >
                <img src={industry.icon} alt={industry.title} className="w-20 h-20 object-contain mx-auto" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-cyan-500 transition-colors">
                {industry.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
