import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, // Creates /page/index.html instead of /page.html
  basePath: '/web', // Required for GitHub Pages at username.github.io/web
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
