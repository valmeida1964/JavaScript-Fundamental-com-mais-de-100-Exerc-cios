
// se as propriedades forem públicas, podemos acessá-las diretamente

class Person {

    // vamos definir uma propriedade pública name
    constructor(name) {
        this.name = name;
    }
}

let person1 = new Person("John");
console.log(person1.name); // John

// alterar o valor
person1.name = "Mary";

console.log(person1.name); // Mary

// Então para que servem os getters e setters?