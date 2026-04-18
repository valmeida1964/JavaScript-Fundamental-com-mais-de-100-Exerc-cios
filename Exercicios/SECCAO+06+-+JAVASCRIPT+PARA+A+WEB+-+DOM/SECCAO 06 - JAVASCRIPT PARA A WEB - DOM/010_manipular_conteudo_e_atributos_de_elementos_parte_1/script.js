/* 
Independentemente do tipo de selector de elemento, vamos ver como podemos 
manipular o conteúdo e os atributos de um elemento.
*/

// vamos alterar o texto de um elemento
document.querySelector('#titulo').innerHTML = "FORMULÁRIO DE REGISTO";
// ou
document.querySelector('#titulo').textContent = "FORMULÁRIO DE REGISTO";

// alterar o texto do label para adicionar html pelo meio
document.querySelector('label[for="nome"]').textContent = 'Nome completo <strong>(username)</strong>:';
// ou
document.querySelector('label[for="nome"]').innerHTML = 'Nome completo <strong>(username)</strong>:';

// alterar o valor de um input  
document.querySelector('input[name="nome"]').value = "João Ribeiro";

// vamos colocar o foco no input email
document.querySelector('input[name="email"]').focus();

// inserir a mesma senha nos inputs de senha e confirmar senha
let senha = "123456";
document.querySelectorAll('input[type="password"]').forEach( input => {
    input.value = senha;
});