/* 
criar um contador simples com botões de aumentar e diminuir o valor do contador
*/

let contador = 0;

const counterDisplay = document.querySelector("#counter_display");

document.querySelector("#btn_decrease").addEventListener('click', () => {
    contador--;
    counterDisplay.textContent = contador;
});

document.querySelector("#btn_increase").addEventListener('click', () => {
    contador++;
    counterDisplay.textContent = contador;
});