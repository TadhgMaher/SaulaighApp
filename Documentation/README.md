# Saulaigh VR Portal

A lightweight VR portal for Meta Quest headsets. Currently hosting the **Bayt VR Projects** gallery.

## 📱 Live Demo

**GitHub Pages URL:** `https://your-username.github.io/Saulaigh/bayt`

Replace `your-username` with your GitHub username once deployed.

## 🎯 What It Does

- Splash screen with Saulaigh branding
- Secure login system (BayT / 2025)
- VR project gallery with Shapespark integration
- Installable as a standalone app on Meta Quest
- No backend required — runs entirely in the browser

## 📂 Project Structure

```
Saulaigh/
├── bayt/                      # Bayt VR Portal
│   ├── index.html             # Main page
│   ├── style.css              # Styling
│   ├── script.js              # Application logic
│   ├── manifest.json          # Web App manifest
│   ├── images/
│   │   ├── logo.png           # Saulaigh logo
│   │   ├── logo-small.png     # Favicon
│   │   ├── francis-thumb.jpg  # Project thumbnail
│   │   └── icons/             # App icons
│   └── documentation files    # Setup guides
├── public/                    # (Optional) Static assets
└── .github/workflows/         # GitHub Pages deployment
```

## 🚀 Quick Start

### 1. Clone & Setup

```bash
git clone https://github.com/your-username/Saulaigh.git
cd Saulaigh
```

### 2. Add Images

Place these in `/bayt/images/`:

- `logo.png` (~500x300px)
- `logo-small.png` (32x32px, favicon)
- `francis-thumb.jpg` (280x280px)

Create app icons in `/bayt/images/icons/`:

- `icon-192.png`, `icon-192-maskable.png`
- `icon-512.png`, `icon-512-maskable.png`
- `screenshot-540.png`, `screenshot-1080.png`

### 3. Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Select `main` branch, `/(root)` folder
4. Save

Your site will be live at: `https://your-username.github.io/Saulaigh/bayt`

### 4. Test on Meta Quest

1. Open Meta Quest Browser
2. Navigate to your GitHub Pages URL
3. Login with: **BayT** / **2025**
4. Click thumbnails to open VR experiences

## 📝 Adding New VR Projects

Edit `/bayt/script.js` and add to the `projects` array:

```javascript
projects.push({
  name: "New Bayt Project",
  thumb: "images/new-thumb.jpg",
  url: "https://saulaighvr.shapespark.com/newproject/",
});
```

The gallery updates instantly — no rebuild needed.

## ⚙️ Customization

### Change Login Credentials

Edit `/bayt/script.js`:

```javascript
const VALID_USERNAME = "BayT";
const VALID_PASSWORD = "2025";
```

### Change Colors

Edit `/bayt/style.css`:

```css
--bayt-blue: #2d4e6c;
--bayt-light: #d8e3eb;
```

### Change App Name

Edit `/bayt/manifest.json`:

```json
"name": "Saulaigh VR Portal",
"short_name": "VR Portal"
```

## 📚 Documentation

- **SETUP_GUIDE.md** — Step-by-step setup instructions
- **QUICK_REFERENCE.md** — At-a-glance commands and links
- **IMPLEMENTATION.md** — Technical details
- **COMPONENTS_REFERENCE.md** — Feature breakdown

## 🔐 Security Note

This portal uses simple client-side validation. For a production application requiring real security, implement server-side authentication and encrypted credentials.

## 📦 GitHub Pages Deployment

The repository is configured with GitHub Actions for automatic deployment:

- Push to `main` branch triggers automatic deployment
- No manual build steps required
- Files in `/bayt` folder serve as the website root

## 🎮 Meta Quest Installation

Once deployed to GitHub Pages:

1. Open the page in Meta Quest Browser
2. Tap the menu button
3. Select "Install App"
4. The portal appears as a standalone app tile

## 📞 Support

For issues or updates:

1. Check the documentation files in `/bayt/`
2. Review `START_HERE.txt` for quick troubleshooting
3. Ensure all image files are present in `/bayt/images/`

---

**Current Version:** 1.0  
**Last Updated:** December 2025  
**Status:** Ready for GitHub Pages deployment
