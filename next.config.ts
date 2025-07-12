import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // permet de faire un export statique
  images: {
    unoptimized: true, // obligatoire pour que next/image fonctionne sans serveur
  },
  eslint: {
    ignoreDuringBuilds: true, // facultatif : pour ne pas bloquer le build
  },
};

export default nextConfig;