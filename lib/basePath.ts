// Base path for GitHub Pages deployment
// Change this to '' for root domain deployment or '/repo-name' for subpath
export const basePath = process.env.NODE_ENV === 'production' ? '/web' : '';

// Helper to prefix paths with basePath
export function withBasePath(path: string): string {
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return path;
}
