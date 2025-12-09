# GitHub Hosting Setup Guide

## Overview

This project is now configured to host on **GitHub Pages** with automatic deployment via GitHub Actions.

---

## Step 1: Create a GitHub Repository

1. Go to **github.com**
2. Click **"+"** (top right) → **"New repository"**
3. Name it: **Saulaigh**
4. Set to **Public** (required for free GitHub Pages)
5. Click **"Create repository"**
6. Copy the repository URL

---

## Step 2: Initialize Local Git Repository

Open Terminal/Command Prompt in the Saulaigh folder:

```bash
cd /path/to/Saulaigh

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Saulaigh VR Portal for Bayt"

# Rename branch to main (if needed)
git branch -M main

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/Saulaigh.git

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Step 3: Enable GitHub Pages

1. Go to your GitHub repository: `github.com/YOUR_USERNAME/Saulaigh`
2. Click **"Settings"** (top right menu)
3. Left sidebar → Click **"Pages"**
4. Under **"Build and deployment"**:
   - Source: Select **"Deploy from a branch"**
   - Branch: Select **"main"**
   - Folder: Select **"/(root)"**
5. Click **"Save"**

GitHub will start building. Wait ~1-2 minutes.

---

## Step 4: Find Your Live URL

Once deployed, your site will be available at:

```
https://YOUR_USERNAME.github.io/Saulaigh/bayt
```

You can also find this URL in:

- GitHub Settings → Pages (near the top, shows "Your site is live at...")

---

## Step 5: Add Your Images

1. In `/bayt/images/`, add:

   - `logo.png` (Saulaigh branding)
   - `logo-small.png` (favicon)
   - `francis-thumb.jpg` (project thumbnail)

2. In `/bayt/images/icons/`, add 6 files:

   - `icon-192.png`
   - `icon-192-maskable.png`
   - `icon-512.png`
   - `icon-512-maskable.png`
   - `screenshot-540.png`
   - `screenshot-1080.png`

3. Commit and push:

```bash
git add .
git commit -m "Add image assets"
git push
```

GitHub automatically redeploys. Wait ~1 minute.

---

## Step 6: Test on Meta Quest

1. Put on Meta Quest headset
2. Open **Browser** app
3. Navigate to: `https://YOUR_USERNAME.github.io/Saulaigh/bayt`
4. Login with: **BayT** / **2025**
5. Verify:
   - Gallery displays
   - Clicking "Francis — Rev 2" opens Shapespark
   - "Install App" button appears in browser menu

---

## Updating Content

### Add a New VR Project

Edit `/bayt/script.js`:

```javascript
const projects = [
  {
    name: "Francis — Rev 2",
    thumb: "images/francis-thumb.jpg",
    url: "https://saulaighvr.shapespark.com/francismulcahy/",
  },
  {
    name: "New Project",
    thumb: "images/new-thumb.jpg",
    url: "https://saulaighvr.shapespark.com/newproject/",
  },
];
```

Then push to GitHub:

```bash
git add .
git commit -m "Add new VR project"
git push
```

GitHub auto-deploys. Changes appear in ~1 minute.

---

### Change Login Credentials

Edit `/bayt/script.js`:

```javascript
const VALID_USERNAME = "BayT";
const VALID_PASSWORD = "2025";
```

Then:

```bash
git add .
git commit -m "Update credentials"
git push
```

---

### Change Colors/Branding

Edit `/bayt/style.css`:

```css
:root {
  --bayt-blue: #2d4e6c;
  --bayt-light: #d8e3eb;
  ...;
}
```

Then:

```bash
git add .
git commit -m "Update branding"
git push
```

---

## GitHub Actions Workflow

The `.github/workflows/deploy.yml` file automatically:

1. Detects when you push to `main`
2. Uploads the `/bayt` folder to GitHub Pages
3. Deploys your site live

**No manual build or deployment steps needed.**

---

## Troubleshooting

### Site doesn't appear at GitHub Pages URL

- ✅ Verify repository is **Public**
- ✅ Check GitHub Pages settings (Settings → Pages)
- ✅ Ensure branch is `main` and folder is `/(root)`
- ✅ Wait 2-3 minutes for initial deployment
- ✅ Check the **Actions** tab for deployment status

### Images not showing

- ✅ Verify image files are in `/bayt/images/`
- ✅ Check file names match exactly (case-sensitive)
- ✅ Commit and push: `git add . && git commit -m "Fix images" && git push`

### Login not working on Meta Quest

- ✅ Verify credentials in `/bayt/script.js` match your login
- ✅ Clear Quest Browser cache: Settings → Apps → Browser → Clear Cache
- ✅ Try reloading the page

### GitHub Actions deployment failed

- ✅ Check the **Actions** tab in GitHub for error messages
- ✅ Verify all files are committed: `git status`
- ✅ Manually retry: Go to Actions → Latest workflow → Rerun jobs

---

## GitHub Desktop (Alternative to Command Line)

If you prefer a GUI instead of terminal:

1. Install **GitHub Desktop** (desktop.github.com)
2. Click **File** → **Clone Repository**
3. Paste: `https://github.com/YOUR_USERNAME/Saulaigh.git`
4. Select local folder
5. Make changes to files
6. Click **Commit to main**
7. Click **Push origin**

---

## Advanced: Custom Domain (Optional)

If you want to use a custom domain instead of `github.io`:

1. Purchase domain (GoDaddy, Namecheap, etc.)
2. GitHub Settings → Pages → Custom domain
3. Enter your domain name
4. Update DNS settings with your domain provider

See: [GitHub Pages Custom Domain Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Support & Documentation

- **Main README:** See `/README.md` in the repository
- **Setup Guide:** See `/bayt/SETUP_GUIDE.md`
- **Quick Reference:** See `/bayt/QUICK_REFERENCE.md`
- **GitHub Pages Docs:** https://pages.github.com/

---

**Ready? Start with Step 1!**
