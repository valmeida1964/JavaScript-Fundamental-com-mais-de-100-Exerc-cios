const person = {
    name: 'John',
    age: 30
};

// Object.keys
console.log(Object.keys(person)); // exibe ['name', 'age']

// Object.values
console.log(Object.values(person)); // exibe ['John', 30]

// Object.entries
console.log(Object.entries(person)); // exibe [['name', 'John'], ['age', 30]]

// Object.assign
const person2 = Object.assign({}, person); // copia person para person2

// Object.freeze
Object.freeze(person); // impede alterações em person
// person.name = 'Mary'; // erro

// Object.seal
Object.seal(person); // impede que novas propriedades sejam adicionadas a person
// person.height = 1.8; // erro

// Object.isFrozen
console.log(Object.isFrozen(person)); // exibe true

// Object.isSealed
console.log(Object.isSealed(person)); // exibe true
