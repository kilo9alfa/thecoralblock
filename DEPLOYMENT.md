# Deployment Guide

This guide explains how to deploy The Coral Block to Cloudflare Pages.

## Prerequisites

- GitHub account
- Cloudflare account
- This repository pushed to GitHub

## Initial Setup

### 1. Push to GitHub

First, create a new repository on GitHub and push your code:

```bash
# Add GitHub remote (replace with your repository URL)
git remote add origin git@github.com:yourusername/The Coral Block.git

# Push to GitHub
git push -u origin main
```

### 2. Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Pages** in the left sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Select your **The Coral Block** repository
6. Configure build settings:

#### Build Configuration

- **Production branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `public`
- **Root directory**: (leave blank)

#### Environment Variables

No environment variables required for basic setup.

### 3. Deploy

Click **Save and Deploy**. Cloudflare Pages will:

1. Clone your repository
2. Install dependencies (`npm install`)
3. Run build script (`npm run build`)
4. Deploy the `public/` directory

First deployment takes 2-5 minutes.

## Custom Domain Setup

### Option 1: Cloudflare Domain

If your domain is already on Cloudflare:

1. Go to your Pages project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `thecoralblock.com`)
5. Cloudflare automatically configures DNS

### Option 2: External Domain

If your domain is elsewhere:

1. Follow steps above to add custom domain
2. Cloudflare provides DNS records to add to your domain registrar
3. Add the CNAME record to your DNS provider
4. Wait for DNS propagation (up to 24 hours)

## Continuous Deployment

Cloudflare Pages automatically deploys when you:

1. Push commits to the `main` branch
2. Merge pull requests to `main`

Every push triggers a new build and deployment.

## Preview Deployments

Pull requests automatically get preview deployments at unique URLs like:
`https://abc123.lula-ai.pages.dev`

## Workflow

### Making Changes

1. **Edit content** in Obsidian (`content/` directory)
2. **Test locally**: `npm run build` (optional)
3. **Commit changes**: `git add . && git commit -m "Update content"`
4. **Push to GitHub**: `git push`
5. **Automatic deployment**: Cloudflare Pages rebuilds site (1-2 minutes)

### Adding New Pages

#### Documentation Page

```bash
# Create new markdown file
echo '---
title: New Page
description: Page description
draft: false
---

# New Page Content

Your content here...' > content/docs/new-page.md

# Build and commit
npm run build
git add content/docs/new-page.md
git commit -m "Add new documentation page"
git push
```

Page will be available at: `https://thecoralblock.com/docs/new-page.html`

#### Product Page

Same process, but in `content/products/` directory.

## Build Status

View build logs in Cloudflare Pages:

1. Go to your Pages project
2. Click **View build** on any deployment
3. See real-time build logs and errors

## Rollback

To rollback to a previous version:

1. Go to **Deployments** tab
2. Find the working deployment
3. Click **︙** → **Rollback to this deployment**

Or use git:

```bash
# Revert to previous commit
git revert HEAD
git push

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force
```

## Troubleshooting

### Build Fails

**Check build logs** in Cloudflare Pages dashboard.

Common issues:
- **Missing dependencies**: Ensure `package.json` is correct
- **Node version**: Cloudflare Pages uses Node.js 18+ (check `package.json`)
- **Build command**: Verify `npm run build` works locally

### 404 Errors

- Verify file exists in `public/` after build
- Check that markdown files have `draft: false`
- Ensure build completed successfully

### Styling Issues

- Check that `styles.css` is copied to `public/`
- Verify CSS file is referenced correctly in HTML
- Clear browser cache

## DNS Configuration

### Recommended DNS Records

```
Type    Name    Content                     Proxy
CNAME   @       lula-ai.pages.dev          Yes
CNAME   www     lula-ai.pages.dev          Yes
```

Enable Cloudflare proxy (orange cloud) for:
- DDoS protection
- SSL/TLS encryption
- Performance optimization

## SSL/TLS

Cloudflare automatically provides SSL certificates for:
- `*.pages.dev` domains (instant)
- Custom domains (up to 24 hours)

Configure SSL/TLS mode:
1. Go to **SSL/TLS** → **Overview**
2. Select **Full (strict)** for best security

## Performance

Cloudflare Pages includes:
- Global CDN (300+ locations)
- Automatic HTTP/2 and HTTP/3
- Brotli compression
- Image optimization (via Cloudflare)

## Analytics

Enable Cloudflare Web Analytics:
1. Go to **Analytics** → **Web Analytics**
2. Click **Enable Web Analytics**
3. Add tracking code to `index.html` (optional)

Or use Cloudflare Pages Analytics (built-in, no code required).

## Monitoring

Set up notifications:
1. Go to **Notifications**
2. Create **Pages Deploy Failed** alert
3. Add your email

## Cost

Cloudflare Pages Free Tier includes:
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month
- Shared build resources

More than sufficient for a documentation/product website.

## Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [Cloudflare Community](https://community.cloudflare.com)

---

**Next Steps:** Once deployed, update CLAUDE.md in the SaveMe repository with the live URLs for Privacy Policy and Terms of Service (required for Google OAuth verification).
