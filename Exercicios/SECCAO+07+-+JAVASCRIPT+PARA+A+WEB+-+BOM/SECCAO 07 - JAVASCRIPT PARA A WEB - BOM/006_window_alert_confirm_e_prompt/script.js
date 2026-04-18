/* 
O objeto window tem associado a si três métodos que permitem interagir com o utilizador:
- alert(): exibe uma caixa de diálogo com uma mensagem e um botão "OK".
- confirm(): exibe uma caixa de diálogo com uma mensagem e dois botões "OK" e "Cancelar".   
- prompt(): exibe uma caixa de diálogo com uma mensagem, um campo de entrada de texto e dois botões "OK" e "Cancelar".
*/

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

// alert - apenas aceita o parâmetro de mensagem
btn1.addEventListener("click", () => {
    alert("Olá, Mundo!");
});
// o alert() não retorna nada, apenas exibe a mensagem e aguarda o utilizador clicar no botão "OK".
// O código só continua a ser executado após o utilizador clicar no botão "OK".

// confirm - aceita o parâmetro de mensagem e retorna true ou false
btn2.addEventListener("click", () => {
    const result = confirm("Deseja continuar?");
    if (result) {
        alert("O utilizador clicou em OK");
    } else {
        alert("O utilizador clicou em Cancelar");
    }
});

// prompt - aceita o parâmetro de mensagem e retorna o valor introduzido pelo utilizador ou null
btn3.addEventListener("click", () => {
    const name = prompt("Qual é o seu nome?");
    if (name) {
        alert(`Olá, ${name}!`);
    } else {
        alert("O utilizador não introduziu nenhum nome.");
    }

    // o prompt() também aceita um segundo parâmetro que define o valor padrão do campo de entrada de texto
    // const name = prompt("Qual é o seu nome?", "Nome padrão");

    // o prompt() retorna null se o utilizador clicar no botão "Cancelar" ou fechar a caixa de diálogo
});