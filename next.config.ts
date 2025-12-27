import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.10.7.50",
        port: "5002",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "asad5002.binarybards.online",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
