const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener("click", startColor);
stopBtn.addEventListener("click", stopColor);

function startColor() {

    let hexColor = getRandomHexColor();

    document.body.style.backgroundColor = hexColor;

}

function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

const color = setInterval(startColor, 1000);

function stopColor() {
    clearInterval(color);
}
