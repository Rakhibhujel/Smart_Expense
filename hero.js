const menu = document.getElementById("menu-btn");
const nav = document.querySelector(".nav-links");
const icon = menu.querySelector("i");

menu.onclick = () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
};

// Navbar shadow

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 20) {
    header.style.boxShadow = "0 8px 30px rgba(0,0,0,.08)";
  } else {
    header.style.boxShadow = "none";
  }
});
