/* 
Se quisermos obter a mensagem de erro da promise, podemos usar o método .catch().
*/

let success = false; // controla o sucesso da promise

function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(success){
                // sucesso
                resolve([
                    { name: 'Joao', age: 25 },
                    { name: 'Luis', age: 35 },
                    { name: 'Carlos', age: 45 }
                ]);
            } else {
                // falha
                reject('Falha ao obter os utilizadores');
            }

        }, 2000);
    });
}

const prom = getUsers();

prom.catch( error => console.log(error));