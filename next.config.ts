import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  /* config options here */
 
  images: {
    domains: [
      "i.ibb.co.com",
      "10.10.7.50",
      "76.13.5.2",
      "api.instantlabour.co.uk"
    ],
  },
};
 
export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "76.13.5.2",
//         port:"5000",
//         pathname: "/images/**",
//       },
//       {
//         protocol: "https",
//         hostname: "76.13.5.2",
//         port: "5000",
//         pathname: "/images/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
