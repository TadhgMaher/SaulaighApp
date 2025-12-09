// ============================================
// VR PROJECTS DATA
// ============================================

const projects = [
    {
        name: "Francis — Rev 2",
        thumb: "images/francis-thumb.jpg",
        url: "https://saulaighvr.shapespark.com/francismulcahy/"
    }
    // To add a new project, simply add an object:
    // {
    //     name: "Project Name",
    //     thumb: "images/project-thumb.jpg",
    //     url: "https://your-shapespark-url/"
    // }
];

// ============================================
// AUTHENTICATION
// ============================================

const VALID_USERNAME = "BayT";
const VALID_PASSWORD = "2025";

let isLoggedIn = false;

// ============================================
// DOM ELEMENTS
// ============================================

const splashScreen = document.getElementById("splash-screen");
const loginScreen = document.getElementById("login-screen");
const galleryScreen = document.getElementById("gallery-screen");
const enterPortalBtn = document.getElementById("enter-portal-btn");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginErrorMsg = document.getElementById("login-error");
const backLoginBtn = document.getElementById("back-login-btn");
const logoutBtn = document.getElementById("logout-btn");
const projectsGrid = document.getElementById("projects-grid");

// ============================================
// VR & APP INSTALLATION SUPPORT
// ============================================

let deferredPrompt = null;

// Listen for install prompt on compatible devices
window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log("App installation available on this device");
});

// Request full-screen on VR headsets
async function requestFullscreen() {
    try {
        if (document.documentElement.requestFullscreen) {
            await document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            await document.documentElement.webkitRequestFullscreen();
        }
    } catch (err) {
        console.log("Fullscreen not available:", err);
    }
}

// Lock screen orientation for VR (landscape)
async function lockOrientation() {
    try {
        if (screen.orientation && screen.orientation.lock) {
            await screen.orientation.lock("landscape");
        }
    } catch (err) {
        console.log("Orientation lock not available:", err);
    }
}

// ============================================
// SCREEN NAVIGATION
// ============================================

function showScreen(screenElement) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    screenElement.classList.add("active");
}

enterPortalBtn.addEventListener("click", () => {
    lockOrientation();
    showScreen(loginScreen);
    usernameInput.focus();
});

backLoginBtn.addEventListener("click", () => {
    showScreen(splashScreen);
    resetLoginForm();
});

logoutBtn.addEventListener("click", () => {
    isLoggedIn = false;
    showScreen(splashScreen);
    resetLoginForm();
});

// ============================================
// LOGIN HANDLING
// ============================================

function resetLoginForm() {
    loginForm.reset();
    loginErrorMsg.textContent = "";
    usernameInput.value = "";
    passwordInput.value = "";
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        isLoggedIn = true;
        loginErrorMsg.textContent = "";
        renderGallery();
        showScreen(galleryScreen);
        requestFullscreen();
    } else {
        loginErrorMsg.textContent = "Invalid username or password";
        passwordInput.value = "";
        passwordInput.focus();
    }
});

// ============================================
// GALLERY RENDERING
// ============================================

function renderGallery() {
    projectsGrid.innerHTML = "";

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";

        projectCard.innerHTML = `
            <img src="${project.thumb}" alt="${project.name}" class="project-thumbnail" loading="lazy" onerror="this.src='images/logo.png'">
            <div class="project-info">
                <div class="project-name">${project.name}</div>
            </div>
        `;

        projectCard.addEventListener("click", () => {
            // Open in new tab for VR headset browsers
            window.open(project.url, "_blank", "noopener,noreferrer");
        });

        // VR pointer optimization - add touch feedback
        projectCard.addEventListener("touchstart", () => {
            projectCard.style.opacity = "0.8";
        });

        projectCard.addEventListener("touchend", () => {
            projectCard.style.opacity = "1";
        });

        projectsGrid.appendChild(projectCard);
    });
}

// ============================================
// INITIALIZATION & VR SETUP
// ============================================

function initializeVRApp() {
    console.log("🎮 Saulaigh VR Portal initialized");
    console.log("Platform: " + (navigator.userAgent.includes("Meta") ? "Meta Quest" : "Unknown VR Device"));
    
    // Initialize app for full-screen VR experience
    showScreen(splashScreen);
    
    // Prevent sleep on VR headsets
    try {
        navigator.wakeLock.request("screen").catch(err => {
            console.log("Wake lock not available");
        });
    } catch (err) {
        console.log("Wake lock not supported");
    }
    
    // Register service worker for app installation
    if ("serviceWorker" in navigator) {
        // Service worker registration could go here if needed
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initializeVRApp();
});

// Handle app installation
window.addEventListener("appinstalled", () => {
    console.log("App installed successfully!");
    deferredPrompt = null;
});

// Handle visibility changes (pause content when minimized)
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        console.log("App backgrounded");
    } else {
        console.log("App foregrounded");
    }
});

// Prevent accidental back navigation
window.addEventListener("popstate", (e) => {
    if (isLoggedIn) {
        e.preventDefault();
        // User is in gallery, prevent back
    }
});
