/* 
Consumir uma promise: then, catch, finally

Para obter um valor de uma promise, quando esta é cumprida, chamamos o método .then() na promise.
O método .then() aceita dois argumentos: 
    1. uma função de callback para o caso de sucesso da promise (onFulfilled)
    2. uma função de callback para o caso de falha da promise (onRejected)

Vamos ver um exemplo:
*/

function getUsers(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                [
                    {name: "Joao", age: 25},
                    {name: "Luis", age: 35},
                    {name: "Carlos", age: 45},
                ]
            );
        }, 3000);
    });
}

function onFulfilled(users){
    console.log('Utilizadores: ', users);
}

const prom = getUsers();
prom.then(onFulfilled);