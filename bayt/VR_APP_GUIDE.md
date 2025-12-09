# VR App Installation Guide for Meta Quest

This guide explains how to install Saulaigh VR Portal as a standalone app on your Meta Quest headset.

---

## What Makes This a "Real App"?

✅ **Standalone Display** — No browser UI, full-screen immersive experience  
✅ **App Tile** — Appears in your Quest Apps list like native apps  
✅ **Quick Launch** — One-tap access from home screen  
✅ **Portrait-Aware** — Automatically locks to landscape for VR  
✅ **Offline-Ready** — Runs entirely offline (after initial load)  
✅ **Progressive Web App (PWA)** — Uses modern web standards

---

## Step 1: Deploy to HTTPS Hosting

GitHub Pages hosting (HTTPS required):

1. Your site should be live at:
   ```
   https://tadhgmaher.github.io/SaulaighApp/bayt
   ```

2. Verify it's accessible from a computer browser first

---

## Step 2: Access on Meta Quest Headset

### From Browser

1. **Put on Meta Quest headset**
2. **Open "Browser"** (Chromium-based)
3. **Paste URL:** `https://tadhgmaher.github.io/SaulaighApp/bayt`
4. **Press Enter**

The page loads in VR.

---

## Step 3: Install as Standalone App

### Installation Flow:

1. **Page loads** — You see splash screen with Saulaigh branding
2. **Browser menu** → Look for "Install App" or three-dot menu
3. **Tap "Install App"** or **"Add to Home"**
4. **Confirm installation**

The app is now saved to your Quest.

### After Installation:

- **App tile appears** in your Meta Quest Apps section
- **Opens full-screen** with no browser chrome
- **Launches directly** into Saulaigh splash screen
- **Behaves like a native app** (but is a web app)

---

## Step 4: Launch the App

### From Your Quest Home:

1. **Point at Apps** section
2. **Scroll to find "Saulaigh"** or **"Saulaigh VR Portal"**
3. **Tap to launch**
4. **Splash screen → Login → Gallery**

---

## Login & Gallery

- **Username:** BayT
- **Password:** 2025
- **Click projects** to open Shapespark walkthroughs

---

## Technical Details (What Happens)

### Why It Works as an App

The `manifest.json` file tells Meta Quest how to install it:

```json
{
  "display": "standalone",      // No browser UI
  "orientation": "landscape",   // Lock to landscape
  "theme_color": "#0A1422",     // Dark VR theme
  "start_url": "./index.html"   // Launch page
}
```

### Web App vs Native App

| Feature | Web App | Native App |
|---------|--------|-----------|
| Installation | One tap | App Store |
| Size | ~100KB | Several MB |
| Update | Automatic | Manual |
| Offline | Cached only | Full |
| Full-screen | Yes | Yes |
| Performance | Excellent | Best |

**For VR experiences, Web Apps are perfect** — they launch fast and update instantly.

---

## Troubleshooting

### "Install App" Button Doesn't Appear

- ✅ Ensure site is **HTTPS** (GitHub Pages handles this)
- ✅ Reload the page (Ctrl+R or Cmd+R)
- ✅ Try a different browser (Firefox Reality, Edge)
- ✅ Restart Meta Quest headset

### App Won't Launch

- ✅ Go back to browser, navigate to URL again
- ✅ Clear browser data: Browser Settings → Clear Cache
- ✅ Try installing again

### Shows Browser UI After Installation

- ✅ This is normal on some Quest browsers
- ✅ Full-screen mode activates when you log in
- ✅ Tap the project to enter the VR walkthrough

### Can't Connect to Shapespark

- ✅ Ensure Quest is connected to internet
- ✅ Check Shapespark URL is correct in `script.js`
- ✅ Shapespark link must be publicly accessible

---

## Testing Checklist

Before sharing with others:

✅ **Splash screen** displays correctly  
✅ **Login works** with BayT / 2025  
✅ **Gallery displays** all projects  
✅ **Clicking project** opens Shapespark  
✅ **"Install App" appears** in browser menu  
✅ **App installs** and appears in Apps list  
✅ **Clicking app tile** launches full-screen  
✅ **Pointer interaction** works smoothly  

---

## Adding More VR Projects

Edit `/bayt/script.js`:

```javascript
const projects = [
    {
        name: "Francis — Rev 2",
        thumb: "images/francis-thumb.jpg",
        url: "https://saulaighvr.shapespark.com/francismulcahy/"
    },
    {
        name: "New Project",
        thumb: "images/new-thumb.jpg",
        url: "https://saulaighvr.shapespark.com/newproject/"
    }
];
```

Commit and push. GitHub Pages auto-deploys. Changes appear instantly on the headset (after refresh).

---

## Advanced: Custom Domain

If you use a custom domain instead of `github.io`:

1. **Buy domain** (GoDaddy, Namecheap, etc.)
2. **Point DNS** to GitHub Pages IP addresses
3. **Enable HTTPS** (GitHub Pages does this automatically)
4. **URL becomes:** `https://yourdomain.com/bayt`

See: [GitHub Pages Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Performance Tips for VR

✅ **Optimize images** — Keep thumbnails under 150KB each  
✅ **Lazy loading** — Images load only when needed  
✅ **Minimal animations** — Smooth 60fps is essential  
✅ **Large buttons** — VR pointers need bigger targets  
✅ **No hover effects** — VR headsets don't have hover  

All of these are already implemented!

---

## What's Next?

1. ✅ Deploy to GitHub Pages (already done)
2. ✅ Test on Meta Quest Browser
3. ✅ Install as standalone app
4. ✅ Add more VR projects to `script.js`
5. ✅ Share the URL with your team

---

## Support

- **Meta Quest Help:** https://support.meta.com/
- **GitHub Pages Docs:** https://pages.github.com/
- **PWA Documentation:** https://web.dev/progressive-web-apps/
- **Your Site:** Check `GITHUB_SETUP.md` for deployment details

---

**Ready? Open your Meta Quest Browser and navigate to your GitHub Pages URL!**
