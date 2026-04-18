/*
Vamos partir do formulário do ficheiro HTML e vamos ver como podemos
selecionar os elementos do DOM que estão dentro do formulário.
*/

// selecionar o input do nome
let inputNome;
inputNome = document.querySelector('#nome');    // seleciona o input com id nome
inputNome = document.querySelector('input[name="nome"]'); // seleciona o input com name nome
inputNome = document.querySelector('input[type="text"]'); // seleciona o input com type text
inputNome = document.querySelector('input'); // seleciona o primeiro input do formulário
inputNome = document.querySelector('form input'); // seleciona o primeiro input do formulário
inputNome = document.querySelector('form input[name="nome"]'); // seleciona o input com name nome dentro do formulário
inputNome = document.querySelector('form input[type="text"]'); // seleciona o input com type text dentro do formulário
inputNome = document.querySelector('form input[type="text"][name="nome"]'); // seleciona o input com type text e name nome dentro do formulário
inputNome = document.querySelector('form input[name="nome"][type="text"]'); // seleciona o input com name nome e type text dentro do formulário

console.log(inputNome); // imprime o input do nome no console

// buscar todos os checkboxes do formulário
let checkboxes;
checkboxes = document.querySelectorAll('input[type="checkbox"]'); // seleciona todos os inputs com type checkbox
checkboxes = document.querySelectorAll('form input[type="checkbox"]'); // seleciona todos os inputs com type checkbox dentro do formulário
checkboxes = document.querySelectorAll('input[name^="check_"]'); // seleciona todos os inputs com name que começa por checkbox
checkboxes = document.querySelectorAll('input[name*="ter"]'); // seleciona todos os inputs com name que contém 'ter'
checkboxes = document.querySelectorAll('input[name$="dade"]'); // seleciona todos os inputs com name que termina por 'dade'

// NOTA: neste caso, as checkboxes 'check_privacidade' e 'check_publicidade' têm o nome que termina por 'dade'

/checkboxes = document.querySelectorAll('input[name="check_privacidade"], input[name="check_publicidade"]'); // seleciona as checkboxes com name 'check_privacidade' e 'check_publicidade'

console.log(checkboxes); // imprime as checkboxes no console

// IMPORTANTE: Outros exemplos de seletores que podem vir a ser usados no decorrer do curso
// quando for necessário para resolver exercícios ou desafios.

