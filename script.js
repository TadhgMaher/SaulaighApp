// Authentication credentials
const CORRECT_USERNAME = "BayT";
const CORRECT_PASSWORD = "2025";

// Project data with Shapespark links
const projects = [
    {
        id: 1,
        name: "Francis — Rev 2",
        image: "images/Studio Image.jpg",
        link: "https://saulaighvr.shapespark.com/francismulcahy/"
    },
    {
        id: 2,
        name: "Coastal Villa",
        image: "images/Coastal.jpg",
        link: "https://www.shapespark.com/gallery/coastal-experience"
    },
    {
        id: 3,
        name: "Urban Oasis",
        image: "images/Urban.jpg",
        link: "https://www.shapespark.com/gallery/urban-experience"
    },
    {
        id: 4,
        name: "Minimalist Haven",
        image: "images/Minimalist.jpg",
        link: "https://www.shapespark.com/gallery/minimalist-experience"
    }
];

let isAuthenticated = false;
let scene, camera, renderer;
let portalObjects = [];

// Three.js initialization and 3D portal creation
function initThreeJS() {
    const canvas = document.getElementById('canvas');
    
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);
    scene.fog = new THREE.Fog(0x0a0e27, 100, 1000);
    
    // Camera setup (VR-optimized)
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 0, 5);
    
    // Renderer setup (VR-optimized)
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowShadowMap;
    
    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 50, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    // Create portal environment
    createPortalEnvironment();
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate portal objects for visual effect
        portalObjects.forEach(obj => {
            if (obj.userData.isProject) {
                obj.rotation.y += 0.003;
                obj.position.y += Math.sin(Date.now() * 0.0005) * 0.001;
            }
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Create the immersive 3D portal environment
function createPortalEnvironment() {
    // Floor
    const floorGeometry = new THREE.PlaneGeometry(100, 100);
    const floorMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a1a2e,
        roughness: 0.8,
        metalness: 0.2
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2;
    floor.receiveShadow = true;
    scene.add(floor);
    
    // Back wall with gradient
    const wallGeometry = new THREE.PlaneGeometry(100, 100);
    const wallMaterial = new THREE.MeshStandardMaterial({
        color: 0x16213e,
        roughness: 0.9,
        metalness: 0.1
    });
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.position.z = -30;
    wall.receiveShadow = true;
    scene.add(wall);
    
    // Side walls
    const sideWallGeometry = new THREE.PlaneGeometry(100, 100);
    const sideWallMaterial = new THREE.MeshStandardMaterial({
        color: 0x0f3460,
        roughness: 0.9,
        metalness: 0.1
    });
    
    const leftWall = new THREE.Mesh(sideWallGeometry, sideWallMaterial);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.x = -50;
    leftWall.receiveShadow = true;
    scene.add(leftWall);
    
    const rightWall = new THREE.Mesh(sideWallGeometry, sideWallMaterial);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.x = 50;
    rightWall.receiveShadow = true;
    scene.add(rightWall);
    
    // Ceiling
    const ceilingGeometry = new THREE.PlaneGeometry(100, 100);
    const ceilingMaterial = new THREE.MeshStandardMaterial({
        color: 0x0a0e1a,
        roughness: 0.9,
        metalness: 0.2
    });
    const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 30;
    ceiling.receiveShadow = true;
    scene.add(ceiling);
    
    // Accent lighting pillars (green emerald accent)
    const pillarGeometry = new THREE.CylinderGeometry(2, 2, 40, 16);
    const pillarMaterial = new THREE.MeshStandardMaterial({
        color: 0x6b8e6f,
        roughness: 0.3,
        metalness: 0.6
    });
    
    const leftPillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
    leftPillar.position.set(-20, 0, -20);
    leftPillar.castShadow = true;
    scene.add(leftPillar);
    
    const rightPillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
    rightPillar.position.set(20, 0, -20);
    rightPillar.castShadow = true;
    scene.add(rightPillar);
    
    // Portal accent lights
    const leftLight = new THREE.PointLight(0x6b8e6f, 1.5, 50);
    leftLight.position.set(-20, 5, -15);
    scene.add(leftLight);
    
    const rightLight = new THREE.PointLight(0x6b8e6f, 1.5, 50);
    rightLight.position.set(20, 5, -15);
    scene.add(rightLight);
}

// Handle login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
        isAuthenticated = true;
        errorElement.textContent = '';
        showGallery();
    } else {
        errorElement.textContent = 'Invalid credentials. Try again.';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});

function showGallery() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('gallery-screen').style.display = 'block';
    
    // Populate projects
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';
    
    projects.forEach(project => {
        const btn = document.createElement('button');
        btn.className = 'project-btn';
        btn.textContent = project.name;
        btn.onclick = () => enterExperience(project);
        projectsList.appendChild(btn);
    });
}

function enterExperience(project) {
    const loading = document.getElementById('loading');
    loading.style.display = 'block';
    
    // Small delay for visual feedback, then redirect seamlessly
    setTimeout(() => {
        window.location.href = project.link;
    }, 500);
}

function exitToLogin() {
    isAuthenticated = false;
    document.getElementById('gallery-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => {
                console.log('Service Worker registered successfully:', registration);
            })
            .catch((err) => {
                console.log('Service Worker registration failed:', err);
            });
    });
}

// Initialize Three.js on page load
window.addEventListener('load', () => {
    // Enter fullscreen immediately
    const enterFullscreen = async () => {
        try {
            if (document.documentElement.requestFullscreen) {
                await document.documentElement.requestFullscreen({ navigationUI: 'hide' });
            } else if (document.documentElement.webkitRequestFullscreen) {
                await document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                await document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.msRequestFullscreen) {
                await document.documentElement.msRequestFullscreen();
            }
        } catch (err) {
            console.log('Fullscreen request failed:', err);
        }
    };
    
    // Lock screen orientation to landscape
    const lockOrientation = async () => {
        try {
            if (screen.orientation && screen.orientation.lock) {
                await screen.orientation.lock("landscape");
            }
        } catch (err) {
            console.log('Orientation lock not available:', err);
        }
    };
    
    // Execute fullscreen and orientation setup
    enterFullscreen();
    lockOrientation();
    
    // Initialize Three.js scene
    initThreeJS();
    
    // Focus on username input
    document.getElementById('username').focus();
    
    // Prevent any UI elements from appearing
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            // If fullscreen exits, try to re-enter
            enterFullscreen();
        }
    });
});

// Handle visibility changes to maintain fullscreen
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('App hidden');
    } else {
        console.log('App visible - maintaining fullscreen');
    }
});
