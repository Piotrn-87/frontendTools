const headerText = document.querySelector(".hero__header--text");
const burgerMenu = document.querySelector(".burger");
const burgerIcon = document.querySelector(".fa-bars");
const xIcon = document.querySelector(".fa-times");
const fas = document.querySelector(".fas");
const mobileNav = document.querySelector(".mobile-nav");

const text = "Frontend Resources !!"
const time = 200;
let index = 0;

const addLetter = () => {
    headerText.textContent += text[index];
    index++;
    if (index === text.length) {
        clearInterval(headerTyping);
    }
}
const headerTyping = setInterval(addLetter, time);

burgerMenu.addEventListener("click", function () {
    burgerIcon.classList.toggle("show_icon");
    xIcon.classList.toggle("show_icon");
    mobileNav.classList.toggle("mobile-nav__visible");
})