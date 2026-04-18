/*
Contador com limite de valores
------------------------------------------------------
O valor não pode ser inferior a 0 e não pode ser superior a 20.
*/

let counter = 5;
let minValue = 0;
let maxValue = 20;

const counterDisplay = document.querySelector("#counter_display");

// eventos dos botões
document.querySelector("#btn_decrease").addEventListener('click', () => {
    counter--;
    updateCounterDisplay();
});

document.querySelector("#btn_increase").addEventListener('click', () => {
    counter++;
    updateCounterDisplay();
});

function updateCounterDisplay(){

    // bloquear o incremento e decremento abaixo ou acima do minValue e maxValue, respetivamente
    if(counter < minValue){
        counter = minValue;
    } else if(counter > maxValue){
        counter = maxValue;
    }

    counterDisplay.textContent = counter;
}