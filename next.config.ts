import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // whitelist utfs.io
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
