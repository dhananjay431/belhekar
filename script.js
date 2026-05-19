const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const siteHeader = document.querySelector(".site-header");
let targetX = 50;
let targetY = 35;
let currentX = 50;
let currentY = 35;
let animationFrameId = null;

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const animateHeaderGlow = () => {
  currentX += (targetX - currentX) * 0.12;
  currentY += (targetY - currentY) * 0.12;

  siteHeader?.style.setProperty("--mouse-x", `${currentX}%`);
  siteHeader?.style.setProperty("--mouse-y", `${currentY}%`);

  if (
    Math.abs(targetX - currentX) > 0.1 ||
    Math.abs(targetY - currentY) > 0.1
  ) {
    animationFrameId = requestAnimationFrame(animateHeaderGlow);
  } else {
    animationFrameId = null;
  }
};

const requestHeaderGlowAnimation = () => {
  if (!animationFrameId) {
    animationFrameId = requestAnimationFrame(animateHeaderGlow);
  }
};

siteHeader?.addEventListener("mousemove", (event) => {
  const rect = siteHeader.getBoundingClientRect();
  targetX = ((event.clientX - rect.left) / rect.width) * 100;
  targetY = ((event.clientY - rect.top) / rect.height) * 100;

  requestHeaderGlowAnimation();
});

siteHeader?.addEventListener("mouseleave", () => {
  targetX = 50;
  targetY = 35;
  requestHeaderGlowAnimation();
});
