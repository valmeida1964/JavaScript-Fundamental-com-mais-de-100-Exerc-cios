/* 
    Funções
*/

function sum(a, b = 10) {
    return a + b;
}

// o parâmetro b é opcional

console.log(sum(5));    // retorna 15

console.log(sum(5, 105));    // retorna 110

// NOTA: os parâmetros opcionais, preferencialmente, devem ser os últimos parâmetros da função

function show(a = 10, b) {
    return [a, b];
}

console.log(show(5));   // retorna [5, undefined]
console.log(show(5, 15));   // retorna [5, 15]

