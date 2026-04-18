/*
Relógio digital
--------------------------------------- 
Criar o efeito de um relógio digital recorrendo a imagens .png
*/

const digits = document.querySelectorAll('[id^="digit_"]');
let symbol = false;

setInterval(() => {

    // buscar hora do sistema
    let time = new Date();

    // buscar elementos da nossa hora
    let hours = time.getHours().toString().padStart(2, "0");
    let minutes = time.getMinutes().toString().padStart(2, "0");
    let seconds = time.getSeconds().toString().padStart(2, "0");

    digits[0].style.backgroundImage = `url(./digitos/${hours[0]}.png)`;
    digits[1].style.backgroundImage = `url(./digitos/${hours[1]}.png)`;
    
    digits[3].style.backgroundImage = `url(./digitos/${minutes[0]}.png)`;
    digits[4].style.backgroundImage = `url(./digitos/${minutes[1]}.png)`;

    digits[6].style.backgroundImage = `url(./digitos/${seconds[0]}.png)`;
    digits[7].style.backgroundImage = `url(./digitos/${seconds[1]}.png)`;

}, 1000);

setInterval(() => {

    // alternar os elementos visuais dos :
    let url = symbol ? 'url(./digitos/dots_on.png)' : 'url(./digitos/dots_off.png)';
    digits[2].style.backgroundImage = url;
    digits[5].style.backgroundImage = url;
    symbol = !symbol;

}, 500);