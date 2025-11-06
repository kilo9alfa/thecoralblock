# Lula.ai

> Productivity and Automation Tools for Developers

This repository contains the source code for the [Lula.ai](https://lula.ai) website, showcasing productivity and automation tools.

## Overview

Lula.ai provides developer tools that leverage AI to automate repetitive tasks, organize information, and provide intelligent insights. Our first product is **SaveMyAttachments**, a Google Workspace Add-on for intelligent email processing.

## Repository Structure

```
Lula.ai/
├── content/               # Obsidian vault with markdown content
│   ├── docs/             # Documentation pages (Privacy, Terms, etc.)
│   └── products/         # Product pages
├── public/               # Build output (generated, not tracked)
├── build-site.js         # Build script to process markdown
├── index.html            # Homepage
├── support.html          # Support page
├── styles.css            # Main stylesheet
└── package.json          # Node.js dependencies
```

## Content Management

### Obsidian Workflow

Content is managed using Obsidian in the `content/` directory:

1. Edit markdown files in Obsidian (`content/docs/` or `content/products/`)
2. Commit changes to git
3. Push to GitHub
4. Cloudflare Pages automatically builds and deploys

### Markdown Frontmatter

Each markdown file should include frontmatter:

```yaml
---
title: Page Title
description: Page description for SEO
draft: false  # Set to true to exclude from build
---
```

## Local Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Clean build artifacts
npm run clean
```

### Build Process

The build script (`build-site.js`):

1. Reads markdown files from `content/docs/` and `content/products/`
2. Converts markdown to HTML using marked
3. Wraps content in page templates
4. Outputs HTML files to `public/` directory

## Deployment

### Cloudflare Pages

The site is deployed to Cloudflare Pages:

1. **Build Command**: `npm run build`
2. **Build Output Directory**: `public`
3. **Environment**: Node.js 18+

### Automatic Deployment

Cloudflare Pages automatically deploys when changes are pushed to the `main` branch.

## Adding Content

### New Documentation Page

1. Create `content/docs/your-page.md`
2. Add frontmatter (title, description, draft status)
3. Write content in markdown
4. Run `npm run build` to generate HTML
5. Commit and push

### New Product Page

1. Create `content/products/product-name.md`
2. Add frontmatter
3. Write product description, features, documentation links
4. Run `npm run build`
5. Commit and push

## Files Not Tracked in Git

The following are excluded from version control (see `.gitignore`):

- `node_modules/` - npm dependencies
- `public/` - build output
- `content/.obsidian/` - Obsidian workspace settings
- `content/private/` - private notes

## Contributing

This repository is maintained by the Lula.ai team. For questions or support, contact support@lula.ai.

## License

© 2025 Lula.ai. All rights reserved.

## Products

### SaveMyAttachments

A Google Workspace Add-on that automatically processes Gmail emails, saves attachments to Google Drive, and generates AI-powered summaries.

- [Product Page](/products/savemyattachments.html)
- [Google Workspace Marketplace](#) (coming soon)
- [Source Code](https://github.com/yourusername/SaveMe)

## Contact

- **Email**: support@lula.ai
- **Website**: https://lula.ai
- **Support**: https://lula.ai/support.html

---

Built with Markdown, Node.js, and deployed on Cloudflare Pages.
