// A estrutura de controlo if...else é uma das mais simples 
// e mais utilizadas em programação.
// Ela permite executar um bloco de código se uma condição for verdadeira,
// e outro bloco de código se a condição for falsa.

let temperature = 20;

console.log("Vamos ver como está o tempo!");

// instrução if simples
if(temperature == 20) {
    console.log("Estão 20 graus!");
}

// instrução if...else
if (temperature <= 0) {
    console.log("Está abaixo de zero!");
} else {
    console.log("Está acima de zero!");
}

// instrução if...else if...else
if (temperature <= 0) {
    console.log("Está muito frio!");
} else if (temperature <= 10) {
    console.log("Está frio!");
} else if (temperature <= 20) {
    console.log("Está ameno!");
} else if (temperature <= 30) {
    console.log("Está quente!");
} else {
    console.log("Está muito quente!");
}