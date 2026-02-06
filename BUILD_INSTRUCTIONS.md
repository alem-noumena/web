# Quick Build Instructions

## Build for Production

### Step 1: Install Dependencies
```bash
cd web
npm install
```

### Step 2: Build the Site
```bash
npm run build
```

This will create a `web/out/` directory with all static files ready for deployment.

### Step 3: Deploy

**Option A: Static Web Server (Apache/Nginx)**
- Copy all contents from `web/out/` to your web server's document root
- Example: `/var/www/html/` or your hosting provider's `public_html/` folder

**Option B: Node.js Server**
- Keep the `.next/` folder (created by build)
- Run `npm start` on your server
- Or use PM2: `pm2 start npm --name "noumena-website" -- start`

**Option C: Vercel (Easiest)**
```bash
npm install -g vercel
cd web
vercel
```

## What Gets Built

- **Static Export**: Creates `out/` folder with HTML, CSS, JS files
- **Node.js Build**: Creates `.next/` folder with optimized server build

## Important Notes

- All PDFs must be in `web/public/resources/` before building
- All images must be in `web/public/` folders
- The build process optimizes all assets automatically

## Testing Locally

After building, test the production build:
```bash
# For static export
npx serve out

# For Node.js server
npm start
```
