// Os operadores lógicos são usados para combinar expressões booleanas.
// Eles são frequentemente usados em estruturas de controle, como if, while e for
// que veremos mais adiante no curso.
// Mais uma vez, é muito importante entender como funcionam os operadores lógicos,
// pois eles são fundamentais para a lógica de programação e para a construção de algoritmos.

// AND (&&)
console.log(true && true);      // true
console.log(true && false);     // false
console.log(false && true);     // false
console.log(false && false);    // false

// OR (||)
console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || true);     // true
console.log(false || false);    // false

// NOT (!)
console.log(!true);             // false
console.log(!false);            // true

// Exemplo de uso de operadores lógicos em uma condição:
let num_1 = 5;
let num_2 = 10;

if (num_1 > 0 && num_2 > 0) {
    console.log("Ambas as condições são verdadeiras.");
} else {
    console.log("Pelo menos uma das condições é falsa");
}

// altera os valores de num_1 e num_2 para ver o resultado

// Em código mais avançado, podemos usar vários operadores lógicos na mesma expressão.
// São práticas que se tornam mais simples de aplicar com o tempo e com a prática.