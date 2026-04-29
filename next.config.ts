import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      // Used as fallback only — primary photography lives in /public/photos
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default config;
