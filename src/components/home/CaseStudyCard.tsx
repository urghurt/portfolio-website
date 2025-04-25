"use client";

import React, { useState, useEffect } from 'react';
import { CaseStudy } from '../../lib/data';
import { getAssetPath } from '../../lib/utils';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  isLarge?: boolean; // For determining if it's a taller card in the masonry layout
}

export const CaseStudyCard = ({ caseStudy, isLarge = false }: CaseStudyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnailPath, setThumbnailPath] = useState(caseStudy.thumbnailUrl || '');
  const [overlayPath, setOverlayPath] = useState(caseStudy.overlayImageUrl || '');
  
  // Update paths when component mounts (client-side only)
  useEffect(() => {
    if (caseStudy.thumbnailUrl) {
      setThumbnailPath(getAssetPath(caseStudy.thumbnailUrl));
    }
    if (caseStudy.overlayImageUrl) {
      setOverlayPath(getAssetPath(caseStudy.overlayImageUrl));
    }
  }, [caseStudy.thumbnailUrl, caseStudy.overlayImageUrl]);
  
  return (
    <div 
      className={`bg-card-bg border border-white/10 rounded-2xl overflow-hidden relative ${
        isLarge ? 'h-[916px]' : 'h-[438px]'
      } transition-all duration-500 group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : 'none',
        borderColor: isHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
        transition: 'box-shadow 0.5s ease-out, border-color 0.5s ease-out'
      }}
    >
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        {thumbnailPath ? (
          <div 
            className="w-full h-full bg-cover bg-center transition-all duration-700 ease-out"
            style={{ 
              backgroundImage: `url(${thumbnailPath})`,
              transform: isHovered ? 'scale(1.12)' : 'scale(1)',
              transformOrigin: 'center center',
              transition: 'transform 0.7s ease-out'
            }}
          />
        ) : (
          <div 
            className="w-full h-full bg-gradient-to-br from-orb-blue to-orb-pink opacity-50 transition-all duration-700 ease-out"
            style={{ 
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              transformOrigin: 'center center',
              transition: 'transform 0.7s ease-out'
            }}
          />
        )}
        
        {/* Overlay image (Design.png) if available */}
        {overlayPath && (
          <div
            className="absolute inset-0 bg-contain bg-right bg-no-repeat transition-all duration-700 ease-out z-10 drop-shadow-lg"
            style={{
              backgroundImage: `url(${overlayPath})`,
              transform: isHovered ? 'scale(1.04) translateY(-12px) translateX(-30px)' : 'scale(1) translateX(30px)',
              transformOrigin: 'center right',
              transition: 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), filter 0.8s ease-out',
              filter: isHovered ? 'drop-shadow(0 12px 10px rgb(0 0 0 / 0.35))' : 'drop-shadow(0 0px 0px rgb(0 0 0 / 0))',
            }}
          />
        )}
        
        {/* Overlay gradient - ensures text is readable over the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 from-30% to-transparent z-20" />
      </div>
      
      {/* Duration badge */}
      <div 
        className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center space-x-2 z-30 transition-all duration-500"
        style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#B0B6CB" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 4.66667V8L10 10" stroke="#B0B6CB" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-text-secondary text-xs font-medium">{caseStudy.duration}</span>
      </div>
      
      {/* Content container - elevated z-index to ensure it's in front of background */}
      <div 
        className="absolute bottom-0 left-0 right-0 p-10 flex flex-col space-y-3 z-30 transition-all duration-500"
        style={{ transform: isHovered ? 'translateY(-8px)' : 'translateY(0)' }}
      >
        <h3 className="text-white text-3xl font-bold transition-colors">{caseStudy.title}</h3>
        <p className="text-text-secondary text-lg">{caseStudy.description}</p>
      </div>
    </div>
  );
};
