// converter uma string para número
let score = '100';
console.log(Number(score)); // 100
// ou
console.log(parseInt(score)); // 100

// exemplo de conversão implícita
// o JavaScript faz a conversão implícita automaticamente quando necessário
let score1 = 100;
let score2 = '100';
console.log(score1 + score2); // 100100 - converte score1 para string e faz uma concatenação com score2
// este é um exemplo de conversão implícita

console.log(score1 + Number(score2)); // 200 - converte score2 para número e faz uma soma com score1
// este é um exemplo de conversão explícita

// veremos mais à frente o que são operadores matemáticos e como utilizá-los