import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We understand your requirements and business goals",
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/58.png"
  },
  {
    number: "02",
    title: "Planning",
    description: "Create detailed roadmap and technical architecture",
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/59.png"
  },
  {
    number: "03",
    title: "Development",
    description: "Build your solution with cutting-edge technologies",
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/60.png"
  },
  {
    number: "04",
    title: "Testing",
    description: "Rigorous quality assurance and security audits",
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/34.png"
  },
  {
    number: "05",
    title: "Deployment",
    description: "Launch your platform with full support",
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/35.png"
  },
  {
    number: "06",
    title: "Maintenance",
    description: "Ongoing support and feature enhancements",
    icon: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/36.png"
  }
];

export const ProcessSection = () => {
  return (
    <section className="bg-gray-50 box-border caret-transparent py-16">
      <div className="box-border caret-transparent max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[54px] mb-4">
            Our <span className="text-sky-500">Development Process</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to launch
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <div className="mt-4">
                <img src={step.icon} alt={step.title} className="w-16 h-16 mb-4 object-contain" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
