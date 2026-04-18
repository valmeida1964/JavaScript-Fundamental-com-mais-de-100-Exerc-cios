/* 
Estas funções simulam uma chamada de API para obter o nome do cliente, a morada do cliente e o número de telefone do cliente.
A função setTimeout é usada para simular o atraso na chamada da API.
*/

function getClientName(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('João Ribeiro');
        }, 3000);
    });
}

function getClientAddress(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Viseu, Portugal');
        }, 2000);
    });
}

function getClientPhoneNumber(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('999999999');
        }, 1000);
    });
}

document.querySelector("#button1").addEventListener('click', async () => {
    const name = await getClientName();
    document.querySelector("#name").textContent = name;
});

document.querySelector("#button2").addEventListener('click', async () => {
    const address = await getClientAddress();
    document.querySelector("#address").textContent = address;
});

document.querySelector("#button3").addEventListener('click', async () => {
    const phoneNumber = await getClientPhoneNumber();
    document.querySelector("#phone").textContent = phoneNumber;
});

/* 
Se clicarmos nos botões da esquerda para a direita, os resultados serão exibidos em ordem inversa, porque as chamadas da API são assíncronas
e cada função tem um atraso de tempo diferente antes de ser resolvida.
*/