// estão também disponíveis operadores unários de incremento e decremento, 
// que são usados para aumentar ou diminuir o valor de uma variável em 1 unidade.

let num = 10;

// incremento
num++;                                  // 10 + 1 = 11

// decremento
num--;                                  // 11 - 1 = 10

// presta atenção nos exemplos seguintes:
num = 100;

// incremento antes da apresentação do valor
console.log(++num);                     // 100 + 1 = 101
// mas se fizer assim:
console.log(num++);                     // 101 primeiro e só depois 101 + 1 = 102

// decremento antes da apresentação do valor
console.log(--num);                     // 102 - 1 = 101
// mas se fizer assim:
console.log(num--);                     // 101 primeiro e só odepois 101 - 1 = 100