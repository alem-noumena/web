# Deployment Guide for NOUMENA Digital Website

This guide covers how to build and deploy the Next.js website to a web server.

## Option 1: Static Export (Recommended for Simple Web Servers)

If you want to deploy to a static web server (Apache, Nginx, or any static hosting), you can export the site as static HTML files.

### Step 1: Configure Static Export

Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
```

### Step 2: Build Static Files

```bash
cd web
npm run build
```

This creates a `web/out/` directory with all static HTML, CSS, and JavaScript files.

### Step 3: Deploy

Copy the contents of the `web/out/` directory to your web server's document root (e.g., `/var/www/html/` or your hosting provider's public folder).

**Note**: Static export doesn't support:
- Server-side features (API routes, server components with dynamic data)
- Image optimization (images are served as-is)
- Dynamic routes that require server-side rendering

## Option 2: Node.js Server Deployment

For full Next.js features, deploy as a Node.js application.

### Step 1: Build for Production

```bash
cd web
npm run build
```

This creates an optimized production build in `.next/` directory.

### Step 2: Start Production Server

```bash
npm start
```

The server will run on port 3000 by default. You can change the port:

```bash
PORT=8080 npm start
```

### Step 3: Deploy to Server

#### Using PM2 (Recommended for Production)

1. Install PM2 globally:
```bash
npm install -g pm2
```

2. Start the application:
```bash
cd web
pm2 start npm --name "noumena-website" -- start
```

3. Save PM2 configuration:
```bash
pm2 save
pm2 startup
```

#### Using systemd (Linux)

Create `/etc/systemd/system/noumena-website.service`:

```ini
[Unit]
Description=NOUMENA Digital Website
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/web
ExecStart=/usr/bin/npm start
Restart=always
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```

Then:
```bash
sudo systemctl daemon-reload
sudo systemctl enable noumena-website
sudo systemctl start noumena-website
```

### Step 4: Configure Reverse Proxy (Nginx)

If using Nginx as a reverse proxy, create `/etc/nginx/sites-available/noumena-website`:

```nginx
server {
    listen 80;
    server_name noumenadigital.com www.noumenadigital.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/noumena-website /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Option 3: Platform Deployment

### Vercel (Recommended - Zero Config)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd web
vercel
```

Follow the prompts. Vercel automatically detects Next.js and configures everything.

### Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
cd web
npm run build
netlify deploy --prod --dir=.next
```

Or connect your Git repository to Netlify for automatic deployments.

### Docker Deployment

Create `web/Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Update `next.config.ts` for standalone output:

```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
};
```

Build and run:
```bash
docker build -t noumena-website .
docker run -p 3000:3000 noumena-website
```

## Pre-Deployment Checklist

- [ ] All PDF files are in `web/public/resources/`
- [ ] All logo images are in `web/public/clients/` and `web/public/logo/`
- [ ] Environment variables are set (if needed)
- [ ] Contact form backend is configured (if applicable)
- [ ] Analytics tracking is set up (if applicable)
- [ ] Test the build locally: `npm run build && npm start`
- [ ] Verify all pages load correctly
- [ ] Check PDF downloads work
- [ ] Test on mobile devices
- [ ] Verify all external links work

## Build Output

After running `npm run build`, you'll have:

- **`.next/`** - Optimized production build (for Node.js deployment)
- **`out/`** - Static HTML files (if using static export)

## Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run lint`
- Verify all image paths are correct

### PDF Downloads Not Working
- Ensure PDFs are in `web/public/resources/` with exact filenames
- Check file paths match exactly (case-sensitive)
- Verify file permissions on the server

### Images Not Loading
- Check image paths in `public/` directory
- Verify file extensions match (case-sensitive)
- For static export, ensure `images.unoptimized: true` in config

## Production Environment Variables

If you need environment variables, create `.env.production`:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

Access in code with `process.env.NEXT_PUBLIC_API_URL`.

## Performance Optimization

- Images are automatically optimized by Next.js
- CSS is automatically minified
- JavaScript is code-split and optimized
- Static pages are pre-rendered at build time

## Support

For deployment issues, check:
- Next.js deployment docs: https://nextjs.org/docs/deployment
- Your hosting provider's documentation
