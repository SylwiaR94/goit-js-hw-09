const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let color;

startBtn.addEventListener("click", () => {
    color = setInterval(startColor, 1000)
});

stopBtn.addEventListener("click", stopColor);

function startColor() {

    let hexColor = getRandomHexColor();

    document.body.style.backgroundColor = hexColor;

}

function stopColor() {
    clearInterval(color);
}

function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
