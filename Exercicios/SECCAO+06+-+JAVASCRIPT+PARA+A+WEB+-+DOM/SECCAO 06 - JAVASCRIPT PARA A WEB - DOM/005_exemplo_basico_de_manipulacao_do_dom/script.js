/* 
O que significa interação com o DOM?
Como fazemos com o JavaScript?
- buscar o elemento
- alterar atributos e propriedades do elemento
*/

const paragrafo = document.getElementById("paragrafo");

document.querySelector("#btn1").addEventListener("click", function() {
    paragrafo.innerHTML = "Texto alterado com JavaScript!";
})

document.querySelector("#btn2").addEventListener("click", function() {
    paragrafo.classList.add("text-red-500");
})

document.querySelector("#btn3").addEventListener("click", function() {
    paragrafo.classList.toggle("hidden");
})

