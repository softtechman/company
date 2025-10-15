import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, CryptoTrade",
    image: "https://www.thecryptoape.com/assets/homepage/reviews-that-highlight-our-true-impact/john_smith.webp",
    text: "CryptoApe delivered an exceptional cryptocurrency exchange platform. Their expertise and professionalism exceeded our expectations. The team was responsive and delivered on time.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Founder, NFT Gallery",
    image: "https://www.thecryptoape.com/assets/homepage/reviews-that-highlight-our-true-impact/sarah_johnson.webp",
    text: "The NFT marketplace they built for us is outstanding. The team was responsive and delivered on time. Working with CryptoApe was a game-changer for our business.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, DeFi Solutions",
    image: "https://www.thecryptoape.com/assets/homepage/reviews-that-highlight-our-true-impact/michael_chen.webp",
    text: "Working with CryptoApe was a game-changer. Their technical knowledge and support are unmatched. They delivered a robust DeFi platform that exceeded all our requirements.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, BlockChain Inc",
    image: "https://www.thecryptoape.com/assets/homepage/reviews-that-highlight-our-true-impact/emily_rodriguez.webp",
    text: "Outstanding service and exceptional results. The CryptoApe team understood our vision and brought it to life with precision and creativity.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder, MetaVerse Pro",
    image: "https://www.thecryptoape.com/assets/homepage/reviews-that-highlight-our-true-impact/david_kim.webp",
    text: "The metaverse platform they developed is incredible. CryptoApe's expertise in blockchain and AI integration is truly impressive.",
    rating: 5,
  }
];

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      const cardWidth = 400 + 32;
      const totalWidth = cardWidth * testimonials.length;

      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      scrollContainer.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white box-border caret-transparent py-20 overflow-hidden">
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
              alt="Reviews Icon"
              className="w-20 h-20 mx-auto object-contain"
            />
          </div>
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[54px] mb-4">
            Reviews That Highlight Our <span className="text-sky-500">True Impact</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients around the world
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_10%,rgb(0,0,0)_90%,rgba(0,0,0,0)_100%)]">
            <div ref={scrollRef} className="flex gap-8">
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px] bg-white rounded-lg p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
