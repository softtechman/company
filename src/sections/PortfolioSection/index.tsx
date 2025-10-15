import { motion } from "framer-motion";

export const PortfolioSection = () => {
  return (
    <section className="bg-white box-border caret-transparent py-20">
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
              alt="Portfolio Icon"
              className="w-20 h-20 mx-auto object-contain"
            />
          </div>
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[54px] mb-4">
            Our Portfolio, Your <span className="text-sky-500">Proof of Trust</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our successful blockchain projects delivered to clients worldwide
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Success Stories</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    500+
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Projects Delivered</h4>
                    <p className="text-gray-600 text-sm">Successfully completed blockchain solutions across various industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    50+
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Countries Served</h4>
                    <p className="text-gray-600 text-sm">Global reach with clients from every continent</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    98%
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Client Satisfaction</h4>
                    <p className="text-gray-600 text-sm">Consistently exceeding client expectations</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-2">Live Trading View</h3>
                  <p className="text-sm opacity-90">Real-time market data and analytics</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
