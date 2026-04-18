// OR   
console.log(true || true); // true

console.log(true || false); // true

console.log(false || true); // true

console.log(false || false); // false

// Exemplo prático

let age = 10;

if (age < 18 || age > 65) {
    console.log('Não podes dirigir um carro');
} else {
    console.log('Podes dirigir um carro');
}