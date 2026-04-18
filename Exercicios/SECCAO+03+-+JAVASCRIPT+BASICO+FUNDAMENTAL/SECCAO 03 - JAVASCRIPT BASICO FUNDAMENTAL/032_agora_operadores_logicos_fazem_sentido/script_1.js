// Agora faz sentido falar sobre operadores lógicos...

// AND

console.log(true && true); // true

console.log(true && false); // false

console.log(false && true); // false

console.log(false && false); // false

// Exemplo prático
let age = 80;

if (age >= 18 && age <= 65) {
    console.log('Podes dirigir um carro');
} else {
    console.log('Não podes dirigir um carro');
}