// Vamos falar sobre uma estrutura de dados muito importante em JavaScript: os objetos.

// imagina que temos uma pessoa com nome, idade e peso
let personName = 'John';
let personAge = 30;
let personWeight = 88.6;

// vamos criar um objeto para representar essa pessoa
let person = {
    name: 'John',
    age: 30,
    weight: 88.6
};

// o objeto é uma coleção de propriedades. Cada propriedade tem uma chave e um valor.
// a chave é o nome da propriedade e o valor é o valor da propriedade.
// a chave e o valor são separados por dois pontos (:)
// as propriedades são separadas por vírgulas (,)
// o objeto é delimitado por chaves ({})

// para acessar as propriedades de um objeto, usamos a notação de ponto (.)
console.log(person.name); // John
console.log(person.age); // 30
console.log(person.weight); // 88.6

// também podemos acessar as propriedades de um objeto usando a notação de colchetes ([])
console.log(person['name']); // John
console.log(person['age']); // 30
console.log(person['weight']); // 88.6

// também podemos usar variáveis para acessar as propriedades de um objeto
let propertyName = 'name';
console.log(person[propertyName]); // John

// também podemos usar expressões para acessar as propriedades de um objeto
console.log(person['na' + 'me']); // John

// vamos voltar ao assunto de objetos mais tarde no curso
// isso é apenas uma introdução ao assunto, pois usaremos objetos muito no curso