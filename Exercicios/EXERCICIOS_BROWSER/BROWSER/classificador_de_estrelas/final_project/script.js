/* 
Classificador de Estrelas
--------------------------------------------------------
Vamos simular um classificador de estrelas, onde o usuário pode clicar em estrelas para classificá-las de 1 a 5.
Lembrando que, ao clicar na estrela mais à direita, todas as estrelas têm que ficar amarelas.
Se clicar na estrela mais à esquerda, todas as restantes estrelas têm que ficar cinza.
NOTA: Não existe classificação 0 estrelas.

Referência para html entities:
    &star; - estrela vazia
    &starf; - estrela cheia

https://www.toptal.com/designers/htmlarrows/
*/

// buscar todas as estrelas
const stars = document.querySelectorAll('[id^="star"]');
let classification = null;

// adicionar eventos às estrelas
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        ligarEstrelas(index);
    });
});

function desligarEstrelas(){
    stars.forEach(star => {
        star.innerHTML = "&star;";
        star.classList.remove('text-yellow-500');
    });
}

function ligarEstrelas(index){

    desligarEstrelas();

    for(let i = 0; i <= index; i++){
        stars[i].innerHTML = "&starf;";
        stars[i].classList.add("text-yellow-500");
    }

    // apresentar a classificação
    classification = index + 1;
    console.log(classification);
}