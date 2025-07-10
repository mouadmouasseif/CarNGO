import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Pour éviter les erreurs dynamiques lors de l'export statique
    forceStatic: true,
  }
};

export default nextConfig;
