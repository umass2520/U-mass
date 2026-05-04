/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static export
  output: 'export', 
  
  // Disables the default image optimization API since there is no Node.js server
  images: {
    unoptimized: true,
  },

  // IMPORTANT: If your repository is named something like "my-next-app" 
  // and your URL will be "https://<username>.github.io/my-next-app/",
  // you MUST uncomment the line below and replace 'my-next-app' with your repo name.
  // basePath: '/my-next-app',
};

export default nextConfig;