/* 
Porque é que precisamos de Promises em JavaScript?
Vamos assumir uma função que devolve uma lista de utilizadores.
Cada utilizador é um objeto com as propriedades nome e idade.
*/

function getUsers(){
    return [
        { name: "Joao", age: 25 },
        { name: "Luis", age: 35 },
        { name: "Carlos", age: 45 },
    ];
}

/* 
Se quisermos encontrar um utilizador com um nome específico, podemos usar a seguinte função.
*/

function findUser(name){
    const users = getUsers();
    return users.find( user => user.name === name);
}

/*
A função findUser armazena a lista de utilizadores numa variável (users) e depois usa o método find para encontrar o utilizador com o nome especificado.
Vamos encontrar um nome!
*/

console.log(findUser("Luis"));

/*
A função funciona como esperado e devolve o utilizador com o nome 'Jack'.
Mas faz isso de forma síncrona. E se quisermos obter os utilizadores de um servidor?
A função getUsers pode demorar algum tempo a obter os utilizadores do servidor.
*/