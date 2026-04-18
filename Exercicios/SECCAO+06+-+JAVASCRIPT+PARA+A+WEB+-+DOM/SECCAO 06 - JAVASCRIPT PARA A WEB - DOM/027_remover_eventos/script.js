/* 
Da mesma forma que podemos adicionar eventos a um elemento, também podemos remover 
eventos de um elemento.

Isso vai permitir criar dinâmicas mais complexas, que podem ser úteis em alguns casos.
Vamos ver um exemplo simples.

1. Vamos adicionar eventos click a cada um dos três botões.
2. Os dois primeiros vão apresentar uma mensagem indicando que foram clicados.
3. O terceiro botão vai remover o evento click dos dois primeiros botões.

Uma nota IMPORTANTE:
Para poder remover um evento, temos que usar a mesma função que usamos para adicionar o evento.
Por esse motivo, não é possível remover eventos para funções anónimas, 
uma vez que não conseguimos referenciar a função anónima.
*/

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const handleClickBtn1 = showMessage.bind(null, "Botão 1 clicado");
const handleClickBtn2 = showMessage.bind(null, "Botão 2 clicado");

btn1.addEventListener('click', handleClickBtn1);
btn2.addEventListener('click', handleClickBtn2);

btn3.addEventListener('click', () => {
    btn1.removeEventListener('click', handleClickBtn1);
    btn2.removeEventListener('click', handleClickBtn2);
    alert("Eventos removidos do botão 1 e 2");
});

function showMessage(message){
    alert(message);
}

