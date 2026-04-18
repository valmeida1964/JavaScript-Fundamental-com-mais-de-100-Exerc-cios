/*
Contador com possibilidade de definir o valor do incremento e decremento
------------------------------------------------------
O valor do incremento e decremento pode ser definido pelo usuário clicando em
pequenos links no fundo do contador.
*/

let counter = 0;
let incrementValue = 1;
let incrementLinks = document.querySelectorAll('[id^="inc_value_"]');

// botões de incremento e decremento
document.querySelector("#btn_decrease").addEventListener('click', () => {
    counter -= incrementValue;
    updateCounterDisplay();
});

document.querySelector("#btn_increase").addEventListener('click', () => {
    counter += incrementValue;
    updateCounterDisplay();
});

function updateCounterDisplay(){
    document.querySelector("#counter_display").innerHTML = counter;
}

incrementLinks.forEach( link => {
    link.addEventListener('click', (event) => {
        removeBackgroundColorLinks();
        event.target.classList.replace("bg-slate-300", "bg-yellow-300");
        incrementValue = parseInt(event.target.textContent);
    });
});

function removeBackgroundColorLinks(){
    incrementLinks.forEach(link => {
        link.classList.replace("bg-yellow-300", "bg-slate-300");
    });
}