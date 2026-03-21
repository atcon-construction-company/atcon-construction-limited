# 🏗️ ATCON Construction Ltd — Website

**Professional website for ATCON Construction Ltd, Nairobi, Kenya.**

Built with pure HTML, CSS, and JavaScript. No frameworks needed.

---

## 📁 Folder Structure

```
atcon-website/
│
├── index.html              ← Homepage
├── about.html              ← About ATCON
├── projects.html           ← Projects overview
├── contact.html            ← Contact form + map
│
├── gallery-flat.html       ← Flat roof gallery
├── gallery-pitched.html    ← Pitched roof gallery
├── gallery-hybrid.html     ← Hybrid roof gallery
├── gallery-hidden.html     ← Hidden roof gallery
├── gallery-apartments.html ← Apartments gallery
├── gallery-ongoing.html    ← Ongoing projects gallery
│
├── styles.css              ← All styles
├── script.js               ← All JavaScript
│
└── images/
    ├── hero-bg.jpeg
    ├── into-video.mp4
    ├── Flat_roof/
    │   ├── flat-roof.jpeg
    │   ├── flatroof1.jpg
    │   └── ... (all your flat roof images)
    ├── Pitched_roof/
    ├── Hybrid_roof/
    ├── Hidden_roof/
    ├── Apartments/
    └── ongoing projects/
```

---

## 🖼️ Adding / Updating Photos

Open `script.js` and find the `galleryDatabase` object at the top.
Add your filenames under the right category:

```js
Flat_roof: [
  "flat-roof.jpeg",
  "flatroof1.jpg",
  "your-new-photo.jpg",   // ← add here
],
```

Make sure the file is inside `images/Flat_roof/` with the **exact same name**.

---

## 🚀 How to Host for FREE (GitHub Pages)

This gives you a permanent link like: `https://yourusername.github.io/atcon-website/`

### Step 1 — Create a GitHub account
Go to https://github.com and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** button → "New repository"
2. Name it: `atcon-website`
3. Set to **Public**
4. Click "Create repository"

### Step 3 — Upload your files
1. Click **"uploading an existing file"** link on the new repo page
2. Drag and drop ALL your files AND your `images/` folder
3. Click **"Commit changes"**

### Step 4 — Enable GitHub Pages
1. Go to your repository → **Settings** (top menu)
2. Left sidebar → **Pages**
3. Under "Branch" → select `main` → click **Save**
4. Wait 1–2 minutes

### Step 5 — Your site is live! 🎉
Visit: `https://YOUR-USERNAME.github.io/atcon-website/`

Share this link with anyone in the world!

---

## 🔍 Getting Found on Google (SEO)

Your pages already include:
- Proper `<title>` tags
- `<meta name="description">` on every page
- Structured headings (H1, H2, H3)
- Fast-loading, mobile-friendly layout

After publishing, submit your site to Google:
1. Go to: https://search.google.com/search-console
2. Add your site URL
3. Verify ownership (Google will guide you)
4. Submit your sitemap if you create one

Google typically indexes new sites within **1–4 weeks**.

---

## 📱 Mobile

The site is fully responsive. It works on all screen sizes:
- Large desktop monitors
- Tablets
- Mobile phones (hamburger menu appears automatically)

---

## 📞 Contact Info in the Code

To update phone/email/social links, edit these files:
- `script.js` → the `footerHTML` variable (footer links)
- `contact.html` → the contact info section
- `index.html` → WhatsApp float button URL

---

## ✅ Checklist Before Going Live

- [ ] Replace `images/hero-bg.jpeg` with your own site photo
- [ ] Add your actual intro video as `images/into-video.mp4`
- [ ] Add all project photos to their folders
- [ ] Update `galleryDatabase` in `script.js` with all filenames
- [ ] Update phone numbers and email if they change
- [ ] Update social media links in `script.js` → `footerHTML`
