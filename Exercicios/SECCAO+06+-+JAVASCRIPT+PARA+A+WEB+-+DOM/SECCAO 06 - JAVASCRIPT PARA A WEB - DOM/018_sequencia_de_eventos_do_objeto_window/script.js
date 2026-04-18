/* 
Antes de começar a falar sobre eventos dos elementos, vamos falar sobre eventos do objeto window.
O objeto window é o objeto global do JavaScript, ou seja, é o objeto que representa a janela do navegador.
Nada melhor que começar por aí.

Quando uma página começa a ser carregada, o objeto window dispara um evento chamado load.
Esse evento é disparado quando todos os elementos da página foram carregados, ou seja, quando a página está pronta para ser manipulada.
*/

// vamos analisar qual é a sequência de etapas pela qual a página passa.

// esta seria a sequência de etapas normais se fosse tudo sequencial.
// MAS NÃO É ASSIM QUE FUNCIONA.

console.clear();
console.log('1. Início do carregamento da página');

document.addEventListener('DOMContentLoaded', function(){
  console.log("2. Evento DOMContentLoaded: A estrutura de HTML foi completamente carregada e analisada");
});

window.addEventListener('load', function(){
  console.log("3. Evento load da Window: Todos os recursos (imagens, scripts, css, etc.) foram carregados completamente");
  console.log("4. Carregamento da página concluído");
});

console.log('5. Código JavaScript após a definição dos eventListeners');

/* 
Saber exatamente quando cada evento é disparado é muito importante para que possamos manipular a página da forma que quisermos.
Neste caso, podemos usar o evento load para executar um código JavaScript que dependa de todos os elementos da página terem sido carregados.
Vamos ver um exemplo no próximo vídeo.
*/
