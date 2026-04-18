/*
    Crie uma função para calcular a soma de 2 números.
    Agora crie um loop for com 10 iterações, e dentro do loop chame a função para somar
    o índice do loop com o número 5.
*/

// solução 1
/*
function sum(a, b){
    return a + b;
}
*/

// solução 2
// const sum = (a,b) => a + b;

// solução 3
const sum = a => a + 5;

for(let num = 1; num <= 10; num++){
    // para a solução 1 e 2
    // console.log(sum(num, 5));

    // para a solução 3
    console.log(sum(num));
}