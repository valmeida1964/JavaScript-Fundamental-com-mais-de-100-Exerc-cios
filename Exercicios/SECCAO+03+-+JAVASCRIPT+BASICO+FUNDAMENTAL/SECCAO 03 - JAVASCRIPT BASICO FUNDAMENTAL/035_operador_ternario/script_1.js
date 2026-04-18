// O operador ternário é uma forma de simplificar o uso do if e else em JavaScript.
// Ele é chamado de ternário porque tem três partes:
// 1. A condição a ser avaliada (ex: x > y)
// 2. O valor a ser retornado se a condição for verdadeira (ex: 'x é maior que y')
// 3. O valor a ser retornado se a condição for falsa (ex: 'x não é maior que y')

// É também conhecido como operador condicional ou operador de condição.

let myName = 'John';

console.log(myName === 'John' ? 'Hello John' : 'Hello visitor'); // Hello John

myName = 'Jane';

console.log(myName === 'John' ? 'Hello John' : 'Hello visitor'); // Hello visitor

// por vezes o operador ternário é usado para atribuir um valor a uma variável

let age = 10;

let canDrive = age >= 18 ? true : false;
console.log(canDrive);

// O operador ternário é muito usado em frameworks do ecossistema de JavaScript, 
// como React, Angular e Vue.js, para renderizar componentes ou elementos de forma condicional.