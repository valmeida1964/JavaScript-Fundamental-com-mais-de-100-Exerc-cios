// A iteração for in é utilizada para iterar sobre as propriedades
// de um objeto. O loop for in percorre todas as propriedades enumeráveis

const human = {
    name: "John",
    age: 23,
    weight: 60.5
};

// apresenta as propriedades do objeto human
for (let property in human) {
    console.log(property);
}

// apresenta os valores das propriedades do objeto human
for (let property in human) {
    console.log(human[property]);
}

// apresenta as propriedades e valores do objeto human
for (let property in human) {
    console.log(property + " -> " + human[property]);
}

