/*
Criar um efeito visual de processo em execução
-----------------------------------------------
Vamos apresentar no browser um efeito animado de um processo a decorrer.
*/

let progressBar = document.querySelector("#progress_bar");
let currentProgressStep = 0;
let progressBarSteps = 20;
let milliseconds = 50;

function defineProgressBar(totalSteps, currentStep){
    let progressBar = [];
    for(let i = 0; i < totalSteps; i++){
        if(currentStep === i){
            progressBar.push('<span class="text-sky-500 me-1">&#9608;</span>');
        } else {
            progressBar.push('<span class="text-slate-200 me-1">&#9608;</span>');
        }
    }
    return progressBar.join('');
}

progressBar.innerHTML = defineProgressBar(progressBarSteps, currentProgressStep);

// animação
setInterval(() => {
    progressBar.innerHTML = defineProgressBar(progressBarSteps, currentProgressStep++);
    if(currentProgressStep > progressBarSteps) {
        currentProgressStep = 0;
    }
}, milliseconds);
