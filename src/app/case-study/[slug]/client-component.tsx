"use client";

import React, { useState, useEffect } from 'react';
import { CaseStudy } from '../../../lib/data';

interface ClientCaseStudyViewerProps {
  caseStudy: CaseStudy;
}

export default function ClientCaseStudyViewer({ caseStudy }: ClientCaseStudyViewerProps) {
  const [isPortrait, setIsPortrait] = useState(false);
  
  // Check if the device is in portrait mode
  useEffect(() => {
    const checkOrientation = () => {
      if (window.innerWidth < 768) { // Mobile breakpoint
        setIsPortrait(window.innerHeight > window.innerWidth);
      } else {
        setIsPortrait(false);
      }
    };
    
    // Check on initial load
    checkOrientation();
    
    // Add event listener for orientation changes
    window.addEventListener('resize', checkOrientation);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);
  
  return (
    <div className="relative z-10 px-4 md:px-16 pb-16 flex justify-center">
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-[1045px] h-[592px] relative">
        {isPortrait && (
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 text-center">
            <svg className="w-16 h-16 mb-4 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <h2 className="text-xl font-bold text-white mb-2">Please Rotate Your Device</h2>
            <p className="text-text-secondary">This case study is best viewed in landscape orientation.</p>
          </div>
        )}
        {caseStudy.figmaEmbedUrl ? (
          <iframe 
            src={caseStudy.figmaEmbedUrl}
            className="w-full h-full border-0"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p>Iframe goes in here</p>
          </div>
        )}
      </div>
    </div>
  );
}
