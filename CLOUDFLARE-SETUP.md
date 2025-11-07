# Cloudflare Pages Deployment Guide

This guide walks you through deploying The Coral Block website to Cloudflare Pages.

## Prerequisites

✅ GitHub repository created: https://github.com/kilo9alfa/thecoralblock
✅ Code pushed to `main` branch
✅ Cloudflare account (free tier is sufficient)

---

## Step 1: Connect GitHub to Cloudflare Pages

### 1.1 Log in to Cloudflare

Go to: https://dash.cloudflare.com

### 1.2 Navigate to Pages

1. In the left sidebar, click **Workers & Pages**
2. Click **Create application**
3. Select **Pages** tab
4. Click **Connect to Git**

### 1.3 Authorize GitHub

1. Click **Connect GitHub**
2. If first time: Authorize Cloudflare to access your GitHub account
3. Select **kilo9alfa** organization/account
4. Choose repositories:
   - **Option A**: Select only `thecoralblock` repository
   - **Option B**: Allow all repositories (you can change this later)
5. Click **Install & Authorize**

---

## Step 2: Configure Build Settings

### 2.1 Select Repository

1. From the list, click **thecoralblock**

### 2.2 Set Up Build Configuration

**Project name:** `thecoralblock` (or leave as default)

**Production branch:** `main`

**Framework preset:** None (select "None" from dropdown)

**Build settings:**
```
Build command:      npm run build
Build output directory:   public
Root directory:     (leave blank)
```

**Environment variables:** (none needed for now)

### 2.3 Save and Deploy

1. Click **Save and Deploy**
2. Cloudflare begins first deployment
3. Watch build logs in real-time

**First deployment takes:** 2-3 minutes

---

## Step 3: Verify Deployment

### 3.1 Wait for Build to Complete

You'll see:
- ✅ **Initializing build environment**
- ✅ **Cloning repository**
- ✅ **Building application**
- ✅ **Deploying to Cloudflare's global network**

### 3.2 Get Your Pages URL

Once deployed, Cloudflare provides a URL like:
```
https://thecoralblock.pages.dev
```

### 3.3 Test the Website

1. Click **Visit site** button
2. Verify pages load correctly:
   - Homepage (index.html)
   - /docs/privacy-policy.html
   - /docs/terms-of-service.html
   - /products/savemyattachments.html
   - /support.html

---

## Step 4: Add Custom Domain (thecoralblock.com)

### 4.1 In Cloudflare Pages

1. Go to your **thecoralblock** project in Cloudflare Pages
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter: `thecoralblock.com`
5. Click **Continue**

### 4.2 Cloudflare Provides DNS Records

Cloudflare will show you the DNS records needed:

**For Root Domain (@):**
```
Type: CNAME
Name: @
Target: thecoralblock.pages.dev
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Target: thecoralblock.pages.dev
```

**Keep this tab open** - you'll need these records for Squarespace.

---

## Step 5: Configure DNS in Squarespace

### 5.1 Log in to Squarespace

Go to: https://account.squarespace.com/domains/managed/thecoralblock.com

### 5.2 Access DNS Settings

1. Click **DNS Settings** or **Advanced DNS Settings**
2. Look for **Custom Records** section

### 5.3 Add Cloudflare CNAME Records

**Important:** Squarespace may not allow CNAME on root (@). If so:

**Option A: Use A Records (if Cloudflare provides them)**
1. In Cloudflare, look for fallback A records (IP addresses)
2. Add those to Squarespace

**Option B: Use www subdomain only**
1. Add CNAME for `www` → `thecoralblock.pages.dev`
2. Set up redirect from root to www in Squarespace

### 5.4 Typical DNS Configuration

```
# For Website (Cloudflare Pages)
Type: CNAME    Name: www    Value: thecoralblock.pages.dev
Type: A        Name: @      Value: [Cloudflare IP - see Pages dashboard]

# For Email (iCloud - will add later)
# (iCloud DNS records will be added in next step)
```

### 5.5 Save Changes

Click **Save** or **Apply Changes** in Squarespace

**DNS Propagation:** Can take up to 24 hours (usually 1-2 hours)

---

## Step 6: Verify Custom Domain

### 6.1 Check DNS Propagation

Use a DNS checker tool:
- https://dnschecker.org
- Enter: `thecoralblock.com`
- Check CNAME records globally

### 6.2 Wait for SSL Certificate

Cloudflare automatically provisions SSL certificate for:
- `thecoralblock.com`
- `www.thecoralblock.com`

**Time:** Usually 5-15 minutes after DNS propagates

### 6.3 Test HTTPS

Once SSL is ready:
1. Visit: https://thecoralblock.com
2. Verify: 🔒 Secure connection
3. Test all pages

---

## Step 7: Configure SSL/TLS Settings (Optional)

### 7.1 In Cloudflare Dashboard

1. Go to **SSL/TLS** section
2. Select **Full (strict)** mode (recommended)

This ensures:
- End-to-end encryption
- Automatic HTTPS redirects
- Modern TLS protocols

---

## Continuous Deployment

### Automatic Deployments

Every time you push to `main` branch:
1. Cloudflare detects the push
2. Automatically runs `npm run build`
3. Deploys new version to global network
4. Takes 1-2 minutes

### Preview Deployments

Pull requests automatically get preview URLs:
```
https://abc123.thecoralblock.pages.dev
```

### Rollback

To rollback to previous version:
1. Go to **Deployments** tab
2. Find working deployment
3. Click **︙** → **Rollback to this deployment**

---

## Build Logs and Debugging

### View Build Logs

1. Go to **Deployments** tab
2. Click any deployment
3. View real-time build logs

### Common Issues

**Build fails:**
- Check `package.json` has correct dependencies
- Verify `npm run build` works locally
- Check build logs for specific errors

**404 errors:**
- Verify files exist in `public/` directory
- Check file paths are correct
- Ensure markdown files have `draft: false`

**Styles missing:**
- Verify `styles.css` is in `public/`
- Check CSS paths in HTML files

---

## Next Steps After Deployment

Once website is live at thecoralblock.com:

1. ✅ **Add iCloud Email DNS Records** (separate guide)
2. ✅ **Update Google OAuth consent screen** with live URLs:
   - Privacy Policy: `https://thecoralblock.com/docs/privacy-policy.html`
   - Terms of Service: `https://thecoralblock.com/docs/terms-of-service.html`
3. ✅ **Submit OAuth verification request**

---

## Cost

Cloudflare Pages **Free Tier** includes:
- ✅ Unlimited requests
- ✅ Unlimited bandwidth
- ✅ 500 builds per month
- ✅ SSL certificates (automatic)
- ✅ Global CDN (300+ locations)
- ✅ DDoS protection

**More than sufficient for a documentation/product website.**

---

## Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages)
- [Cloudflare Community](https://community.cloudflare.com)

---

**Ready to deploy?** Follow these steps and you'll have your website live at https://thecoralblock.com in about 30 minutes (plus DNS propagation time).
