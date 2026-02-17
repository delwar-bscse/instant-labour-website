// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "76.13.5.2",
//         port: "5000",
//         pathname: "/images/**",
//       },
//       {
//         protocol: "http",
//         hostname: "**",
//         pathname: "/images/**",
//       },
//       {
//         protocol: "https",
//         hostname: "**",
//         pathname: "/images/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  /* config options here */
 
  images: {
    domains: [
      "i.ibb.co.com",
      "76.13.5.2",
    ],
  },
};
 
export default nextConfig;
 
 
