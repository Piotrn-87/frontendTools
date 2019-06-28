const headerText = document.querySelector(".hero__header--text");
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