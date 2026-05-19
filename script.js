const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const siteHeader = document.querySelector(".site-header");

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

siteHeader?.addEventListener("mousemove", (event) => {
  const rect = siteHeader.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  siteHeader.style.setProperty("--mouse-x", `${x}%`);
  siteHeader.style.setProperty("--mouse-y", `${y}%`);
});

siteHeader?.addEventListener("mouseleave", () => {
  siteHeader.style.setProperty("--mouse-x", "50%");
  siteHeader.style.setProperty("--mouse-y", "35%");
});
