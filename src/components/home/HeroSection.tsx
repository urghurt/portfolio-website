"use client";

import React, { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [firstLineVisible, setFirstLineVisible] = useState(false);
  const [secondLineVisible, setSecondLineVisible] = useState(false);
  const [firstLineTyped, setFirstLineTyped] = useState('');
  const [secondLineTyped, setSecondLineTyped] = useState('');
  const [firstLineOpacity, setFirstLineOpacity] = useState(1);
  
  const firstLine = "Hey, I'm Ergert";
  const secondLine = "And this is my portfolio";
  const typingSpeed = 80; // ms per character
  
  useEffect(() => {
    // Start typing first line after a short delay
    const firstLineTimer = setTimeout(() => {
      setFirstLineVisible(true);
      let currentText = '';
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < firstLine.length) {
          currentText += firstLine[currentIndex];
          setFirstLineTyped(currentText);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          
          // After first line is typed, start second line
          setTimeout(() => {
            setSecondLineVisible(true);
            // Reduce opacity of first line when second line appears
            setFirstLineOpacity(0.3);
            
            let secondCurrentText = '';
            let secondCurrentIndex = 0;
            
            const secondTypingInterval = setInterval(() => {
              if (secondCurrentIndex < secondLine.length) {
                secondCurrentText += secondLine[secondCurrentIndex];
                setSecondLineTyped(secondCurrentText);
                secondCurrentIndex++;
              } else {
                clearInterval(secondTypingInterval);
              }
            }, typingSpeed);
          }, 500);
        }
      }, typingSpeed);
    }, 1000);
    
    return () => {
      clearTimeout(firstLineTimer);
    };
  }, []);
  
  return (
    <div className="relative h-screen w-full">
      {/* Content */}
      <div className="container mx-auto px-4 md:px-16 h-full flex flex-col justify-center items-start">
        <div className="max-w-3xl">
          {/* First line */}
          <div 
            className="text-4xl md:text-6xl font-bold mb-2 transition-opacity duration-1000 ease-in-out text-white"
            style={{ opacity: firstLineOpacity }}
          >
            {firstLineVisible && (
              <>
                {firstLineTyped}
                {firstLineTyped.length < firstLine.length && (
                  <span className="inline-block w-[2px] h-[1em] bg-white ml-1 animate-blink"></span>
                )}
              </>
            )}
          </div>
          
          {/* Second line */}
          <div className="text-4xl md:text-6xl font-bold text-white">
            {secondLineVisible && (
              <>
                {secondLineTyped}
                {secondLineTyped.length < secondLine.length && (
                  <span className="inline-block w-[2px] h-[1em] bg-white ml-1 animate-blink"></span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
