/* 
Cronómetro
----------------------------------------------
Criar um cronômetro que conta o tempo em segundos, minutos e horas. 
Deve apresentar também os milissegundos.
O cronômetro deve ter os seguintes botões:
- Iniciar
- Pausar
- Reiniciar
*/

// buscar elementos da DOM
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");

const displayMain = document.querySelector("#display_main");
const displayMilliseconds = document.querySelector("#display_milliseconds");

// ponto de partida
let seconds = 0;
let milliseconds = 0;
let interval = null;
let isRunning = false;

// event listeners
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer(){
    if(isRunning) return; // impedir que seja iniciado o cronómetro, porque já está em funcionamento
    isRunning = true;
    interval = setInterval(updateTime, 10);
}

function pauseTimer(){
    isRunning = false;
    clearInterval(interval);
}

function resetTimer(){
    isRunning = false;
    clearInterval(interval);
    seconds = 0;
    milliseconds = 0;
    displayMain.textContent = "00:00:00";
    displayMilliseconds.textContent = "000";
}

function updateTime(){
    milliseconds += 10;
    if(milliseconds >= 1000){
        milliseconds = 0;
        seconds++;
    }

    displayMain.textContent = formatTime(seconds);
    displayMilliseconds.textContent = formatMilliseconds(milliseconds);
}

function formatTime(seconds){
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    seconds = seconds % 60;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function formatMilliseconds(milliseconds){
    return padZero(milliseconds, true);
}

function padZero(number, milliseconds = false){
    if(milliseconds){
        return number < 100 ? '0' + number : number;
    }
    return number < 10 ? '0' + number : number;
}