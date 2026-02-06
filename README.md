# NOUMENA Digital Website

A modern, responsive website for NOUMENA Digital built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 16 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessible**: WCAG-compliant components and navigation
- **Performance**: Optimized for fast loading and smooth interactions

## Project Structure

```
web/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── platform/          # Platform overview
│   ├── products/          # Products (NPL, Cloud, Pulse)
│   ├── solutions/         # Solution patterns
│   ├── developers/        # Developer hub
│   ├── company/           # About, leadership, partners
│   ├── resources/         # Case studies, whitepapers
│   ├── contact/           # Contact form
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── globals.css        # Global styles and design tokens
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section component
│   ├── FeatureCard.tsx    # Feature card component
│   └── LogoStrip.tsx      # Logo showcase component
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
cd web
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Design System

The website uses a custom design system with:

- **Primary Color**: `#0066cc` (NOUMENA Blue)
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale using Tailwind
- **Components**: Reusable button styles, cards, and layouts

### Custom CSS Classes

- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.btn-outline` - Outline button style

## Pages

### Home (`/`)
- Hero section with primary CTAs
- Trusted by logos
- Problem statement
- Value pillars
- Use cases
- Testimonials

### Platform (`/platform`)
- Architecture overview
- How it works (4-step flow)
- Security & compliance features
- Deployment options

### Products (`/products`)
- NPL & Runtime
- Noumena Cloud
- NOUMENA Pulse

### Solutions (`/solutions`)
- Regulated stablecoins
- RWA tokenization
- Enterprise backends

### Developers (`/developers`)
- Quickstart guide
- Resource grid
- Technical decision-maker resources

### Company (`/company`)
- About NOUMENA
- Leadership
- Partners & ecosystem

### Resources (`/resources`)
- Case studies
- Whitepapers
- Additional resources

### Contact (`/contact`)
- Technical project form
- Alternative contact methods

## Customization

### Colors

Edit `app/globals.css` to modify the color scheme:

```css
:root {
  --noumena-primary: #0066cc;
  /* ... other colors */
}
```

### Content

All page content is in the respective `app/[page]/page.tsx` files. Update text, links, and structure as needed.

### Components

Reusable components are in `components/`. Modify or extend them to match your Figma designs more closely.

## Integration Points

- **Documentation**: Links to `documentation.noumenadigital.com`
- **Noumena Cloud**: Links to `portal.noumena.cloud`
- **GitHub**: Links to `github.com/NoumenaDigital`
- **Contact Form**: Currently logs to console; integrate with your CRM/backend

## Next Steps

1. **Connect Contact Form**: Integrate the contact form with your backend/CRM (e.g., HubSpot API)
2. **Add Images**: Replace placeholder logos with actual partner/client logos
3. **Analytics**: Add Google Analytics or similar tracking
4. **SEO**: Add Open Graph tags and structured data
5. **Performance**: Optimize images and add lazy loading
6. **Figma Alignment**: Fine-tune components to match your Figma designs exactly

## Deployment

The site can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

For Vercel:

```bash
npm install -g vercel
vercel
```

## License

© 2026 NOUMENA Digital AG. All rights reserved.
