/* 
Barra de progresso (versão 2)
--------------------------------------------------------
Criar uma barra de progresso que vai de 0 a 100% e depois apresenta a mensagem "concluído" 
*/

let barra = document.querySelector("#barra");
let concluido = document.querySelector("#concluido");
let step = 5;
let valorAtual = 0;
let valorSeguinte = step;
let milliseconds = 50;

setInterval(() => {
    barra.classList.replace(`bg-[length:${valorAtual}%]`, `bg-[length:${valorSeguinte}%]`);
    valorAtual = valorSeguinte;
    valorSeguinte += step;
    if(valorSeguinte > 100){
        concluido.classList.remove("hidden");
        clearInterval(this);
    }
}, milliseconds);