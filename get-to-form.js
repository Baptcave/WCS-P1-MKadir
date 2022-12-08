// MENU HAMBURGER

const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".mobile-first")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

// FORM MESSAGE

const message = "Merci de m'avoir contacté ! Je vous répondrai dès que possible !";

const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  alert(message);
});