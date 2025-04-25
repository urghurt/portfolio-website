"use client";

import React from 'react';
import Link from 'next/link';
import { CaseStudyCard } from './CaseStudyCard';
import { caseStudies } from '../../lib/data';

export const CaseStudyGrid = () => {
  if (caseStudies.length === 0) return null;
  
  // First case study is large, the rest are in the second column
  const largeCardStudy = caseStudies[0];
  const remainingStudies = caseStudies.slice(1);
  
  return (
    <section className="py-24">
      {/* Divider with Portfolio header */}
      <div className="flex items-center space-x-6 mb-10">
        <h2 className="text-white text-3xl font-bold">Portfolio</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-orb-yellow via-orb-red to-orb-pink"></div>
      </div>
      
      {/* Masonry grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* First column - large card */}
        <div className="col-span-1">
          <Link href={`/case-study/${largeCardStudy.slug}`} legacyBehavior passHref>
            <a>
              <CaseStudyCard caseStudy={largeCardStudy} isLarge={true} />
            </a>
          </Link>
        </div>
        
        {/* Second column - stacked smaller cards */}
        <div className="col-span-1 flex flex-col space-y-10">
          {remainingStudies.map(study => (
            <Link key={study.id} href={`/case-study/${study.slug}`} legacyBehavior passHref>
              <a>
                <CaseStudyCard caseStudy={study} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
