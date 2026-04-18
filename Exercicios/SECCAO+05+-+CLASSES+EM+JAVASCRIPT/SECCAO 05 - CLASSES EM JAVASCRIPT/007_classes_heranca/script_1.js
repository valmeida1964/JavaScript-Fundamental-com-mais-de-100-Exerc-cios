// Em JavaScript, a herança é um conceito fundamental da programação orientada a objetos.
// Permite que uma classe herde propriedades e métodos de outra classe, 
// promovendo a reutilização de código e a criação de hierarquias de classes.
// A herança é implementada usando a palavra-chave `extends`.
// A classe que herda é chamada de "subclasse" ou "classe filha",
// enquanto a classe da qual herda é chamada de "superclasse" ou "classe pai".

// Herança
class Animal {

    name = "";
    species = "";

    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    identify() {
        console.log("Sou um " + this.species + " e o meu nome é " + this.name);
    }
}

// a classe Dog herda as propriedades e métodos da classe Animal
class Dog extends Animal {

    // a classe Dog tem um novo método
    bark() {
        console.log("woof woof");
    }
}

// a classe Cat herda as propriedades e métodos da classe Animal
class Cat extends Animal {

    // a classe Cat tem um novo método
    meow() {
        console.log("meow");
    }
}


let dog1 = new Dog("Bob", "cão");
dog1.identify();    // Sou um cão e o meu nome é Bob
dog1.bark();        // woof woof

let cat1 = new Cat("Mia", "gato");
cat1.identify();    // Sou um gato e o meu nome é Mia
cat1.meow();        // meow