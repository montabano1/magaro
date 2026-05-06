import type { NextConfig } from "next";

const config: NextConfig = {
  serverExternalPackages: ["next-mdx-remote"],
  images: {
    // All photography lives in /public/photos — no remote image dependencies.
  },
};

export default config;
