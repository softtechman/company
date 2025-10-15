import { useEffect, useRef } from "react";
import { CarouselSlide } from "@/sections/Hero/components/CarouselSlide";

const slides = [
  {
    title: "Metaverse Development",
    imageUrl: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/18.jpg",
    imageAlt: "Metaverse Development",
  },
  {
    title: "AI Development",
    imageUrl: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/19.jpg",
    imageAlt: "AI Development",
  },
  {
    title: "Web 3.0 Development",
    imageUrl: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/20.jpg",
    imageAlt: "Web 3.0 Development",
  },
  {
    title: "DEFI Development",
    imageUrl: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/21.jpg",
    imageAlt: "DEFI Development",
  },
  {
    title: "Game Development",
    imageUrl: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/22.jpg",
    imageAlt: "Game Development",
  },
  {
    title: "Crypto Development",
    imageUrl: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/23.jpg",
    imageAlt: "Crypto Development",
  },
  {
    title: "NFT Development",
    imageUrl: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/24.jpg",
    imageAlt: "NFT Development",
  },
  {
    title: "Enterprise Development",
    imageUrl: "https://c.animaapp.com/mgqxinb9LGHf0V/assets/25.jpg",
    imageAlt: "Enterprise Development",
  },
];

export const HeroCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

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
          <div ref={carouselRef} className="relative caret-transparent flex h-full w-full z-[1]">
            {[...slides, ...slides, ...slides].map((slide, index) => (
              <CarouselSlide key={index} {...slide} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
