import React from 'react';
import Link from 'next/link';
import { caseStudies } from '../../../lib/data';
import { GradientOrbs } from '../../../components/home/GradientOrbs';
import ClientCaseStudyViewer from './client-component';

// This is a server component
export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const caseStudy = caseStudies.find(cs => cs.slug === slug);
  
  if (!caseStudy) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <p className="text-white">Case study not found</p>
      </div>
    );
  }
  
  return (
    <main className="relative min-h-screen bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <GradientOrbs />
        <div className="absolute inset-0 bg-background/5 backdrop-blur-3xl" />
      </div>
      
      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-12">
        <Link href="/" className="text-white hover:underline">
          &larr; Go back
        </Link>
        <h1 className="text-white text-xl">{caseStudy.title}</h1>
      </div>
      
      {/* Figma Embed - Client Component */}
      <ClientCaseStudyViewer caseStudy={caseStudy} />
    </main>
  );
}

// This function is required for static export with dynamic routes
export async function generateStaticParams() {
  return caseStudies.map(caseStudy => ({
    slug: caseStudy.slug,
  }));
}
