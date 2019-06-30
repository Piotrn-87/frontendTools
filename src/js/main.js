const headerText = document.querySelector(".hero__header--text");
const burgerMenu = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");
const backdrop = document.querySelector(".backdrop");
const activeElement = document.querySelectorAll(".active");

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

burgerMenu.addEventListener("click", (e) => {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("show_icon");
        activeElement[i].classList.toggle("mobile-nav__visible");
        activeElement[i].classList.toggle("backdrop-active");
    }
})

backdrop.addEventListener("click", (e) => {
    mobileNav.classList.remove("mobile-nav__visible");
    backdrop.classList.remove("backdrop-active");
})