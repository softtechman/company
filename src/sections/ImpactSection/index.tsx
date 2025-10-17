import { motion } from "framer-motion";

export const ImpactSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative box-border caret-transparent max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[54px] mb-4">
            Where We Make an <span className="text-sky-500">Impact</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Transforming industries worldwide with innovative blockchain solutions
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 opacity-20"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06ABE0" />
                    <stop offset="100%" stopColor="#0496C6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="relative z-10"
            >
              <img
                src="https://c.animaapp.com/mgqxinb9LGHf0V/assets/40.png"
                // alt="Bitcoin Symbol"
                className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <div className="relative w-full md:w-1/2">
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="https://www.theFxCapital.com/assets/homepage/where-we-make-an-impact/where_we_make_an_impact.webp"
              // alt="Global Impact"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "50+", label: "Countries" },
            { number: "500+", label: "Projects" },
            { number: "100+", label: "Experts" },
            { number: "98%", label: "Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
