/* 
Vamos aprender a selecionar elementos do DOM utilizando querySelector e querySelectorAll.

Em substituição do getElementById, getElementsByClassName e getElementsByTagName.
querySelector e querySelectorAll são métodos do objeto document que permitem selecionar
elementos do DOM de forma mais flexível e poderosa.

O seu principal segredo está na utilização de seletores CSS para encontrar os elementos desejados.
Com estes dois métodos, podemos selecionar elementos de forma mais precisa e eficiente,
mantendo o código mais limpo e fácil de entender.

Se não estás familiarizado com seletores CSS, não te preocupes! Vamos explicar tudo o que precisas de saber.
*/

// exemplo simples de seleção de um elemento com querySelector
const elemento1 = document.querySelector('#paragrafo');
console.log(elemento1);
elemento1.innerHTML = "ESTE FOI O ELEMENTO SELECIONADO";

/* 
# - Seleciona um elemento com o id
. - Seleciona um elemento com a classe
*/

const elemento2 = document.querySelector('.text-3xl');
console.log(elemento2);
elemento2.innerHTML = "ESTE FOI O ELEMENTO SELECIONADO";

// NOTA: se a seleção for por classe, o primeiro elemento encontrado será selecionado
// se houver mais de um elemento com a mesma classe, apenas o primeiro será selecionado

// se queremos selecionar todos os elementos com a mesma classe, tag, etc., temos que usar o querySelectorAll
let elementos = document.querySelectorAll('p'); // seleciona todos os elementos <p> do DOM
console.log(elementos);