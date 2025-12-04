
/* ----------- CREATE GOLD FALLING PARTICLES ----------- */
const particlesContainer = document.getElementById("particles");
for (let i = 0; i < 90; i++) {
    let p = document.createElement("div");
    p.classList.add("particle");

    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = 3 + Math.random() * 5 + "s";
    p.style.animationDelay = Math.random() * 5 + "s";
    p.style.opacity = Math.random();

    particlesContainer.appendChild(p);
}

/* ----------- 3D NATURAL TILT ROTATION ----------- */
const phone = document.getElementById("phone3d");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;

    phone.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

