import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Active l'exportation statique
  images: {
    unoptimized: true, // Obligatoire avec 'export'
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Retirer forceStatic, car non supporté
  experimental: {
    // Laisser vide ou inclure d'autres options valides si nécessaire
  }
};

export default nextConfig;
