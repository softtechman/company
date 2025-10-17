import { useEffect, useRef, useState } from "react";
import { CarouselSlide } from "@/sections/Hero/components/CarouselSlide";

const slides = [
  {
    title: "Metaverse Development",
    imageUrl: "https://i.postimg.cc/YCqjfdjV/18-removebg-preview.png",
    // imageUrl: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/18.jpg",
    imageAlt: "Metaverse Development",
  },
  {
    title: "AI Development",
    imageUrl: "https://i.postimg.cc/Bv3gZ9vr/19-removebg-preview.png",
    imageAlt: "AI Development",
  },
  {
    title: "Web 3.0 Development",
    imageUrl: "https://i.postimg.cc/3whBr5wv/20-removebg-preview.png",
    imageAlt: "Web 3.0 Development",
  },
  {
    title: "DEFI Development",
    imageUrl: "https://i.postimg.cc/VkngcLzS/21-removebg-preview.png",
    imageAlt: "DEFI Development",
  },
  {
    title: "Game Development",
    imageUrl: "https://i.postimg.cc/t4WkHC9t/22-removebg-preview.png",
    imageAlt: "Game Development",
  },
  {
    title: "Crypto Development",
    imageUrl: "https://i.postimg.cc/x1M5ST9c/23-removebg-preview.png",
    imageAlt: "Crypto Development",
  },
  {
    title: "NFT Development",
    imageUrl: "https://i.postimg.cc/x1M5ST9c/23-removebg-preview.png",
    imageAlt: "NFT Development",
  },
  {
    title: "Enterprise Development",
    imageUrl: "https://i.postimg.cc/fbsKWnb2/25-removebg-preview.png",
    imageAlt: "Enterprise Development",
  },
];

export const HeroCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let position = 0;
    const speed = 1.2;

    const animate = () => {
      position -= speed;
      const slideWidth = 336 + 20;
      const totalWidth = slideWidth * slides.length;

      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative box-border caret-transparent w-full md:w-2/5">
      <div className="[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_10%,rgb(0,0,0)_90%,rgba(0,0,0,0)_100%)] box-border caret-transparent [mask-repeat:no-repeat] [mask-size:100%_100%] overflow-hidden">
        <div className="relative box-border caret-transparent list-none z-[1] overflow-hidden mx-auto">
          {/* <div ref={carouselRef} className="relative caret-transparent flex h-full w-full z-[1]">
            {[...slides, ].map((slide, index) => (

              <CarouselSlide
              currentSlide = {currentSlide}
              index={index}
              key={index} {...slide} />
              
            ))}
          </div> */}
          <div className="relative w-full h-96 lg:h-[500px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 transform translate-x-0' 
                    : index < currentSlide 
                    ? 'opacity-0 transform -translate-x-full' 
                    : 'opacity-0 transform translate-x-full'
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  <div className="relative group">
                    <img
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-80 h-80 object-cover rounded-2xl transform transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl opacity-0 duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                      {slide.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
