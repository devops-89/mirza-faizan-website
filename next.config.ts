import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "patentimages.storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
