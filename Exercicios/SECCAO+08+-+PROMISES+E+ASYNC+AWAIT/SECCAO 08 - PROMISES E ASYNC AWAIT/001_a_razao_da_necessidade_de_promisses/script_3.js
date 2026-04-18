/* 
Uma forma de lidar com código assíncrono é usar callbacks.
*/

function getUsers(callback){
    
    setTimeout(() => {

        callback(
            [
                { name: "Joao", age: 25 },
                { name: "Luis", age: 35 },
                { name: "Carlos", age: 45 },
            ]
        );

    }, 2000);
}

function findUser(name, callback){
    getUsers( users => {
        const user = users.find(user => user.name === name);
        callback(user);
    });
}

// apresentar na consola o objeto com o nome específico
findUser("Luis", console.log);

/* 
A função getUsers agora aceita uma função de callback como argumento.
A função de callback é chamada com a lista de utilizadores após o atraso.
Funciona, mas torna o código mais difícil de ler e manter, e adiciona complexidade ao código.
Promises são uma forma melhor de lidar com código assíncrono.
*/