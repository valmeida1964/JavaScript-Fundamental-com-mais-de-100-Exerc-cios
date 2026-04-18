/* 
Vamos tornar o código mais conciso utilizando a sintaxe de funções de seta (arrow functions).
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


const prom = getUsers();

prom.then( users => {
    console.log('Utilizadores: ', users);
});

// ou

getUsers().then(users => {
    console.log('Utilizadores: ', users);
});