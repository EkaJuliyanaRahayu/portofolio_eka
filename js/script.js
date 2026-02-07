/* ================================
   NAVBAR SCROLL EFFECT
================================ */
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* ================================
   SMOOTH SCROLL
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


/* ================================
   REVEAL ANIMATION ON SCROLL
================================ */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* ================================
   BUTTON RIPPLE EFFECT
================================ */
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        ripple.style.left = `${e.clientX - this.offsetLeft}px`;
        ripple.style.top = `${e.clientY - this.offsetTop}px`;

        setTimeout(() => ripple.remove(), 600);
    });
});


/* ================================
   PROJECT IMAGE HOVER (POP)
================================ */
document.querySelectorAll('.project-card img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = "scale(1.05)";
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = "scale(1)";
    });
});


/* ================================
   ABOUT SECTION ANIMATION (LEFT-RIGHT)
================================ */
const aboutText = document.querySelector(".about-text");
const aboutImage = document.querySelector(".about-image");

function aboutAnimation() {
    const trigger = window.innerHeight - 120;

    if (aboutText && aboutText.getBoundingClientRect().top < trigger) {
        aboutText.classList.add("animate");
    }
    if (aboutImage && aboutImage.getBoundingClientRect().top < trigger) {
        aboutImage.classList.add("animate");
    }
}

window.addEventListener("scroll", aboutAnimation);
aboutAnimation();


/* ================================
   SOCIAL ICON HOVER (optional)
================================ */
document.querySelectorAll(".icon").forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        icon.classList.add("hovered");
    });
    icon.addEventListener("mouseleave", () => {
        icon.classList.remove("hovered");
    });
});

/* ================================
   BACKGROUND ANIMATION (CANVAS)
================================ */

document.addEventListener('DOMContentLoaded', () => {
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lines = [];
for(let i=0; i<30; i++){
    lines.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        speed: 0.5 + Math.random(),
        length: 50 + Math.random()*100
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.length, line.y);
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.lineWidth = 2;
        ctx.stroke();

        line.x += line.speed;
        if(line.x > canvas.width) line.x = -line.length;
    });
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Redirect ke halaman portfolio setelah 2,5 detik
    window.addEventListener('load', () => {
        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 5500);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // garis animasi neon
    let lines = [];
    for(let i=0; i<50; i++){
        lines.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height,
            speed: 0.5 + Math.random(),
            length: 50 + Math.random()*150,
            color: `rgba(110,92,255,${0.05 + Math.random()*0.2})`
        });
    }

    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        lines.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x + line.length, line.y);
            ctx.strokeStyle = line.color;
            ctx.lineWidth = 2;
            ctx.stroke();

            line.x += line.speed;
            if(line.x > canvas.width) line.x = -line.length;
        });
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', ()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});

