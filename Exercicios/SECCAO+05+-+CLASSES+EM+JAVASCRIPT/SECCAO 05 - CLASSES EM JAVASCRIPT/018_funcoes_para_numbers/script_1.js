let number = 123.456;

// toFixed() - devolve uma string com o número escrito com um número especificado de casas decimais
console.log(number.toFixed(0)); // 123
console.log(number.toFixed(1)); // 123.5
console.log(number.toFixed(2)); // 123.46

// toPrecision() - devolve uma string com o número escrito com um comprimento especificado
console.log(number.toPrecision()); // 123.456
console.log(number.toPrecision(1)); // 1e+2
console.log(number.toPrecision(2)); // 1.2e+2

// toString() - devolve um número como uma string
console.log(number.toString()); // 123.456
console.log(typeof number.toString()); // string

// toExponential() - devolve uma string com o número arredondado e escrito em notação exponencial
console.log(number.toExponential()); // 1.23456e+2
console.log(number.toExponential(1)); // 1.2e+2

// toLocaleString() - devolve uma string com uma representação do número sensível ao idioma
console.log(number.toLocaleString()); // 123.456
console.log(number.toLocaleString("pt-BR")); // 123,456
