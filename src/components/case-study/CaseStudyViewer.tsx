"use client";

import React from 'react';

interface CaseStudyViewerProps {
  figmaEmbedUrl: string;
  title: string;
}

export const CaseStudyViewer = ({ figmaEmbedUrl, title }: CaseStudyViewerProps) => {
  return (
    <div className="w-full h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 z-10 bg-card-bg/80 backdrop-blur-md p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold truncate">{title}</h1>
        <a 
          href="/"
          className="px-4 py-2 rounded-md bg-background hover:bg-background/80 transition-colors"
        >
          Back to home
        </a>
      </div>
      
      <div className="w-full h-full pt-16">
        <iframe 
          src={figmaEmbedUrl}
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
};
