import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@danova/analytics"],
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
