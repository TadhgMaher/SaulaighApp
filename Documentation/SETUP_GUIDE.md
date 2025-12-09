# Saulaigh VR Portal for Bayt — Complete Setup Guide

## Project Overview

A lightweight, VR-friendly web portal for the Meta Quest headset that displays Bayt's VR walkthroughs. The portal requires login (BayT / 2025) and presents a clean gallery of VR projects.

---

## Project Structure

```
/bayt/
├── index.html              # Main HTML file
├── style.css               # Styling (VR-optimized)
├── script.js               # JavaScript logic
├── manifest.json           # PWA manifest (app installation)
├── images/
│   ├── logo.png           # Main Saulaigh logo (~500x300px recommended)
│   ├── logo-small.png     # Favicon size (~32x32px)
│   ├── francis-thumb.jpg  # Project thumbnail (square, ~280px)
│   └── icons/
│       ├── icon-192.png           # 192x192px app icon
│       ├── icon-512.png           # 512x512px app icon
│       ├── icon-192-maskable.png  # 192x192px maskable icon
│       ├── icon-512-maskable.png  # 512x512px maskable icon
│       ├── screenshot-540.png     # 540x720px screenshot
│       └── screenshot-1080.png    # 1080x1440px screenshot
```

---

## File Descriptions

### `index.html`

- Splash screen with Saulaigh branding and "Enter Portal" button
- Login form (username/password inputs)
- Gallery grid for VR projects
- Logout button in gallery

### `style.css`

- Responsive design optimized for VR pointers
- Large buttons and input fields (minimum 60px height on VR devices)
- Bayt color scheme:
  - Primary Blue: `#2D4E6C`
  - Light Accent: `#D8E3EB`
- No hover effects (click-only interactions)
- Responsive breakpoints for Quest headset displays

### `script.js`

- **Projects array**: Define your VR walkthroughs here
- **Authentication**: Validates username "BayT" and password "2025"
- **Screen navigation**: Manages splash → login → gallery flow
- **Gallery rendering**: Dynamically builds project cards from the projects array

### `manifest.json`

- Enables installation as a standalone app on Meta Quest
- Defines app name, icons, display mode, and theme colors
- Required for "Install App" feature in Quest Browser

---

## Images Guide

### Logos

- **logo.png**: Main Saulaigh logo shown on splash and login screens
  - Recommended: 500×300px or similar aspect ratio
  - Should be PNG with transparent background
- **logo-small.png**: Favicon and small branding
  - 32×32px minimum

### Project Thumbnails

- **francis-thumb.jpg**: Square image for gallery display
  - Recommended: 280×280px or larger
  - Format: JPG or PNG
  - Will be displayed at varying sizes depending on device

### App Icons

Store in `images/icons/`:

- **icon-192.png** & **icon-192-maskable.png**: 192×192px
- **icon-512.png** & **icon-512-maskable.png**: 512×512px
- Maskable icons should have 40px safe zone padding
- Use Saulaigh branding/colors

### Screenshots

Store in `images/icons/`:

- **screenshot-540.png**: 540×720px (vertical)
- **screenshot-1080.png**: 1080×1440px (vertical)
- Show the gallery screen in action

---

## Adding New VR Projects

All VR projects are defined in `script.js` in the `projects` array.

### Current Project

```javascript
const projects = [
  {
    name: "Francis — Rev 2",
    thumb: "images/francis-thumb.jpg",
    url: "https://saulaighvr.shapespark.com/francismulcahy/",
  },
];
```

### To Add a New Project

Simply add a new object to the array:

```javascript
const projects = [
  {
    name: "Francis — Rev 2",
    thumb: "images/francis-thumb.jpg",
    url: "https://saulaighvr.shapespark.com/francismulcahy/",
  },
  {
    name: "New Bayt Project",
    thumb: "images/new-project-thumb.jpg",
    url: "https://saulaighvr.shapespark.com/newproject/",
  },
];
```

**That's it!** The new project appears instantly in the gallery on next page load.

---

## Login Credentials

- **Username**: BayT
- **Password**: 2025

These are hardcoded in `script.js`:

```javascript
const VALID_USERNAME = "BayT";
const VALID_PASSWORD = "2025";
```

To change credentials, edit these values in `script.js`.

---

## User Flow

1. **Splash Screen**: Shows Saulaigh logo + "Enter Portal" button
2. **Login Screen**: Username and password input
3. **Gallery**: After successful login, shows all VR projects
4. **Open VR**: Clicking a project opens the Shapespark link in a new browser tab
5. **Logout**: "Logout" button returns to splash screen

---

## Color Scheme (Bayt Branding)

- **Primary Blue**: `#2D4E6C` (headers, buttons, text)
- **Light Accent**: `#D8E3EB` (input borders, backgrounds)
- **Background**: `#f5f5f5` (light gray)
- **Text**: `#333` (dark gray)

Colors are defined in `style.css` and can be modified globally by updating CSS variables or the hex values.

---

## Hosting & Deployment

### Local Testing

1. Place the `/bayt` folder in any web server root
2. Open `http://localhost/bayt` (or your server URL) in a browser
3. Test all flows: splash → login → gallery → project link

### Production Hosting

Upload the `/bayt` folder to any web host:

- Example: `https://saulaighvr.com/bayt`
- Example: `https://saulaigh.com/vr/bayt`

The URL structure doesn't matter as long as all files are served together.

### HTTPS Required for App Installation

To enable the "Install App" feature on Meta Quest, the URL must use HTTPS (SSL certificate required).

---

## Testing on Meta Quest Headset

### Prerequisites

- Meta Quest 2, Quest 3, or later
- Quest Browser app (pre-installed on all Meta headsets)

### Testing Steps

1. **Put on the headset**
2. **Open Browser app**
3. **Enter the portal URL**:
   - Type or voice-search: `https://saulaighvr.com/bayt` (or your URL)
4. **Verify the flow**:
   - ✓ Splash screen with logo appears
   - ✓ "Enter Portal" button is large and clickable
   - ✓ Login screen: input fields accept text
   - ✓ Login with BayT / 2025
   - ✓ Gallery loads with project thumbnails
   - ✓ Clicking a project opens Shapespark in a new tab
5. **Enter VR**:
   - In the Shapespark viewer, look for "Enter VR" button
   - This launches the full 6DOF experience on the headset
6. **Test pointer interactions**:
   - Use the controller pointer to click all buttons and cards
   - Ensure no accidental interactions occur
7. **Bookmark for repeat use**:
   - In Quest Browser, tap the bookmark icon
   - Future visits: just open bookmarks and tap "Saulaigh VR Portal"

### Installing as an App (PWA)

Once you've tested and the URL uses HTTPS:

1. **Open the browser menu** (three dots in top-right)
2. **Tap "Install app"** or **"Add to Home"**
3. **Confirm installation**
4. **App now appears** in the headset's "Apps" list like a native application
5. **Launch from Apps**: Users can now open directly from the Quest home screen

---

## Performance Optimization

The portal is optimized for VR pointers:

- **Large touch targets**: Buttons are minimum 60×60px on mobile
- **No hover effects**: All interactions are click-based
- **Fast load time**: Single-page application (no page reloads)
- **Responsive grid**: Adapts from 1-4 columns based on device width
- **Lightweight assets**: Minimal CSS and JavaScript

---

## Troubleshooting

### "Cannot reach the portal"

- Verify the URL is accessible from a regular browser first
- Check that HTTPS is used (required for Quest features)
- Ensure all files (index.html, style.css, script.js, manifest.json, images/) are uploaded to the server

### "Login doesn't work"

- Verify username is exactly `BayT` (capital B, camelCase)
- Verify password is exactly `2025` (four digits)
- Check browser console for JavaScript errors

### "Gallery is blank"

- Ensure `images/francis-thumb.jpg` exists and is accessible
- Check console for image loading errors
- Verify project URLs in `script.js` are correct

### "App won't install on Quest"

- URL must use HTTPS (not HTTP)
- Refresh browser and try again
- Ensure manifest.json is in the root `/bayt` folder

### "Shapespark link opens but doesn't load"

- Verify the Shapespark URL is correct and publicly accessible
- Test the link in a regular browser first

---

## Advanced Customization

### Change Portal Name

Edit in `index.html` and `manifest.json`:

```html
<!-- In index.html -->
<title>Custom Portal Name</title>

<!-- In manifest.json -->
"name": "Custom Portal Name", "short_name": "Custom Name"
```

### Change Colors

Edit in `style.css`. Search for hex colors `#2D4E6C` and `#D8E3EB`:

```css
/* Primary color */
#2D4E6C → your color

/* Accent color */
#D8E3EB → your color
```

### Modify Button Text

Edit in `index.html`:

```html
<button id="enter-portal-btn" class="btn btn-primary">Your Text Here</button>
```

### Add Loading States

Modify `script.js` in the gallery rendering function to add spinners or "Loading..." messages.

---

## Security Notes

- **No backend required**: Authentication is client-side only
- **Credentials visible in code**: This is intentional for simplicity. For sensitive applications, use server-side authentication
- **No data stored**: The portal doesn't save any user data between sessions
- **Offline capable**: Once loaded, the portal can work offline on the Quest (except opening external Shapespark links)

---

## Deployment Checklist

- [ ] All files created (index.html, style.css, script.js, manifest.json)
- [ ] Images uploaded: logo.png, logo-small.png, francis-thumb.jpg
- [ ] App icons created: 4 icon files in `/images/icons/`
- [ ] Hosted on HTTPS-enabled server
- [ ] URL verified in browser (desktop or mobile)
- [ ] Login tested: BayT / 2025
- [ ] Gallery displayed correctly
- [ ] Project link opens Shapespark
- [ ] Tested on Meta Quest headset
- [ ] "Install App" works on Quest
- [ ] Bookmarked on headset for easy access

---

## Support & Next Steps

### For additional VR projects:

1. Add new images to `/images/`
2. Add project objects to `projects` array in `script.js`
3. Publish changes (just update the files on your server)

### For multiple clients:

Create a new folder for each client:

```
/saulaigh
├── /bayt          (current)
├── /client2       (duplicate structure, modify branding)
├── /client3
```

Each client gets its own folder with their branding and projects.

---

## File Manifest

| File                     | Purpose                 |
| ------------------------ | ----------------------- |
| index.html               | Main page structure     |
| style.css                | Styling and layout      |
| script.js                | Logic and interactivity |
| manifest.json            | PWA app configuration   |
| images/logo.png          | Main branding           |
| images/logo-small.png    | Favicon                 |
| images/francis-thumb.jpg | Project thumbnail       |
| images/icons/\*.png      | App installation icons  |

---

**Portal ready for deployment!**
