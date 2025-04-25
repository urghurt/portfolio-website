/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use output: 'export' for GitHub Pages, not for Vercel
  ...(process.env.DEPLOY_TARGET === 'github' ? {
    output: 'export',
    basePath: '/portfolio-website',
    assetPrefix: '/portfolio-website/',
    trailingSlash: true,
  } : {}),
  // Always unoptimize images for both deployments
  images: { unoptimized: true },
};

module.exports = nextConfig;
