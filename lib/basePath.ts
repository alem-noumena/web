// Base path from environment variable, defaults to empty for local dev
// Set NEXT_PUBLIC_BASE_PATH=/web in GitHub Actions for production build
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Helper to prefix paths with basePath
export function withBasePath(path: string): string {
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return path;
}
