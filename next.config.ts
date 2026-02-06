import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, // Creates /page/index.html instead of /page.html
  basePath: basePath, // Set via NEXT_PUBLIC_BASE_PATH env var for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
