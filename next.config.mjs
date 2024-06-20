/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cheerful-gazelle-371.convex.cloud'
        },
        {
          protocol: 'https',
          hostname: 'optimal-dory-31.convex.cloud'
        },
        {
          protocol: 'https',
          hostname: 'img.clerk.com'
        },
      ]
    }
  };
  
  export default nextConfig;
  