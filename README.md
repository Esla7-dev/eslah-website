# ESLAH Architecture & Design

A bilingual (English/Arabic) Next.js website showcasing architecture and design services with strategic dual-audience targeting:
- **English version**: Targets firms, developers, and corporate clients
- **Arabic version**: Targets individual and private clients

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Features

- ✅ Bilingual support (EN/AR) with RTL for Arabic
- ✅ Project portfolio with filtering and lightbox gallery
- ✅ Contact form with email integration (Resend)
- ✅ Mobile-responsive navigation
- ✅ SEO optimized with sitemap and metadata
- ✅ Static site generation for optimal performance

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy the example environment file and configure it:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:

```env
# Resend API Key (get from https://resend.com/api-keys)
RESEND_API_KEY=re_your_api_key_here

# Email address for contact form submissions
CONTACT_EMAIL=your@email.com

# Production site URL (for metadata and sitemap)
NEXT_PUBLIC_SITE_URL=https://eslah.com
```

### 3. Add Required Assets

Before deploying, ensure you have:

1. **Open Graph Image**: Create `/public/og.png` (1200×630px) for social media sharing
2. **Favicon**: Add `/public/favicon.ico` with your brand logo
3. **Project Images**: Add project images to `/public/assets/projects/`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for English or [http://localhost:3000/ar](http://localhost:3000/ar) for Arabic.

## Project Structure

```
src/
├── app/
│   ├── (en)/          # English pages (corporate/B2B)
│   ├── ar/            # Arabic pages (private clients)
│   ├── actions/       # Server actions (contact form)
│   ├── layout.tsx     # Root layout with metadata
│   ├── sitemap.ts     # Dynamic sitemap generation
│   └── robots.ts      # SEO crawler directives
├── components/        # Reusable components
└── data/
    └── projects.ts    # Project data with bilingual support
```

## Adding Projects

Edit `src/data/projects.ts` to add new projects:

```typescript
{
  slug: "project-name",
  title: "English Title",
  titleAr: "العنوان العربي",
  narrative: "English description...",
  narrativeAr: "الوصف العربي...",
  projectType: "Villa",
  clientType: "Private",
  location: "Riyadh",
  locationAr: "الرياض",
  images: ["/assets/projects/image1.jpg"],
  // ... other fields
}
```

## Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery:

1. Sign up at [resend.com](https://resend.com)
2. Add and verify your sending domain
3. Generate an API key
4. Add the key to `.env.local` as `RESEND_API_KEY`
5. Test the form on both English and Arabic versions

## Building for Production

```bash
npm run build
npm run start
```

## Tech Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **React**: 19.0.0 with React Compiler
- **Styling**: Tailwind CSS 4.0.2
- **TypeScript**: 5.x
- **Email**: Resend
- **Validation**: Zod

## SEO Features

- Dynamic sitemap generation for all pages and projects
- Per-page metadata with Open Graph and Twitter Cards
- Bilingual hreflang tags for proper language targeting
- robots.txt configuration
- Optimized for Google's bilingual indexing

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Resend Documentation](https://resend.com/docs)

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import repository on Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
