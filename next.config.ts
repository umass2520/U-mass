/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: '/your-repo-name', // Required if NOT a custom domain
  images: {
    unoptimized: true, // Next/image optimization isn't supported on static hosts
  },
};

module.exports = nextConfig;
