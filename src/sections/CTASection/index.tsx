import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#1fc2f7] to-[#5cc7ea] box-border caret-transparent py-20">
      <div>
        <img className="absolute w-60 translate-y-[-35%]" src="https://i.postimg.cc/P52fvqhj/image-1.png" />
        <img className="absolute w-60 translate-y-[-35%] right-0" src="https://i.postimg.cc/t4XCgxKK/image-2.png" />
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="relative box-border caret-transparent max-w-[1400px] mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white text-xl md:text-4xl font-bold mb-10">
          Your Blockchain Journey Starts With <span className="text-black">FxCapital</span>
          </h3>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-cyan-600 font-semibold px-6 py-3 border border-1 border-blue-500 hover:border-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
