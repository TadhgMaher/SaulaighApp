# Saulaigh VR Portal — Visual Components Reference

## 🎨 Component Gallery & Code Reference

This document shows what each component looks like and where to find it in the code.

---

## 📱 Screen 1: Splash Screen

### Visual Description

```
┌─────────────────────────────────┐
│                                 │
│                                 │
│          [LOGO IMAGE]           │
│                                 │
│     Saulaigh VR Portal          │
│                                 │
│      [ ENTER PORTAL ]           │
│                                 │
│                                 │
└─────────────────────────────────┘
```

### Code Location

**File**: `index.html`

```html
<div id="splash-screen" class="screen active">
  <div class="splash-container">
    <img src="images/logo.png" alt="Saulaigh Logo" class="logo" />
    <h1>Saulaigh VR Portal</h1>
    <button id="enter-portal-btn" class="btn btn-primary">Enter Portal</button>
  </div>
</div>
```

**Styling**: `style.css`

```css
.splash-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.logo {
  width: 200px;
  height: auto;
}

.splash-container h1 {
  font-size: 48px;
  color: #2d4e6c;
}
```

### User Interaction

- **Click**: "Enter Portal" → Shows login screen
- **Display Time**: Until user action

---

## 🔐 Screen 2: Login Screen

### Visual Description

```
┌─────────────────────────────────┐
│                                 │
│          [LOGO SMALL]           │
│                                 │
│        Portal Login             │
│                                 │
│    Username                     │
│    [ _________________ ]        │
│                                 │
│    Password                     │
│    [ _________________ ]        │
│                                 │
│         [ LOGIN ]               │
│       (error message here)      │
│                                 │
│       [ BACK ]                  │
│                                 │
└─────────────────────────────────┘
```

### Code Location

**File**: `index.html`

```html
<div id="login-screen" class="screen">
  <div class="login-container">
    <img src="images/logo.png" alt="Saulaigh Logo" class="logo-small" />
    <h2>Portal Login</h2>
    <form id="login-form">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary btn-login">Login</button>
      <p id="login-error" class="error-message"></p>
    </form>
    <button id="back-login-btn" class="btn btn-secondary">Back</button>
  </div>
</div>
```

**Styling**: `style.css`

```css
.login-container {
  background-color: white;
  padding: 60px 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
}

.form-group input {
  padding: 16px 14px;
  font-size: 18px;
  border: 2px solid #d8e3eb;
  border-radius: 6px;
}

.error-message {
  color: #d32f2f;
  font-size: 16px;
  text-align: center;
}
```

**Logic**: `script.js`

```javascript
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "BayT" && password === "2025") {
    isLoggedIn = true;
    renderGallery();
    showScreen(galleryScreen);
  } else {
    loginErrorMsg.textContent = "Invalid username or password";
    passwordInput.value = "";
  }
});
```

### User Interaction

- **Type**: Enter username (BayT) and password (2025)
- **Click Login**: Validates credentials
- **Valid**: Shows gallery
- **Invalid**: Shows error message, clears password
- **Click Back**: Returns to splash screen

---

## 🖼️ Screen 3: Gallery Screen

### Visual Description (Desktop - 4 Columns)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ╔═══════════════════════════════════════════════════╗  │
│  ║         Bayt VR Projects                          ║  │
│  ║  (Header with primary color #2D4E6C)             ║  │
│  ╚═══════════════════════════════════════════════════╝  │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────┐     │
│  │ [THUMB 1]    │  │ [THUMB 2]    │  │ [THUMB]  │     │
│  │ Francis...   │  │ Project B    │  │ Project  │     │
│  └──────────────┘  └──────────────┘  └──────────┘     │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────┐     │
│  │ [THUMB 4]    │  │ [THUMB 5]    │  │ [THUMB]  │     │
│  │ Project D    │  │ Project E    │  │ Project  │     │
│  └──────────────┘  └──────────────┘  └──────────┘     │
│                                                          │
│              [ LOGOUT ]                                 │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Code Location

**File**: `index.html`

```html
<div id="gallery-screen" class="screen">
  <div class="gallery-container">
    <header class="gallery-header">
      <h1>Bayt VR Projects</h1>
    </header>
    <div id="projects-grid" class="projects-grid">
      <!-- Projects inserted here by JavaScript -->
    </div>
    <button id="logout-btn" class="btn btn-secondary">Logout</button>
  </div>
</div>
```

**Styling**: `style.css`

```css
.gallery-header {
  background-color: #2d4e6c;
  color: white;
  padding: 30px 20px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 40px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  flex: 1;
}

.project-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.project-card:active {
  transform: scale(0.98);
}

.project-thumbnail {
  width: 100%;
  height: 220px;
  object-fit: cover;
  background-color: #d8e3eb;
}

.project-info {
  padding: 20px;
  background-color: white;
}

.project-name {
  font-size: 20px;
  font-weight: 600;
  color: #2d4e6c;
  text-align: center;
}
```

**Logic**: `script.js`

```javascript
function renderGallery() {
  projectsGrid.innerHTML = "";

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    projectCard.innerHTML = `
            <img src="${project.thumb}" alt="${project.name}" class="project-thumbnail">
            <div class="project-info">
                <div class="project-name">${project.name}</div>
            </div>
        `;

    projectCard.addEventListener("click", () => {
      window.open(project.url, "_blank");
    });

    projectsGrid.appendChild(projectCard);
  });
}
```

### Responsive Variations

**Tablet (3 Columns)**:

```css
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
```

**Mobile (2 Columns)**:

```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

**Small Mobile (1 Column)**:

```css
grid-template-columns: 1fr;
```

### User Interaction

- **Click Project Card**: Opens Shapespark link in new tab
- **Click Logout**: Returns to splash screen
- **Pointer Feedback**: Card scales down slightly on click (active state)

---

## 🎨 Color Reference

### Bayt Brand Palette

| Element    | Color      | Hex       | Usage                  |
| ---------- | ---------- | --------- | ---------------------- |
| Primary    | Dark Blue  | `#2D4E6C` | Headers, buttons, text |
| Accent     | Light Blue | `#D8E3EB` | Borders, backgrounds   |
| Text       | Dark Gray  | `#333`    | Body text              |
| Background | Light Gray | `#f5f5f5` | Page background        |
| White      | Pure White | `#ffffff` | Cards, forms           |
| Error      | Red        | `#d32f2f` | Error messages         |

### CSS Implementation

```css
/* Primary color */
.gallery-header {
  background-color: #2d4e6c;
}
.btn-primary {
  background-color: #2d4e6c;
}

/* Accent color */
.form-group input {
  border-color: #d8e3eb;
}
.project-thumbnail {
  background-color: #d8e3eb;
}

/* Text colors */
body {
  color: #333;
}
h1,
h2 {
  color: #2d4e6c;
}

/* Error */
.error-message {
  color: #d32f2f;
}
```

---

## 🔘 Button Styles

### Primary Button (Login, Enter Portal)

```
Style: Solid background
Color: #2D4E6C (primary blue)
Text: White
Padding: 18px 36px
Interaction: Click → scales down 2%
```

**Code**:

```css
.btn-primary {
  background-color: #2d4e6c;
  color: white;
}

.btn-primary:active {
  background-color: #1e3449;
  transform: scale(0.98);
}
```

### Secondary Button (Back, Logout)

```
Style: Light background with border
Color: #D8E3EB (accent blue)
Border: 2px #2D4E6C
Text: #2D4E6C
Padding: 18px 36px
Interaction: Click → scales down 2%
```

**Code**:

```css
.btn-secondary {
  background-color: #d8e3eb;
  color: #2d4e6c;
  border: 2px solid #2d4e6c;
}

.btn-secondary:active {
  background-color: #c0cde0;
  transform: scale(0.98);
}
```

### Button Sizing

- **Desktop**: 18px font, 18px 36px padding
- **Mobile**: 15px font, 12px 24px padding
- **VR Minimum**: 60px × 60px touch target

---

## 📝 Input Fields

### Style

```
Font: 18px (desktop), 16px (mobile)
Padding: 16px 14px
Border: 2px solid #D8E3EB
Rounded: 6px
Focus: Border color changes to #2D4E6C, background #f9fafb
```

**Code**:

```css
.form-group input {
  padding: 16px 14px;
  font-size: 18px;
  border: 2px solid #d8e3eb;
  border-radius: 6px;
}

.form-group input:focus {
  outline: none;
  border-color: #2d4e6c;
  background-color: #f9fafb;
}
```

### Labels

```
Font: 18px, weight 500
Color: #2D4E6C
Margin Bottom: 10px
```

---

## 📐 Typography Hierarchy

### Page Titles (Splash/Gallery Headers)

- **Size**: 48px (desktop), 36px (tablet), 28px (mobile)
- **Weight**: 600
- **Color**: #2D4E6C
- **Letter Spacing**: 0.5px

### Section Headers (Login Screen)

- **Size**: 36px (desktop), 28px (tablet), 24px (mobile)
- **Weight**: 600
- **Color**: #2D4E6C

### Gallery Header

- **Size**: 44px (desktop), 32px (tablet), 24px (mobile)
- **Weight**: 600
- **Color**: White (on primary background)

### Project Names

- **Size**: 20px (consistent across devices)
- **Weight**: 600
- **Color**: #2D4E6C
- **Alignment**: Center

### Form Labels

- **Size**: 18px
- **Weight**: 500
- **Color**: #2D4E6C

### Input Text

- **Size**: 18px (desktop), 16px (mobile)
- **Weight**: 400
- **Color**: #333

### Error Messages

- **Size**: 16px
- **Weight**: 400
- **Color**: #d32f2f

---

## 🎬 Animations & Interactions

### Screen Transitions

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.screen {
  animation: fadeIn 0.3s ease-in;
}
```

### Button Active State

```css
.btn:active {
  transform: scale(0.98);
}
```

### Card Hover (VR: Disabled)

```css
/* Desktop browsers can hover (no effect on mobile/VR) */
@media (hover: hover) {
  .project-card:hover {
    transform: translateY(-4px);
  }
}

/* VR Devices: Only active state */
@media (hover: none) and (pointer: coarse) {
  .btn {
    min-width: 60px;
    min-height: 60px;
  }
}
```

---

## 📱 Responsive Breakpoints

### Desktop (1200px+)

- 4-column gallery
- 40px padding
- 48px headers
- Large spacing

### Tablet (800px–1199px)

- 3-column gallery
- 30px padding
- 36px headers
- Medium spacing

### Mobile (480px–799px)

- 2-column gallery
- 20px padding
- 28px headers
- Compact spacing

### Small Mobile (<480px)

- 1-column gallery
- 20px padding
- 24px headers
- Minimal spacing

---

## 🔌 Project Data Structure

### JavaScript Array

```javascript
const projects = [
  {
    name: "Francis — Rev 2",
    thumb: "images/francis-thumb.jpg",
    url: "https://saulaighvr.shapespark.com/francismulcahy/",
  },
  {
    name: "Another Project",
    thumb: "images/another-thumb.jpg",
    url: "https://saulaighvr.shapespark.com/anotherproject/",
  },
];
```

### Rendered HTML (Generated)

```html
<div class="project-card">
  <img
    src="images/francis-thumb.jpg"
    alt="Francis — Rev 2"
    class="project-thumbnail"
  />
  <div class="project-info">
    <div class="project-name">Francis — Rev 2</div>
  </div>
</div>
```

---

## 🌐 Web App Manifest (manifest.json)

### Display Information

```json
{
  "name": "Saulaigh VR Portal",
  "short_name": "Saulaigh VR",
  "description": "Saulaigh VR Portal for Bayt - Access VR walkthroughs",
  "start_url": "./index.html",
  "display": "standalone"
}
```

### Theme & Branding

```json
{
  "theme_color": "#2D4E6C",
  "background_color": "#ffffff"
}
```

### Icons (App Installation)

```json
{
  "icons": [
    {
      "src": "images/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "images/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 🎯 VR Optimization Features

### Pointer-Friendly UI

- Minimum 60px × 60px touch targets
- Large text (18px+)
- No hover effects
- Click-only interactions
- High contrast colors

### Performance

- Single-page app (no page reloads)
- Lightweight code (<15 KB uncompressed)
- Fast rendering (<3 seconds total)
- Offline-capable after first load

### Quest Compatibility

- Manifest for app installation
- Portrait orientation primary
- Standalone display mode
- Meta Quest Browser compatible

---

## 📋 Files & Components Map

| Component      | HTML | CSS | JS  | JSON |
| -------------- | ---- | --- | --- | ---- |
| Splash Screen  | ✅   | ✅  | ✅  |      |
| Login Form     | ✅   | ✅  | ✅  |      |
| Gallery Grid   | ✅   | ✅  | ✅  |      |
| Project Cards  | ✅   | ✅  | ✅  |      |
| Buttons        | ✅   | ✅  | ✅  |      |
| Navigation     |      |     | ✅  |      |
| Authentication |      |     | ✅  |      |
| App Config     |      |     |     | ✅   |

---

_This document provides a complete visual and code reference for all components in the Saulaigh VR Portal._
