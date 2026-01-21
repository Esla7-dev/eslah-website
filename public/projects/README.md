# Project Images Setup Guide

The ESLAH website is configured to display project images in galleries. Here's how to add them:

## Directory Structure

Place your project images in the `public/projects/` folder:

```
public/
  projects/
    villa-resort-1.jpg
    villa-resort-2.jpg
    villa-resort-3.jpg
    duplex-1.jpg
    duplex-2.jpg
    etc.
```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Dimensions**: Recommended 1400x900px or similar aspect ratio (16:10)
- **Size**: Optimize to < 500KB per image
- **Naming**: Use project slug + number (e.g., `villa-resort-1.jpg`)

## Update Project Data

Edit `src/data/projects.ts` and add image paths to the `images` array:

```typescript
{
  slug: "villa-resort",
  title: { en: "Private Villa Resort", ar: "منتجع فلل خاصة" },
  images: [
    "/projects/villa-resort-1.jpg",
    "/projects/villa-resort-2.jpg",
    "/projects/villa-resort-3.jpg",
    "/projects/villa-resort-4.jpg",
  ],
  // ... rest of project data
}
```

## Testing

After adding images:
1. Run `npm run dev`
2. Visit a project detail page (e.g., `/projects/villa-resort`)
3. Click on gallery images to open lightbox
4. Press Escape to close

## Temporary Placeholder

Until you add real images, the gallery will show "Gallery coming soon" message.

## Social Media Image (og.png)

Create `public/og.png` (1200x630px) for social sharing. This appears when sharing the site on:
- Facebook
- Twitter/X
- LinkedIn
- WhatsApp
- etc.
