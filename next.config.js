/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // For GitHub Pages deployment
  ...(process.env.DEPLOY_TARGET === 'github' ? {
    basePath: '/portfolio-website',
    assetPrefix: '/portfolio-website/',
    trailingSlash: true,
  } : {}),
};

module.exports = nextConfig;
