/* ===============================
   1. HERO CANVAS ANIMATION
================================ */

const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Particle setup
const particles = [];
const totalParticles = 60;

for (let i = 0; i < totalParticles; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = "rgba(120, 120, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();


/* ===============================
   2. SMOOTH SCROLL NAVBAR
================================ */

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));

        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: "smooth"
        });
    });
});


/* ===============================
   3. NAVBAR ACTIVE LINK
================================ */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        const top = window.scrollY;
        if (top >= sec.offsetTop - 200) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});


/* ===============================
   4. FADE-IN ON SCROLL
================================ */

const fadeElements = document.querySelectorAll(
    ".about-container, .skills-container, .projects-container, .contact-container"
);

function scrollAnimation() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("fade-in");
        }
    });
}

window.addEventListener("scroll", scrollAnimation);
scrollAnimation();


/* ===============================
   5. OPTIONAL – MOBILE NAV
================================ */

const nav = document.querySelector(".navbar");
const burger = document.querySelector(".burger");

if (burger) {
    burger.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

/* ================================
   BACKGROUND ANIMATION (CANVAS)
================================ */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let lines = [];
    for (let i = 0; i < 30; i++) {
        lines.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: 0.5 + Math.random(),
            length: 50 + Math.random() * 100
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        lines.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x + line.length, line.y);
            ctx.strokeStyle = 'rgba(255,255,255,0.1)';
            ctx.lineWidth = 2;
            ctx.stroke();

            line.x += line.speed;
            if (line.x > canvas.width) line.x = -line.length;
        });
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Redirect ke portofolio.html setelah 5.5 detik
    setTimeout(() => {
        window.location.href = "portofolio.html";
    }, 5500);
});
