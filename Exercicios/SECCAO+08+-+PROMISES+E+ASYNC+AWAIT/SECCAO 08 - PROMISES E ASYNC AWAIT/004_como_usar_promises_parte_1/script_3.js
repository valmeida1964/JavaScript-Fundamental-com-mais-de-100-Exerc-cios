/* 
O exemplo anterior devolve sempre valores com sucesso.
Mas e se a promise falhar?
Vamos simular uma falha na promise e ver como podemos lidar com isso.
*/

let success = false;

function getUsers(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success){
                // sucesso
                resolve(
                    [
                        {name: "Joao", age: 25},
                        {name: "Luis", age: 35},
                        {name: "Carlos", age: 45},
                    ]
                );
            } else {
                // falha
                reject("Falha ao obter os utilizadores.");
            }
        }, 3000);

    });
}

const onSuccess = users => {
    console.log('Utilizadores: ', users);
}

const onError = error => {
    console.log('Erro', error)
}

const prom = getUsers();
prom.then(onSuccess, onError);