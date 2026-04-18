// nullish coalescing operator (??) é um operador lógico que retorna o operando
// do lado direito quando o operando do lado esquerdo é null ou undefined.
// Este operador é útil para definir valores padrão quando uma variável
// pode ser null ou undefined.

// É um operador muito usado no ecossistema do JavaScript,
// especialmente em bibliotecas e frameworks modernos como React, Vue e Angular.

// exemplo 1
let number = null;
console.log(number ?? 100); // 100

// exemplo 2
let number2 = undefined;
console.log(number2 ?? 100); // 100

// exemplo 3
let number3 = 123;
console.log(number3 ?? 100); // 123

// exemplo 4
let number4 = 0;
console.log(number4 ?? 100); // 0

// exemplo 5
let number5 = "";
console.log(number5 ?? 100); // ""

// exemplo 6
let number6 = false;
console.log(number6 ?? 100); // false

// definindo uma variável a partir de outra
let number7 = null;
let number8 = number7 ?? 100;
console.log(number8);