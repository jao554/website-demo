let clickCount = 0;
let startTime = 0;
let interval;
let isTesting = false;

const clickButton = document.getElementById("clickButton");
const cpsDisplay = document.getElementById("cps");
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", startTest);
clickButton.addEventListener("click", registerClick);

function startTest() {
    if (isTesting) return;

    isTesting = true;
    clickCount = 0;
    startTime = Date.now();
    
    startButton.disabled = true; 
    clickButton.disabled = false;

    cpsDisplay.textContent = "CPS: 0";
    timerDisplay.textContent = "Tempo: 0s";

    interval = setInterval(updateTimer, 1000);
    setTimeout(endTest, 5000);
}

function registerClick() {
    clickCount++;
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    timerDisplay.textContent = `Tempo: ${elapsedTime}s`;
}

function endTest() {
    clearInterval(interval);
    
    const elapsedTime = (Date.now() - startTime) / 1000;
    const cps = clickCount / elapsedTime;
    
    cpsDisplay.textContent = `CPS: ${cps.toFixed(2)}`;
    
    // Finaliza o teste
    startButton.disabled = false;
    clickButton.disabled = true;
    isTesting = false;
}
