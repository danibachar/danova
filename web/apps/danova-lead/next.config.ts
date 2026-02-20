import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@danova/analytics"],
  output: "export",
};

export default nextConfig;
