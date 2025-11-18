# The Coral Block - Session Status

**Last Updated:** November 18, 2025
**Repository:** thecoralblock
**Deployed:** Cloudflare Pages (auto-deploy from main branch)
**Live URL:** https://thecoralblock.com

## Current Status

### ✅ Completed in Latest Session (Nov 18, 2025)

1. **Custom Domain Setup**
   - Configured thecoralblock.com on Cloudflare Pages
   - SSL certificate provisioned
   - DNS records automatically configured

2. **Git Authentication Fixed**
   - Generated new SSH key for kilo9alfa GitHub account
   - Updated SSH config (~/.ssh/id_ed25519_kilo9alfa_new)
   - Verified push access working correctly

3. **Homepage Made Editable from Obsidian**
   - Created `content/index.md` with YAML frontmatter structure
   - Modified `build-site.js` to generate index.html from markdown
   - Homepage content (hero, products, about) now fully editable from Obsidian vault
   - Removed redundant "Our Products" heading

4. **Email Consolidation**
   - Replaced legal@thecoralblock.com → support@thecoralblock.com
   - Replaced privacy@thecoralblock.com → support@thecoralblock.com
   - Single contact email across entire website: **support@thecoralblock.com**

5. **Product Portfolio Expansion**
   - Added 3 new products with "Coming Soon" badges:
     - **Save My Contacts:** Contact management with LinkedIn integration
     - **Save My Blood Pressure:** Health tracking for blood pressure monitoring
     - **Save My Bookmarks:** AI-powered research tool for bookmark management
   - Each product includes 4 features with icons and professional descriptions
   - "Join Waitlist" buttons trigger pre-filled emails to support@thecoralblock.com

6. **Design Enhancements**
   - Added CSS styling for "Coming Soon" status badges (Living Coral accent)
   - Fixed About section heading alignment (h1 → h2)
   - Improved visual hierarchy and consistency

### 📁 Directory Structure

```
thecoralblock/
├── content/               # Obsidian vault - ALL content editable here
│   ├── .obsidian/        # 38 Obsidian plugins
│   ├── docs/             # Privacy, Terms of Service
│   ├── products/         # savemyattachments.md
│   └── index.md          # Homepage content (NEW)
├── public/               # Build output (gitignored)
├── build-site.js         # Build script (generates HTML from markdown)
├── support.html          # Static support page
├── styles.css            # Main stylesheet with dark theme + status badges
└── logo.png              # Main logo (740×690px PNG)
```

### 🎨 Design System

**Colors:**
- **Deep Teal (Dark Mode):** `#1a2f38`, `#244855`, `#2d5263`
- **Living Coral (Accent):** `#FF6F61`
- **Text (Dark):** `#e8f4f8`

**Typography:**
- Font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto
- H1: 2.5rem, H2: 2rem, H3: 1.5rem

**Components:**
- Status badges for "Coming Soon" products
- Dark theme toggle (defaults to dark)
- Theme persistence via localStorage

### 🚀 Deployment Workflow

1. **Edit content:** Markdown files in `content/` (index.md, docs/, products/)
2. **Commit:** `git add . && git commit -m "message"`
3. **Push:** `git push`
4. **Auto-deploy:** Cloudflare Pages runs `npm run build` and deploys to thecoralblock.com

**Build Command:** `npm run build`
**Output Directory:** `public/`
**Deploy Branch:** `main`

### 📝 Content Management

**Homepage (`content/index.md`):**
- YAML frontmatter with hero, products array, metadata
- Products support: name, description, status, features (icon + text), links
- Markdown body for About section

**Product Pages:**
- `content/products/savemyattachments.md` - Live product
- Coming soon products shown on homepage only (no dedicated pages yet)

**Legal Pages:**
- `content/docs/privacy-policy.md`
- `content/docs/terms-of-service.md`

### 📧 Contact & Waitlist

**Primary Contact:** support@thecoralblock.com

**Waitlist Functionality:**
- "Join Waitlist" buttons use mailto: links
- Pre-filled subject: "Join Waitlist - [Product Name]"
- Pre-filled body: "I want to join the waitlist for [Product Name]"

### 🔧 Development Commands

```bash
npm run build       # Build the site (markdown → HTML)
npm run clean       # Clean build artifacts
git status          # Check for changes
git push            # Deploy to production
```

### 🛠️ Tech Stack

- **Build:** Node.js + marked (markdown) + gray-matter (frontmatter)
- **Deployment:** Cloudflare Pages (auto-deploy from main)
- **Content:** Obsidian vault with 38 plugins
- **Styling:** CSS with CSS variables for theming

### 🌐 Live Products

1. **Save My Attachments** - Available now
   - Google Workspace Add-on
   - Gmail processing, Drive storage, Sheets logging, AI summaries
   - Product page: /products/savemyattachments.html

2. **Save My Contacts** - Coming Soon
   - Contact management with LinkedIn integration
   - Waitlist available

3. **Save My Blood Pressure** - Coming Soon
   - Health tracking for blood pressure
   - Waitlist available

4. **Save My Bookmarks** - Coming Soon
   - AI-powered research tool
   - Waitlist available

### ⚠️ Important Notes

1. **Public folder is gitignored** - Built HTML files not committed
2. **Homepage is generated** - Edit `content/index.md`, not `index.html`
3. **All content in Obsidian** - Use vault for editing
4. **SSH key:** `~/.ssh/id_ed25519_kilo9alfa_new` for kilo9alfa GitHub account
5. **Custom domain active:** thecoralblock.com (Cloudflare DNS)

### 📋 Potential Next Steps

- [ ] Add favicon (convert logo-icon.svg to .ico)
- [ ] Optimize logo.png for web (currently 740×690)
- [ ] Add meta tags for social sharing (Open Graph, Twitter Cards)
- [ ] Create dedicated product pages for coming soon items
- [ ] Set up waitlist management system (beyond email)
- [ ] Add analytics/tracking
- [ ] Consider blog/articles section

### 🐛 Known Issues

None currently.

---

**Session End:** Website live at thecoralblock.com with 4 products (1 available, 3 coming soon), homepage fully editable from Obsidian, all emails consolidated to support@thecoralblock.com, waitlist functionality active.
