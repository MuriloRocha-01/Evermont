/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/evermont',
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;