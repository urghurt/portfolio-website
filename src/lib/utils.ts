/**
 * Utility functions for the portfolio website
 */

/**
 * Get the correct asset path based on deployment environment
 * This helps handle different base paths between GitHub Pages and Vercel
 */
export function getAssetPath(path: string): string {
  // Check if we're on GitHub Pages by looking at the URL
  const isGitHubPages = typeof window !== 'undefined' && 
    window.location.hostname.includes('github.io');
  
  // If on GitHub Pages, prefix with /portfolio-website
  return isGitHubPages ? `/portfolio-website${path}` : path;
}
