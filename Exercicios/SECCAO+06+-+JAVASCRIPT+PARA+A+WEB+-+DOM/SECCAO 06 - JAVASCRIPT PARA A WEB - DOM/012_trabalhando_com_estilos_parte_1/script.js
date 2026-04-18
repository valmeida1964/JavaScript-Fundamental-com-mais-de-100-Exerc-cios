/* 
O JavaScript tem um conjunto de métodos para manipular os estilos de um elemento.
Quer se trate de CSS ou de estilos inline, o JavaScript pode ser usado para adicionar, remover ou alterar estilos em um elemento HTML.
No caso do CSS, o JavaScript pode ser usado para adicionar ou remover classes de um elemento HTML.
No caso dos estilos inline, o JavaScript pode ser usado para adicionar ou remover estilos inline de um elemento HTML.
*/

// Vamos buscar alguns elementos do DOM para manipular os estilos
let titulo = document.querySelector("#titulo");
let inputNome = document.querySelector('input[name="nome"]');
let inputEmail = document.querySelector('input[name="email"]');

// vamos olhar para os estilos de CSS
titulo.classList.forEach(classe => {
    console.log(classe);
});

console.log('-----------------------');

let classes = titulo.classList;
console.log(classes);

console.log('-----------------------');

if(titulo.classList.contains('text-xl')){
    console.log('O elemento tem a class text-xl')
} else {    
    console.log('O elemento não tem a class text-xl')
}

// classList contém um conjunto de métodos para adicionar, remover e alternar classes CSS de um elemento HTML
// classList.add() - adiciona uma ou mais classes CSS a um elemento HTML
// classList.remove() - remove uma ou mais classes CSS de um elemento HTML
// classList.toggle() - adiciona ou remove uma classe CSS de um elemento HTML, dependendo se a classe já existe ou não
// classList.replace() - substitui uma classe CSS por outra em um elemento HTML
// classList.item() - retorna o nome da classe CSS em uma posição específica

// classList.length - retorna o número de classes CSS em um elemento HTML
// classList.value - retorna uma string com todas as classes CSS de um elemento HTML

console.log('-----------------------');

console.log(`Total de classes: ${titulo.classList.length}`);
console.log(`Classes de CSS no título: ${titulo.classList.value}`);

// obter um array com todas as classes CSS do elemento
let classesArray = Array.from(titulo.classList);
console.log(classesArray);

// --------------------------------------------------------

// alterar a cor do texto do elemento
titulo.classList.replace('text-slate-500', 'text-red-500');

// adicionar classes de CSS ao elemento
titulo.classList.add('p-5', 'bg-yellow-200');

// alternar entre visível e invisível
function visivel(){
    titulo.classList.toggle('hidden');
}