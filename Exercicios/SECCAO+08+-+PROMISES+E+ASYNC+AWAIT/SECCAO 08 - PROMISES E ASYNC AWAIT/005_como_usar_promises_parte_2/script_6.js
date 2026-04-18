/* 
E existe também o .finally
*/

let success = true; // controla o sucesso da promise

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

getUsers().then(
    (users) => console.log(users)
).catch(
    (error) => console.log(error)
).finally(
    () => console.log('Promise completed')
);