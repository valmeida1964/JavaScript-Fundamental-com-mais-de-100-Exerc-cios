// Infinity
// A propriedade Infinity representa o infinito matemático, que é maior do que qualquer número.

// exemplo 1
console.log(Infinity); // Infinity
console.log(typeof Infinity); // number
console.log(Infinity + 1); // Infinity
console.log(Infinity - 1); // Infinity
console.log(Infinity * 1); // Infinity

// exemplo 2
let number = 123.456;
console.log(number / 0); // Infinity
console.log(number / -0); // -Infinity

// quando ocorre o valor Infinity?
// exemplo 1 - divisão por zero
console.log(1 / 0); // Infinity

// exemplo 2 - divisão por zero negativo
console.log(1 / -0); // -Infinity

// exemplo 3 - overflow
console.log(1.7976931348623157e+308 * 2); // Infinity

// exemplo 4 - infinito positivo
console.log(Number.MAX_VALUE * 2); // Infinity

// exemplo 5 - infinito negativo
console.log(-Number.MAX_VALUE * 2); // -Infinity

// tenha cuidado ao lidar com Infinity