/* 
Com o JavaScript, podemos adicionar HTMl ao DOM de várias formas.
1. Usando o método insertAdjacentHTML() - insere HTML em uma posição específica em relação a um elemento existente no DOM.
2. Usando o método innerHTML - substitui o conteúdo HTML de um elemento existente no DOM.
3. Usando o método createElement() - cria um novo elemento HTML e o adiciona ao DOM.

nota: neste caso, o elemento não é adicionado ao DOM, apenas criado.
Para adicionar o elemento ao DOM, é necessário usar outros métodos, como appendChild() ou insertBefore().

Neste exemplo vamos ver como adicionar HTML ao DOM
*/

let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let div1 = document.querySelector("#div1");

// para adicionar HTML a elemento da página
p1.innerHTML = p1.innerHTML + ' <strong>Texto Adicionado</strong>';

// vamos alterar a cor da palavra "amet"
p1.innerHTML = p1.innerHTML.replace('amet', '<span class="text-red-500">amet</span>');

// inserir quebra de linha
p1.innerHTML = p1.innerHTML.replace('elit.', 'elit.<br>');

// vamos adicionar html adjacente ao elemento div1
/* 
vamos usar o método insertAdjacentHTML() para adicionar HTML ao elemento div1
as posições possíveis são:
1. beforebegin - antes do elemento
2. afterbegin - depois do elemento, mas antes do conteúdo existente
3. beforeend - antes do final do elemento, mas depois do conteúdo existente
4. afterend - depois do elemento
*/

div1.insertAdjacentHTML('beforebegin', '<p>Text adicionado antes do DIV</p>');
div1.insertAdjacentHTML('afterbegin', '<p>Text adicionado antes do conteúdo do DIV</p>');
div1.insertAdjacentHTML('beforeend', '<p>Text adicionado depois do conteúdo do DIV</p>');
div1.insertAdjacentHTML('afterend', '<p>Text adicionado depois DIV</p>');

// para substituir o conteúdo HTML de um elemento existente no DOM, podemos usar o método innerHTML
p2.innerHTML = '<p class="text-blue-500">TEXTO ALTERADO NO <strong>PARÁGRAFO</strong></p>';

// remover o elemento
p3.innerHTML = "";