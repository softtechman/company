import { motion } from "framer-motion";

const blogs = [
  {
    title: "The Future of DeFi in 2025",
    excerpt: "Exploring the latest trends and innovations in decentralized finance",
    image: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/24.jpg",
    date: "Jan 15, 2025",
    category: "DeFi"
  },
  {
    title: "NFT Market Analysis",
    excerpt: "Understanding the current state of the NFT marketplace",
    image: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/25.jpg",
    date: "Jan 12, 2025",
    category: "NFT"
  },
  {
    title: "Web3 Development Guide",
    excerpt: "Complete guide to building decentralized applications",
    image: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/26.png",
    date: "Jan 10, 2025",
    category: "Web3"
  }
];

export const BlogSection = () => {
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
            Latest <span className="text-sky-500">Insights</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest blockchain and cryptocurrency news
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-cyan-500 text-sm font-semibold">{blog.category}</span>
                  <span className="text-gray-500 text-sm">{blog.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <a href="#" className="text-cyan-500 font-semibold hover:text-cyan-600">Read More →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
