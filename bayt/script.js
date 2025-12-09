// ============================================
// VR PROJECTS DATA
// ============================================

const projects = [
    {
        name: "Francis — Rev 2",
        thumb: "images/francis-thumb.jpg",
        url: "https://saulaighvr.shapespark.com/francismulcahy/"
    }
    // To add a new project, add an object here:
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
// SCREEN NAVIGATION
// ============================================

function showScreen(screenElement) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    screenElement.classList.add("active");
}

enterPortalBtn.addEventListener("click", () => {
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

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    showScreen(splashScreen);
    console.log("Saulaigh VR Portal initialized");
});
