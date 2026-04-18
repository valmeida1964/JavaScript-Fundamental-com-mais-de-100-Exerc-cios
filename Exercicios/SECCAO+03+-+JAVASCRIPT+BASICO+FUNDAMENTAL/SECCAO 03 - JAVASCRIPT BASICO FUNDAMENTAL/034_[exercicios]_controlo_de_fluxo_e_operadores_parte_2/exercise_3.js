/*
    1. Crie duas variáveis numéricas 'number1' e 'number2'. Atribua a elas os valores que desejar.
    2. Crie uma terceira variável chamada 'operation' e atribua a ela um dos quatro símbolos de operações matemáticas.
    3. Crie uma estrutura condicional que execute operações diferentes dependendo da variável 'operation'.
*/

let number1 = 10;
let number2 = 20;
let operation = '+';

if(operation == '+'){
    console.log(number1 + number2);
} else if(operation == '-') {
    console.log(number1 - number2);
} else if(operation == '*') {
    console.log(number1 * number2);
} else if(operation == '/') {
    console.log(number1 / number2);
} else {
    console.log('Operação inválida!');
}