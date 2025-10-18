import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getScrollTransform = (direction: 'left' | 'right', intensity: number = 1) => {
    if (!elementRef.current) return {};

    const rect = elementRef.current.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;
    
    // Calculate when element enters and exits viewport
    const startScroll = elementTop - windowHeight;
    const endScroll = elementTop + elementHeight;
    
    // Check if element is in viewport range
    if (scrollY < startScroll || scrollY > endScroll) {
      return { transform: 'translateX(0px)' };
    }
    
    // Calculate progress through the element (0 to 1)
    const progress = (scrollY - startScroll) / (endScroll - startScroll);
    
    // Apply oscillating movement (-50px to +50px)
    const baseMovement = Math.sin(progress * Math.PI * 2) * 50 * intensity;
    const movement = direction === 'left' ? -Math.abs(baseMovement) : Math.abs(baseMovement);
    
    return {
      transform: `translateX(${movement}px)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  return { elementRef, getScrollTransform };
};
