// muito importante: as regras matemáticas são aplicadas no JavaScript
// multiplicação e divisão são realizadas antes da adição e subtração
// o mesmo se aplica aos parênteses
// o operador de exponenciação tem a maior precedência
// expressões complexas são avaliadas da esquerda para a direita

// exemplo de precedência de operadores:

let num_1 = 10;
let num_2 = 5;
let num_3 = 2;

let result = num_1 + num_2 * num_3;     // 10 + 5 * 2 = 20
console.log(result);

// se você quiser que a adição seja realizada primeiro, use parênteses:
result = (num_1 + num_2) * num_3;       // (10 + 5) * 2 = 30