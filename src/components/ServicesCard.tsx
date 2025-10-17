import { useEffect, useRef } from "react";

interface ServiceCardProps {
    image: string;
    title: string;
    gradient?: string;
  }
  
  const ServicesCard = ({ image, title, gradient }: ServiceCardProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // 👉 When it appears on screen (scroll down or up)
            el.classList.add("animate-slideInFromLeft");
            el.classList.remove("opacity-0");
          } else {
            // 👉 When it leaves the viewport (scroll past it)
            el.classList.remove("animate-slideInFromLeft");
            el.classList.add("opacity-0");
          }
        },
        {
          threshold: 0.1, // triggers when 10% visible
        }
      );
  
      observer.observe(el);
      return () => observer.disconnect();
    }, []);
    
    return (
      <div ref={ref} className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] will-change-transform" 
           style={{ 
             boxShadow: 'var(--shadow-card)',
             transition: 'var(--transition-base)'
           }}
           onMouseEnter={(e) => {
             e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.boxShadow = 'var(--shadow-card)';
           }}>
        <div className="aspect-[4/3] relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white text-2xl font-bold tracking-tight">
              {title}
            </h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesCard;
  