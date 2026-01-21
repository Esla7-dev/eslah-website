# Open Graph Image Guide

## Required Image: `/public/og.png`

Create a social media sharing image with the following specifications:

### Dimensions
- **Width**: 1200px
- **Height**: 630px
- **Aspect Ratio**: 1.91:1

### Design Guidelines

#### English Version (`/public/og.png`)
- **Background**: Black or dark gradient matching brand
- **Text**: White or brand colors
- **Content**:
  - Logo or "ESLAH" wordmark
  - Tagline: "Architecture & Design Studio"
  - Optional: Key differentiator ("Coordinated Design Solutions")
  - Clean, professional aesthetic for B2B audience

#### Arabic Version (Optional: `/public/og-ar.png`)
- Same dimensions and aesthetic
- **Content**:
  - Logo or "إصلاح" Arabic wordmark
  - Tagline: "استوديو تصميم معماري"
  - RTL text layout
  - Personal, approachable aesthetic for private clients

### Tools for Creating

1. **Design Software**:
   - Figma (recommended)
   - Adobe Photoshop
   - Canva Pro

2. **Quick Online Tools**:
   - [og-playground.vercel.app](https://og-playground.vercel.app)
   - [bannerbear.com](https://www.bannerbear.com/tools/og-image-generator/)

3. **Templates**:
   - Search for "Open Graph template 1200x630"
   - Use Next.js OG Image Generation API

### Export Settings
- Format: PNG
- Quality: High
- File size: < 500KB (optimize if needed)
- Color profile: sRGB

### Where It's Used
- Facebook shares
- Twitter/X cards
- LinkedIn posts
- WhatsApp link previews
- Slack unfurls
- Discord embeds

### Testing
After creating, test with:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Current Usage in Code

The image is referenced in:
- `/src/app/layout.tsx` (root metadata)
- `/src/app/(en)/about/page.tsx`
- `/src/app/ar/about/page.tsx`
- All project detail pages (fallback if no project image)

## Optional: Favicon

Also consider adding `/public/favicon.ico`:
- 32×32px or 16×16px
- ICO format
- Brand logo or "E" monogram
- Will appear in browser tabs
