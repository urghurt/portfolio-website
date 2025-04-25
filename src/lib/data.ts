// src/lib/data.ts
export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string; // e.g., "10 MINUTES"
  thumbnailUrl?: string;
  overlayImageUrl?: string; // Added for the design overlay
  figmaEmbedUrl?: string; // URL for the Figma embed
};

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'revamping-filters',
    title: 'Reimagining filters',
    description: 'Where the first version went wrong and how we blew up',
    duration: '10 MINUTES',
    thumbnailUrl: '/images/Background.png',
    overlayImageUrl: '/images/Design.png',
    figmaEmbedUrl: 'https://embed.figma.com/deck/0E90sNzU04naL04kulp6DR/Untitled?node-id=1-42&viewport=-136%2C-92%2C0.63&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share'
  },
  {
    id: '2',
    slug: 'logic-of-workflows',
    title: 'The logic of workflows',
    description: 'Collection of all the users assets within their SaaS stack',
    duration: '10 MINUTES',
    thumbnailUrl: '/images/Background2.png',
    overlayImageUrl: '/images/Design2.png',
    figmaEmbedUrl: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL'
  },
  {
    id: '3',
    slug: 'design-system',
    title: 'Birth of a design system',
    description: 'Designing the foundations of Nebula -- Metomics first design system',
    duration: '10 MINUTES',
    thumbnailUrl: '/images/Background3.png',
    overlayImageUrl: '/images/Design3.png',
    figmaEmbedUrl: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL'
  }
];
