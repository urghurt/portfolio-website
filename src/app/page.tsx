import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CaseStudyGrid } from '../components/home/CaseStudyGrid';
import { GradientOrbs } from '../components/home/GradientOrbs';
import { caseStudies } from '../lib/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Full-page background with gradient orbs */}
      <div className="fixed inset-0 z-0">
        <GradientOrbs />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <div className="container mx-auto px-4 md:px-16 pb-20">
          <CaseStudyGrid />
        </div>
      </div>
    </main>
  );
}
