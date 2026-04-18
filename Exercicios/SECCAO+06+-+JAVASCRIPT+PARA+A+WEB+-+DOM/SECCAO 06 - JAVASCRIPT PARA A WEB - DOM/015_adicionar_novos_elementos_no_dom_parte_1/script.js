/* 
O JavaScript permite criar novos elementos HTML e adicioná-los ao DOM.
Para isso vamos usar o método createElement() que pertence à API do DOM.
Esse método cria um novo elemento HTML, mas não o adiciona ao DOM. 
Para adicionar o elemento ao DOM, é necessário usar outros métodos
*/

// vamos buscar os elementos do DOM
let p1 = document.querySelector('#p1');
let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
let div3 = document.querySelector('#div3');

// vamos criar um parágrafo e adicionar ao DOM
let novoParagrafo = document.createElement('p');
novoParagrafo.innerHTML = "Novo parágrafo adicionado ao DOM";
novoParagrafo.classList.add('text-red-500');
div1.appendChild(novoParagrafo);

// Atenção: clonar um elemento para outro:
// let p2 = p1.cloneNode(true);
// div1.appendChild(p2);

let novoParagrafo1 = document.createElement('p');
novoParagrafo1.innerHTML = "Novo parágrafo adicionado ao DOM";
novoParagrafo1.classList.add('text-red-500');

let novoParagrafo2 = document.createElement('p');
novoParagrafo2.innerHTML = "Novo parágrafo adicionado ao DOM";
novoParagrafo2.classList.add('text-green-500');

let novoParagrafo3 = document.createElement('p');
novoParagrafo3.innerHTML = "Novo parágrafo adicionado ao DOM";
novoParagrafo3.classList.add('text-blue-500');

// adicionar antes do div2
div2.parentNode.insertBefore(novoParagrafo1, div2);

// adicionar dentro do div2
div2.appendChild(novoParagrafo2);

// adicionar depois do div2
div2.parentNode.insertBefore(novoParagrafo3, div2.nextSibling);