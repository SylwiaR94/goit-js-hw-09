const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener("click", startColor);

function startColor() {

    let hexColor = getRandomHexColor();

    document.body.style.backgroundColor = hexColor;

}

function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
