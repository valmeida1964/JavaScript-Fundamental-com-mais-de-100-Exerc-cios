// O ciclo for...of é utilizado para iterar sobre objetos iteráveis, 
// como arrays, strings, maps, sets e outros objetos que implementam o protocolo de iteração.
// Ele permite acessar os valores diretamente, sem precisar usar índices ou chaves.

const myName = "John";

// apresenta os caracteres da string myName
for (let c of myName) {
    console.log(c);
}

const myArray = [1, 2, 3, 4, 5, 100, 1000];

// apresenta os valores do array
for (let value of myArray) {
    console.log(value);
}

// Se achas que as instruções se estão a complicar, não te preocupes!
// Todos os conceitos que aprendeste até agora vão ser aplicados em exercícios práticos.
// Com uma prática consistente, vais dominar todos estes elementos e muito mais.