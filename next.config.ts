/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This tells Next.js to look for files inside your repo sub-folder
  basePath: '', 
};

export default nextConfig;