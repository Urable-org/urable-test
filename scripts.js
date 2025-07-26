// 3D Interactive Blockchain Visual
function initBlockchainVisual() {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create blockchain visual elements
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}

// Animated Headline Text
function animateHeadline() {
    const headline = document.querySelector('header h1');
    headline.style.animation = 'fadeIn 2s';
}

// Testimonials Slider
function initTestimonialsSlider() {
    // Initialize slider functionality
}

// FAQ Accordion
function initFAQAccordion() {
    // Initialize accordion functionality
}

// Newsletter Sign-Up
function initNewsletterSignUp() {
    // Initialize newsletter sign-up form
}

// Wallet Connection
function initWalletConnection() {
    // Initialize wallet connection functionality
}

// Light/Dark Toggle
function toggleLightDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Initialize all functionalities
initBlockchainVisual();
animateHeadline();
initTestimonialsSlider();
initFAQAccordion();
initNewsletterSignUp();
initWalletConnection();

document.querySelector('#toggle-mode').addEventListener('click', toggleLightDarkMode);