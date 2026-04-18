// Typeof é um operador do JavaScript que retorna o tipo de dado de uma variável ou expressão.
// Se quisermos no nosso código saber o tipo de dado que uma variável armazena, podemos usar o operador typeof.
// Pode não parecer inicialmente muito útil, mas é uma ferramenta poderosa para depuração e validação de dados.

let myString = 'Hello World!';
let myNumber = 123;
let myBoolean = true;
let myObject = {
    name: 'John',
    age: 31,
    isMarried: false
};

console.log(typeof myString);   // string
console.log(typeof myNumber);   // number
console.log(typeof myBoolean);  // boolean
console.log(typeof myObject);   // object
