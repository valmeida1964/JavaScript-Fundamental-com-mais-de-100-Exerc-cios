/*
Criar um contador simples com botões de aumentar e diminuir o valor do contador.
Acrescentar à lógica, se o contador for igual a 0 fica a preto, menor fica a vermelho e maior fica a verde
*/

let counter = 0;
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

    counterDisplay.textContent = counter;

    let textColor = "slate";

    if(counter < 0){
        textColor = "red";
    } else if (counter > 0){
        textColor = "green"
    }

    counterDisplay.classList.remove('text-slate-600', 'text-red-600', 'text-green-600');
    counterDisplay.classList.add(`text-${textColor}-600`);
}