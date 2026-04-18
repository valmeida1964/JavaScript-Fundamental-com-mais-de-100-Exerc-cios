/* 
Vamos simular um atraso na função getUsers
*/

function getUsers(){
    setTimeout(() => {
        return [
            { name: "Joao", age: 25 },
            { name: "Luis", age: 35 },
            { name: "Carlos", age: 45 },
        ];
    }, 2000);
}

/*
A função getUsers agora utiliza a função setTimeout para simular um atraso de 2 segundos.
Vamos assumir que este foi o tempo necessário para obter os utilizadores do servidor. Uma consulta a uma base de dados, por exemplo.
*/

function findUser(name){
    const users = getUsers();
    return users.find( user => user.name === name);
}

console.log(findUser("Luis"));

/*
A função findUser agora devolve undefined. 
A função getUsers não espera que os utilizadores sejam obtidos.
*/