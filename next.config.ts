import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: "/img/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
