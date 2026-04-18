/*
O método setInterval tem como objetivo executar uma função repetidamente após um determinado intervalo de tempo.
Ao contrário do setTimeout, que executa a função apenas uma vez após o tempo especificado,
o setInterval executa a função continuamente até que seja cancelado.
*/

const btnStart = document.querySelector("#btn_start");
const btnStop = document.querySelector("#btn_stop");
const btnReset = document.querySelector("#btn_reset");
const timerDisplay = document.querySelector("#timer_display");

let seconds = 0;
let timerId = null;
let isRunning = false;

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnReset.addEventListener('click', resetTimer);

function startTimer() {
	if(isRunning) return; // Evita iniciar o timer se já estiver em execução
	isRunning = true;
	timerId = setInterval(() => {
		seconds++;
		updateDisplay();
	}, 1000);
}

function stopTimer(){
	if(!isRunning) return; // Evita parar o timer se não estiver em execução
	isRunning = false;
	clearInterval(timerId);
}

function resetTimer(){
	stopTimer();
	seconds = 0;
	updateDisplay();
}

function updateDisplay(){
	timerDisplay.textContent = seconds;
}