import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // incremental value allows you to adopt PPR (partial prerendering) for specific routes 
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
