# The Coral Block - Session Status

**Last Updated:** November 7, 2025
**Repository:** thecoralblock
**Deployed:** Cloudflare Pages (auto-deploy from main branch)

## Current Status

### ✅ Completed in This Session

1. **Dark Theme Implementation**
   - Deep Teal (PANTONE 19-4914 TCX) color scheme: `#1a2f38`, `#244855`, `#2d5263`
   - Living Coral (PANTONE 16-1546) accents: `#FF6F61`
   - Theme toggle button (defaults to dark mode)
   - Smooth transitions between light/dark themes
   - LocalStorage persistence for theme preference

2. **Logo Integration**
   - Using PNG logo from reference image (logo.png)
   - 740×690px with transparent background
   - Displays in header at 45px height
   - Two isometric blocks (white outline + coral filled) connected by chain links
   - Works on all backgrounds (white, dark, teal, patterned)

3. **Content Improvements**
   - Enhanced typography for content pages
   - Better heading hierarchy (H1: 2.5rem, H2: 2rem, H3: 1.35rem)
   - Improved readability with larger font sizes and line spacing
   - SaveMyAttachments product page updated with new problem statement

4. **Website Structure**
   - Homepage: index.html (static)
   - Support page: support.html (static)
   - Content pages: Generated from markdown in `content/` directory
   - Build system: Node.js + marked (markdown to HTML)

### 📁 Directory Structure

```
thecoralblock/
├── content/               # Obsidian vault with markdown content
│   ├── .obsidian/        # 38 Obsidian plugins (copied from Dailythoughts.life)
│   ├── docs/             # Documentation pages (Privacy, Terms)
│   └── products/         # Product pages (SaveMyAttachments.md)
├── public/               # Build output (gitignored, auto-built by Cloudflare)
├── build-site.js         # Build script (processes markdown → HTML)
├── index.html            # Homepage (static)
├── support.html          # Support page (static)
├── styles.css            # Main stylesheet with dark theme
├── logo.png              # Main logo (740×690px PNG)
└── logo-*.svg            # Various SVG logo experiments
```

### 🎨 Design System

**Colors:**
- **Deep Teal (Dark Mode BG):** `#1a2f38`
- **Mid Teal (Cards):** `#244855`
- **Light Teal (Borders):** `#2d5263`
- **Living Coral (Accent):** `#FF6F61`
- **Text (Dark):** `#e8f4f8`
- **Text Secondary:** `#b0d4e1`

**Typography:**
- Font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto
- Body: 1.1rem with 1.8 line-height
- H1: 2.5rem
- H2: 2rem
- H3: 1.35rem

### 🚀 Deployment Workflow

1. **Edit content:** Markdown files in `content/docs/` or `content/products/`
2. **Commit:** `git add . && git commit -m "message"`
3. **Push:** `git push`
4. **Auto-deploy:** Cloudflare Pages runs `npm run build` and deploys

**Build Command:** `npm run build`
**Output Directory:** `public/`
**Deploy Branch:** `main`

### 📝 Content Management

**Markdown Files:**
- `content/products/SaveMyAttachments.md` - Product page
- `content/docs/privacy-policy.md` - Privacy policy
- `content/docs/terms-of-service.md` - Terms of service

**Frontmatter Format:**
```yaml
---
title: Page Title
description: SEO description
draft: false  # Set to true to exclude from build
---
```

### 🔧 Development Commands

```bash
npm run build       # Build the site (markdown → HTML)
npm run clean       # Clean build artifacts
git status          # Check for changes
git push            # Deploy to production
```

### 📦 Dependencies

- `marked` - Markdown to HTML conversion
- `gray-matter` - Frontmatter parsing
- Node.js 18+

### 🌐 Live Site

**URL:** thecoralblock.pages.dev (or custom domain)
**Status:** All changes pushed and deployed
**Last Deploy:** Logo PNG integration + content updates

### 🔄 Recent Changes Deployed

1. Dark theme with Deep Teal and Living Coral
2. PNG logo integration (from reference image)
3. Content page styling improvements
4. SaveMyAttachments product page updates (title + problem statement)

### ⚠️ Important Notes

1. **Public folder is gitignored** - Built HTML files are not committed
2. **Cloudflare builds automatically** - No need to commit `public/` folder
3. **Markdown changes require push** - Edit → Commit → Push → Auto-deploy
4. **Theme defaults to dark** - Can be toggled, preference saved in localStorage
5. **Logo is PNG** - All SVG experiments in repo but PNG is used in production
6. **Obsidian plugins copied** - 38 plugins from Dailythoughts.life in `content/.obsidian/`

### 📋 Potential Next Steps

- [ ] Add favicon (can use logo-icon.svg converted to .ico)
- [ ] Optimize logo.png for web (currently 740×690, could be resized)
- [ ] Add more product pages as content grows
- [ ] Consider adding a blog/articles section
- [ ] Add meta tags for social sharing (Open Graph, Twitter Cards)
- [ ] Set up custom domain if not already done

### 🐛 Known Issues

None currently.

---

**Session End:** Website fully functional with dark theme, logo, and updated content deployed to production.
