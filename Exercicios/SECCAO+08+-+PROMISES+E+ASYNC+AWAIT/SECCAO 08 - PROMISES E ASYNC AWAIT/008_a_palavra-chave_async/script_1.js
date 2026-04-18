/* 
A palavra-chave async permite definir uma função que lida com operações assíncronas.
Para definir uma função async, podes usar a palavra-chave async antes da palavra-chave function.
*/

// Exemplo
async function sayHello() {
    return "Hello";
}

/* 
Todas as funções async devolvem uma promise.
Se a função devolver um valor, a promise será resolvida com esse valor.

Para mostrar o resultado da função, podes usar o método .then().
*/

sayHello().then(console.log); // Hello