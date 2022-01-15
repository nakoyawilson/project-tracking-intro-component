const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const navigation = document.querySelector(".navigation");

menuIcon.addEventListener("click", () => {
  closeIcon.style.display = "block";
  menuIcon.style.display = "none";
  navigation.style.display = "block";
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      navigation.style.display = "none";
    });
  });
});

closeIcon.addEventListener("click", () => {
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
  navigation.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    navigation.style.display = "flex";
  } else if (closeIcon.style.display === "block") {
    navigation.style.display = "block";
  } else {
    navigation.style.display = "none";
  }
});
