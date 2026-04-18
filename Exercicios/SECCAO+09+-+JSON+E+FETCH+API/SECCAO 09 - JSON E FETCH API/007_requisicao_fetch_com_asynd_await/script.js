/* 
Vamos regressar à API do Chuck Norris e fazer uma experiência diferente.
A ideia é usar a Fetch API no contexto de uma função assíncrona com o método async/await.
Vamos verificar que, ao usar o async/await, o pedido de resposta fica a aguardar
a resposta do servidor antes de continuar a execução do código.
*/

document.querySelector("#btn_piada").addEventListener('click', async () => {

    console.log('Passo 1');

    let response = await fetch("https://api.chucknorris.io/jokes/random");

    console.log('Passo 2');

    if(response.ok){
        // sucesso
        console.log('Passo 3 - resposta OK!');
        
        let data = await response.json();
        document.querySelector("#resultado").innerHTML = data.value;
        
    } else {
        // erro
        console.log('Passo 3 - resposta não OK!');
        document.querySelector("#resultado").innerHTML = "Erro na busca da piada";
    }

    console.log('Passo 4');

});