// NaN significa "Not a Number" e é um valor especial em JavaScript 
// que representa um valor que não é um número válido.
// NaN é um valor numérico, mas não é igual a nenhum outro valor, 
// incluindo ele mesmo. Isto significa que NaN não é igual a NaN.

// Sim, é estranho, mas é verdade!
// NaN é frequentemente o resultado de operações que não produzem
// um número válido. Vejamos alguns exemplos:

console.log(NaN); // NaN
console.log(typeof NaN); // number

// Exemplo de NaN 2
let number = 123.456;
console.log(number / "hello"); // NaN

// Exemplo de NaN 3
console.log(Math.sqrt(-1)); // NaN

// Exemplo de NaN 4
console.log(0 / 0); // NaN

// Exemplo de NaN 5
console.log(NaN == NaN); // false

// Exemplo de NaN 6
console.log(isNaN(NaN)); // true

// Exemplo de NaN 7
console.log(isNaN(123)); // false

// Exemplo de NaN 8
console.log(isNaN("hello")); // true

// tenha cuidado com NaN. Pode causar erros no seu programa