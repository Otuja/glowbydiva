import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Whitelist external image domains for Next.js Image component
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
