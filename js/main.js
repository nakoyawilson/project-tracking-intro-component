const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileNav = document.querySelector(".mobile-nav");

menuIcon.addEventListener("click", () => {
  closeIcon.style.display = "block";
  menuIcon.style.display = "none";
  mobileNav.style.display = "block";
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      mobileNav.style.display = "none";
    });
  });
});

closeIcon.addEventListener("click", () => {
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
  mobileNav.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    mobileNav.style.display = "none";
  }
});
