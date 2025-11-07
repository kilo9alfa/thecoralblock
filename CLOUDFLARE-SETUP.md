# Cloudflare Pages Deployment Guide

This guide walks you through deploying The Coral Block website to Cloudflare Pages.

## Prerequisites

✅ GitHub repository created: https://github.com/kilo9alfa/thecoralblock
✅ Code pushed to `main` branch
✅ Cloudflare account (free tier is sufficient)

**Note:** Login to Cloudflare using your Apple account

---

## Step 1: Connect GitHub to Cloudflare Pages

### 1.1 Log in to Cloudflare

Go to: https://dash.cloudflare.com

**Login:** Use your Apple account (Sign in with Apple)

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

## Step 5: Custom Domain Setup

### 5.1 Current Approach

**Note:** For now, the website will be accessible at `thecoralblock.pages.dev`

The domain `thecoralblock.com` will be **transferred from Squarespace to Cloudflare** in a later step for simplicity (everything in one place).

### 5.2 Why Transfer to Cloudflare?

- **Simpler management**: Website + DNS in one dashboard
- **Automatic SSL**: Built-in certificate management
- **Better integration**: Cloudflare Pages works best with Cloudflare-managed domains
- **Free DNS**: No additional costs
- **Easy email setup**: Add iCloud DNS records directly in Cloudflare

### 5.3 Next Steps (After Transfer)

Once domain is transferred to Cloudflare:
1. DNS will be automatically managed by Cloudflare
2. Add custom domain in Cloudflare Pages (automatic DNS setup)
3. Add iCloud email DNS records in Cloudflare DNS
4. Everything works seamlessly

**For now:** Continue with `thecoralblock.pages.dev` URL

---

## Step 6: Verify Deployment

### 6.1 Test the Pages URL

Your website is now live at:
```
https://thecoralblock.pages.dev
```

### 6.2 Verify All Pages Work

Test these URLs:
- https://thecoralblock.pages.dev (homepage)
- https://thecoralblock.pages.dev/docs/privacy-policy.html
- https://thecoralblock.pages.dev/docs/terms-of-service.html
- https://thecoralblock.pages.dev/products/savemyattachments.html
- https://thecoralblock.pages.dev/support.html

### 6.3 Check SSL Certificate

All `.pages.dev` domains automatically have SSL:
- ✅ HTTPS enabled
- ✅ Secure connection
- ✅ Valid certificate

### 6.4 Custom Domain (Later)

Once you transfer `thecoralblock.com` to Cloudflare:
1. Add custom domain in Cloudflare Pages
2. Cloudflare automatically configures DNS
3. SSL certificate provisioned automatically
4. Site accessible at `https://thecoralblock.com`

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
