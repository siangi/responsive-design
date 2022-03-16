let menuToggle = document.querySelector("button[type=burger]");

menuToggle.addEventListener("click", toggleMenu);

function toggleMenu() {
    menu = document.querySelector("#menu-links").classList.toggle("show");
}
