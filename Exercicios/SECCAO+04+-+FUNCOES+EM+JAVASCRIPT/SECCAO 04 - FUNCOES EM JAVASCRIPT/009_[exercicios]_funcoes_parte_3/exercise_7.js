/*
    Crie uma função que retorne se um número é par ou ímpar.
    Depois, crie um loop de 10 a 20, e exiba se o número atual é ímpar ou par.
*/

function evenOrOdd(number){
    if(number % 2 === 0){
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

for(let i = 10; i <= 20; i++){
    console.log(i + " é " + evenOrOdd(i));
}