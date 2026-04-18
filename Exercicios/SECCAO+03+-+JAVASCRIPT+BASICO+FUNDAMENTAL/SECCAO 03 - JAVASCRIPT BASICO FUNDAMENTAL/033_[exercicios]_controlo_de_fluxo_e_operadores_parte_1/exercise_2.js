/* 
    1. Defina uma variável numérica 'number' e atribua a ela o valor 100.
    2. Crie uma estrutura condicional que verifique se o número é:
        - maior ou igual a 100
        - maior ou igual a 50 e menor que 100
        - menor que 50
*/

let number = 100;

if(number >= 100){
    console.log('O número é maior ou igual a 100');
} else if(number >= 50 && number < 100){
    console.log('O número é maior ou igual a 50 e menor que 100');
} else {
    console.log('O número é menor que 50');
}