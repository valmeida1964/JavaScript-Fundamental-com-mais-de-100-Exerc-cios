/* 
Vamos falar sobre eventos no DOM.
Eventos são ações que ocorrem no navegador, como cliques, teclas pressionadas, entre outros. 
Esses eventos podem ser capturados e manipulados usando JavaScript.
*/

function alertar(){
    alert("Você clicou no botão 1!");
}

// Este tipo de definição de evento é chamada de "atributo de evento".
// De acordo com o JS mais moderno, não é recomendado usar atributos de evento no HTML.
// A recomendação é usar o método addEventListener() para adicionar eventos aos elementos do DOM.

document.querySelector("#botao2").addEventListener('click', function(){
    alert("Você clicou no botão 2!");
});

// o botão 3 tem uma outra particularidade.
// quanto o cursor passa por cima do botão, o botão muda de cor e quando o mouse sai do botão, a cor volta ao normal.
// Para isso, usamos o método addEventListener() para adicionar dois eventos: mouseover e mouseout.
document.querySelector("#botao3").addEventListener('mouseover', function(){
    this.classList.add('bg-yellow-500');
});

document.querySelector("#botao3").addEventListener('mouseout', function(){
    this.classList.remove('bg-yellow-500');
});