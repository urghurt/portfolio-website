"use client";

import React, { useEffect, useRef } from 'react';

export const GradientOrbs = () => {
  const orbsContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = orbsContainerRef.current;
    if (!container) return;
    
    // Add subtle mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      const orbs = container.querySelectorAll('.orb');
      orbs.forEach((orb, index) => {
        const orbElement = orb as HTMLElement;
        // Very subtle parallax factor for each orb
        const factor = 0.5 + (index * 0.05);
        // Apply very subtle movement with requestAnimationFrame for smoother transitions
        requestAnimationFrame(() => {
          orbElement.style.transform = `translate(${x * 10 * factor}px, ${y * 10 * factor}px)`;
        });
      });
    };
    
    // Throttle the mouse move event for better performance
    let lastTime = 0;
    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime >= 50) { // Only process every 50ms
        lastTime = now;
        handleMouseMove(e);
      }
    };
    
    window.addEventListener('mousemove', throttledMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, []);
  
  return (
    <div ref={orbsContainerRef} className="absolute inset-0 overflow-hidden">
      {/* Main gradient orbs with very slow animations */}
      <div className="orb absolute -top-36 -left-[460px] w-[717px] h-[295px] bg-orb-red rounded-full opacity-30 blur-3xl animate-shimmer" />
      <div className="orb absolute -top-36 left-[23px] w-[717px] h-[295px] bg-orb-yellow rounded-full opacity-30 blur-3xl animate-shimmer-delay-1" />
      <div className="orb absolute -top-36 left-[506px] w-[716px] h-[295px] bg-orb-green rounded-full opacity-30 blur-3xl animate-shimmer-delay-2" />
      <div className="orb absolute -top-36 left-[988px] w-[717px] h-[295px] bg-orb-blue rounded-full opacity-30 blur-3xl animate-shimmer-delay-3" />
      <div className="orb absolute -top-36 left-[1471px] w-[717px] h-[295px] bg-orb-pink rounded-full opacity-30 blur-3xl animate-shimmer-delay-4" />
      
      {/* Additional subtle floating orbs */}
      <div className="orb absolute top-[30%] left-[10%] w-[300px] h-[300px] bg-orb-blue rounded-full opacity-20 blur-3xl animate-float" />
      <div className="orb absolute top-[60%] left-[70%] w-[250px] h-[250px] bg-orb-pink rounded-full opacity-20 blur-3xl animate-float-delay-1" />
      <div className="orb absolute top-[80%] left-[30%] w-[350px] h-[350px] bg-orb-yellow rounded-full opacity-20 blur-3xl animate-float-delay-2" />
      
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-background/5 backdrop-blur-3xl" />
    </div>
  );
};
