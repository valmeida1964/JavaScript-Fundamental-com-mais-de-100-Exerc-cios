/* 
Como sabemos os elementos de HTML podem ser aninhados uns dentro dos outros.
Por essa razão, podemos ter alguns problemas de propagação de eventos.
A propagação de eventos é o processo pelo qual um evento é enviado para os elementos pai e filho.

No exemplo temos 3 divs aninhadas, cada uma com um evento de clique.
*/

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");

div1.addEventListener('click', (event) => {
    console.log("Div1 clicado!");
    event.stopPropagation();
});

div2.addEventListener('click', (event) => {
    console.log("Div2 clicado!");
    event.stopPropagation();
});

div3.addEventListener('click', (event) => {
    console.log("Div3 clicado!");
    event.stopPropagation();
});

// quando fazemos um clique no div mais interior, o evento de clique é enviado para o div mais exterior.
// Isso significa que o evento de clique é enviado para o div 3, depois para o div 2 e por último para o div 1.
// Isso é chamado de "propagação de eventos".
// A propagação de eventos pode ser controlada usando o método stopPropagation().

// Se quisermos parar a propagação do evento, podemos usar o método stopPropagation() no evento.
// Isso significa que o evento não será enviado para os elementos pai e filho.

