# Domain Transfer Guide: Squarespace → Cloudflare

This guide walks you through transferring `thecoralblock.com` from Squarespace to Cloudflare.

**Timeline:** 5-7 days (mostly waiting for approval)
**Cost:** Cloudflare charges ~$9.15/year (at-cost domain registration, no markup)
**Downtime:** None - website stays live at `thecoralblock.pages.dev` during transfer

---

## Prerequisites

✅ Website live at https://thecoralblock.pages.dev
✅ Squarespace account access
✅ Cloudflare account (login via Apple account)
✅ Domain must be unlocked and at least 60 days old at current registrar

---

## Part 1: Prepare Domain in Squarespace

### Step 1.1: Log in to Squarespace

Go to: https://account.squarespace.com/domains/managed/thecoralblock.com

### Step 1.2: Unlock Domain

1. Find **Transfer Lock** or **Domain Lock** setting
2. Toggle to **Unlocked** or **Off**
3. This allows the domain to be transferred

**Note:** Some registrars call this "Domain Lock" or "Registrar Lock"

### Step 1.3: Get Authorization Code (EPP Code)

1. Look for **Authorization Code**, **EPP Code**, or **Transfer Code**
2. Click **Get Authorization Code** or **Reveal Code**
3. **Copy this code** - you'll need it for Cloudflare
4. Code looks like: `ABC123xyz!@#456`

**Important:** Save this code somewhere safe (Notes app, password manager)

### Step 1.4: Disable Auto-Renew (Optional)

1. Find **Auto-Renew** setting
2. Turn it **Off**
3. This prevents Squarespace from renewing during transfer

### Step 1.5: Verify Contact Email

1. Make sure domain contact email is accessible
2. Transfer approval emails will be sent here
3. Update if needed

---

## Part 2: Initiate Transfer in Cloudflare

### Step 2.1: Log in to Cloudflare

Go to: https://dash.cloudflare.com

**Login:** Use your Apple account (Sign in with Apple)

### Step 2.2: Navigate to Domain Registration

1. In left sidebar, click **Domain Registration**
2. Click **Transfer Domain**

### Step 2.3: Enter Domain Name

1. Enter: `thecoralblock.com`
2. Click **Search**
3. Cloudflare checks if domain is eligible for transfer

### Step 2.4: Enter Authorization Code

1. Paste the **Authorization Code** from Squarespace
2. Click **Continue**

### Step 2.5: Review Transfer Details

Cloudflare shows:
- Domain name: `thecoralblock.com`
- Transfer cost: ~$9.15 (includes 1 year extension)
- Contact information

**Important:** Transfer includes 1-year extension to your domain registration

### Step 2.6: Complete Payment

1. Add payment method (if not already on file)
2. Review charges
3. Click **Confirm Transfer**

### Step 2.7: Confirmation

Cloudflare displays:
- Transfer initiated
- Emails sent to domain contact
- Expected completion: 5-7 days

---

## Part 3: Approve Transfer

### Step 3.1: Check Email

You'll receive emails from:
1. **Squarespace** (losing registrar)
2. **Cloudflare** (gaining registrar)

### Step 3.2: Squarespace Transfer Approval

**Email subject:** "Domain Transfer Requested" or similar

**Action required:**
1. Open email from Squarespace
2. Click approval link
3. Confirm you want to transfer

**Options:**
- **Approve now** - Transfer starts immediately
- **Wait 5 days** - Transfer auto-approves after 5 days
- **Reject** - Cancels transfer

**Recommendation:** Approve immediately to speed up process

### Step 3.3: Cloudflare Confirmation

**Email subject:** "Confirm domain transfer" or similar

**Action required:**
1. Open email from Cloudflare
2. Click confirmation link
3. Verify transfer details

### Step 3.4: Wait for Transfer

**Timeline:**
- Approval: Immediate to 5 days
- Transfer processing: 1-2 days
- Total: Usually 3-7 days

**During this time:**
- ✅ Website stays live at `thecoralblock.pages.dev`
- ✅ Email continues working (if configured)
- ✅ No downtime

---

## Part 4: After Transfer Completes

### Step 4.1: Verify Transfer in Cloudflare

1. Go to **Domain Registration** in Cloudflare
2. You should see `thecoralblock.com` listed
3. Status: **Active**

### Step 4.2: Check DNS

1. Click on `thecoralblock.com`
2. Go to **DNS** tab
3. Cloudflare imports existing DNS records from Squarespace

**Review imported records:**
- Make sure important records are present
- Delete any Squarespace-specific records

### Step 4.3: Add Custom Domain to Cloudflare Pages

Now the easy part!

1. Go to **Workers & Pages**
2. Click your `thecoralblock` project
3. Go to **Custom domains** tab
4. Click **Set up a custom domain**
5. Enter: `thecoralblock.com`
6. Click **Continue**

**Cloudflare automatically:**
- ✅ Configures DNS records
- ✅ Provisions SSL certificate
- ✅ Sets up www redirect

**Result:** Site live at `https://thecoralblock.com` in ~5 minutes!

### Step 4.4: Test Custom Domain

1. Visit: https://thecoralblock.com
2. Verify: 🔒 Secure connection
3. Test all pages:
   - Homepage
   - /docs/privacy-policy.html
   - /docs/terms-of-service.html
   - /products/savemyattachments.html
   - /support.html

### Step 4.5: Set Up www Subdomain (Optional)

If you want `www.thecoralblock.com` to work:

1. In Custom domains, click **Add a custom domain**
2. Enter: `www.thecoralblock.com`
3. Cloudflare auto-configures DNS
4. Both work:
   - `https://thecoralblock.com`
   - `https://www.thecoralblock.com`

---

## Troubleshooting

### Transfer Pending Too Long

If transfer is pending for >7 days:
1. Check Squarespace for approval email
2. Log in to Squarespace domains
3. Look for pending transfer approval
4. Approve manually

### Transfer Failed

**Common reasons:**
- Domain locked at Squarespace
- Wrong authorization code
- Domain less than 60 days old
- Contact email not confirmed

**Solution:**
1. Check Squarespace domain status
2. Unlock domain
3. Get fresh authorization code
4. Try again

### DNS Not Working After Transfer

**Issue:** Site not loading at custom domain

**Solution:**
1. Go to Cloudflare DNS settings
2. Verify DNS records are correct
3. Wait up to 24 hours for propagation
4. Use https://dnschecker.org to verify

---

## What Happens to Squarespace?

After transfer completes:
- ✅ Domain removed from Squarespace
- ✅ Any Squarespace site will stop working (we're not using it anyway)
- ✅ Squarespace may email you about the transfer
- ✅ You can close Squarespace account if not using for anything else

**Billing:**
- Squarespace may refund unused domain time (varies)
- Check Squarespace billing for details

---

## Cost Comparison

### Squarespace Domain
- **Cost:** ~$20-30/year
- **DNS:** Included
- **Privacy:** May cost extra

### Cloudflare Domain
- **Cost:** ~$9.15/year (at-cost, no markup)
- **DNS:** Free, unlimited
- **Privacy:** Free WHOIS privacy
- **SSL:** Free, automatic
- **Cloudflare Pages:** Free

**Savings:** ~$10-20/year by moving to Cloudflare

---

## Timeline Summary

| Step | Time | Action Required |
|------|------|----------------|
| Unlock domain | 5 min | Yes - in Squarespace |
| Get auth code | 2 min | Yes - copy code |
| Initiate transfer | 5 min | Yes - in Cloudflare |
| Wait for emails | 1-24 hours | No - automatic |
| Approve transfer | 2 min | Yes - click email link |
| Transfer processing | 3-7 days | No - automatic |
| Add custom domain | 5 min | Yes - in Cloudflare Pages |
| **Total** | **3-7 days** | **Mostly automated** |

---

## Next Steps After Domain Transfer

Once `thecoralblock.com` is live on Cloudflare:

1. ✅ **Add iCloud email DNS records** in Cloudflare
2. ✅ **Configure iCloud+ custom domain**
3. ✅ **Create email addresses** (david@, support@, privacy@)
4. ✅ **Update Google OAuth consent screen** with live URLs
5. ✅ **Begin OAuth verification** for SaveMyAttachments

---

## Need Help?

- [Cloudflare Domain Transfer Docs](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/)
- [Cloudflare Support](https://support.cloudflare.com)

---

**Ready to start?** Begin with **Part 1** and unlock your domain in Squarespace!
