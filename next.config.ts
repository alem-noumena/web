import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, // Creates /page/index.html instead of /page.html
  images: {
    unoptimized: true, // Required for static export
  },
  // Uncomment the line below if deploying to a subpath like username.github.io/repo-name
  // basePath: '/repo-name',
};

export default nextConfig;
