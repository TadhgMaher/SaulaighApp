# Saulaigh VR Portal — Quick Reference Card

## 📋 What You Have

Your VR portal is complete and ready. All code files are created:

- ✅ `index.html` — Main page structure
- ✅ `style.css` — VR-optimized styling
- ✅ `script.js` — Login + gallery logic
- ✅ `manifest.json` — App installation manifest

---

## 🔑 Login Credentials

| Field    | Value |
| -------- | ----- |
| Username | BayT  |
| Password | 2025  |

---

## 🖼️ Images You Need to Add

Place these in the `/images` folder:

1. **logo.png** (500×300px recommended)
   - Saulaigh branding logo
   - Use for splash and login screens
2. **logo-small.png** (32×32px)
   - Used as favicon
3. **francis-thumb.jpg** (280×280px)
   - Gallery thumbnail for "Francis — Rev 2" project
   - Starting Shapespark project

**App Icons** (in `/images/icons/`):

- icon-192.png (192×192px)
- icon-512.png (512×512px)
- icon-192-maskable.png (192×192px, 40px safe zone)
- icon-512-maskable.png (512×512px, 40px safe zone)
- screenshot-540.png (540×720px)
- screenshot-1080.png (1080×1440px)

---

## 🎨 Bayt Brand Colors (Already Applied)

| Element          | Color      | Hex     |
| ---------------- | ---------- | ------- |
| Headers, Buttons | Blue       | #2D4E6C |
| Accents, Borders | Light Blue | #D8E3EB |
| Background       | Light Gray | #f5f5f5 |

---

## 📱 User Flow

```
1. Splash Screen
   ↓ (Click "Enter Portal")
2. Login Screen
   ↓ (Enter BayT / 2025)
3. Gallery ("Bayt VR Projects")
   ↓ (Click project thumbnail)
4. Opens Shapespark in new tab
   ↓ (Click "Enter VR" in Shapespark)
5. Full 6DOF VR Experience
```

---

## ➕ Adding New Projects

Edit `script.js`. Add to the `projects` array:

```javascript
const projects = [
  {
    name: "Francis — Rev 2",
    thumb: "images/francis-thumb.jpg",
    url: "https://saulaighvr.shapespark.com/francismulcahy/",
  },
  // Add new projects here:
  {
    name: "New Project Name",
    thumb: "images/new-thumb.jpg",
    url: "https://saulaighvr.shapespark.com/newproject/",
  },
];
```

That's it! New projects appear instantly after page reload.

---

## 🌐 Deployment

1. **Create a web host** with HTTPS support (required for Quest app installation)
2. **Upload files** to your server:

   ```
   https://your-domain.com/bayt/
   ├── index.html
   ├── style.css
   ├── script.js
   ├── manifest.json
   └── images/
       ├── logo.png
       ├── logo-small.png
       ├── francis-thumb.jpg
       └── icons/
   ```

3. **Test in browser**:

   - Go to `https://your-domain.com/bayt/`
   - Login: BayT / 2025
   - Verify gallery displays
   - Click a project → opens Shapespark

4. **Test on Meta Quest**:
   - Put on headset
   - Open Browser app
   - Go to your URL
   - Install as app (optional)

---

## ✅ Deployment Checklist

- [ ] All HTML/CSS/JS files uploaded
- [ ] manifest.json uploaded
- [ ] Images added: logo.png, logo-small.png, francis-thumb.jpg
- [ ] App icons created in images/icons/
- [ ] Server uses HTTPS
- [ ] URL accessible from browser
- [ ] Login works (BayT / 2025)
- [ ] Gallery displays with thumbnails
- [ ] Clicking project opens Shapespark
- [ ] Tested on Meta Quest headset
- [ ] App installation works on Quest

---

## 📊 File Reference

### `index.html`

- Splash screen with "Enter Portal" button
- Login form
- Gallery grid
- Logout button

### `style.css`

- Full responsive design (mobile to desktop)
- VR pointer optimizations
- Bayt color scheme
- No hover effects (click-only)

### `script.js`

- Projects array (update with new VR experiences)
- Login validation (BayT / 2025)
- Screen navigation
- Gallery rendering

### `manifest.json`

- Web App manifest
- Defines app name, icons, display mode
- Enables "Install App" on Meta Quest

---

## 🔧 Quick Customization

### Change Portal Name

In `manifest.json`:

```json
"name": "Your Portal Name",
"short_name": "Portal Name"
```

### Change Colors

In `style.css`, find and replace:

- `#2D4E6C` → your primary color
- `#D8E3EB` → your accent color

### Change Login Credentials

In `script.js`:

```javascript
const VALID_USERNAME = "YourUsername";
const VALID_PASSWORD = "YourPassword";
```

---

## 🚀 Next Steps

1. ✅ **Create/add your images** to `/images` folder
2. ✅ **Upload to HTTPS web host**
3. ✅ **Test in browser**
4. ✅ **Test on Meta Quest**
5. ✅ **Install as app on headset**
6. ✅ **Add more VR projects** by editing `script.js` as needed

---

## 📞 Support

If you need to:

- Add multiple clients → create `/client2`, `/client3` folders (same structure)
- Modify styling → edit `style.css`
- Change authentication → modify `script.js` login validation
- Update projects → edit `projects` array in `script.js`

All changes take effect immediately on page reload.

---

**Your Saulaigh VR Portal is ready for deployment! 🎉**
