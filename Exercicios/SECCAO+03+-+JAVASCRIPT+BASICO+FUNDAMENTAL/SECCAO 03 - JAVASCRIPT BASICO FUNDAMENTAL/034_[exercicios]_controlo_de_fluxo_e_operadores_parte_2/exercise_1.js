/*
    1. Crie duas variáveis: uma numérica 'score' e uma string 'result'.
    2. Atribua os valores 50 e '50' às variáveis, respectivamente.
    3. Crie uma estrutura condicional que verifique se os valores são iguais ou não, e exiba uma mensagem.
*/

let score = 50;
let result = '50';

// comparar valores
if(score == result){
    console.log('(1) Os valores são iguais.');
}

// comparar os valores e os tipos
if(score === result){
    console.log('(2) Os valores são iguais e os tipos também.');
}

// comparar os valores e os tipos
if(score !== result){
    console.log('(3) Os valores são iguais mas os tipos são diferentes.');
}

