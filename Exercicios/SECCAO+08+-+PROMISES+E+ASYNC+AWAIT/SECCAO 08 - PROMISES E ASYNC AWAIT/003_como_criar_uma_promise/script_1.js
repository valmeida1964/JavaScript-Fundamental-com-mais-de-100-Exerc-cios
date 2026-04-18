/* 
Para criar um objeto promise, usamos o construtor Promise.
*/

let promise = new Promise((resolve, reject) => {

    // operação que demora algum tempo

    // retorna o estado
    if(success) {
        resolve(value);
    } else {
        reject(error);
    }
});

/* 
O construtor Promise aceita uma função de callback, frequentemente chamada de função executora.
A função executora aceita dois argumentos, resolve e reject, que também são funções de callback.

PS: 'resolve' e 'reject' são apenas nomes convencionais, podes usar qualquer nome que quiseres.

Se a operação for bem-sucedida, chamamos a função resolve com o valor.
Se a operação falhar, chamamos a função reject com um objeto de erro.

O estado de uma promise só pode mudar de pendente para cumprida ou rejeitada.
cumprida: a operação foi bem-sucedida -> resolve foi chamado
rejeitada: a operação falhou -> reject foi chamado

Quando uma promise muda de estado, chamando resolve ou reject, chamamos este novo "estado" de resolvido.

PS: não confundas o estado resolvido com o estado cumprido (função resolve).

Uma nota final: raramente criamos um objeto promise diretamente. Na maioria das vezes, 
usamos uma biblioteca que retorna um objeto promise.
*/