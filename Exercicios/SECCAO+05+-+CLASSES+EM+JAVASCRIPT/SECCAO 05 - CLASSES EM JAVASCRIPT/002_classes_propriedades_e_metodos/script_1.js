class Human {

    // propriedades podem ser definidas no construtor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // metodos
    speak() {
        console.log("Olá, o meu nome é " + this.name + " e tenho " + this.age + " anos de idade.");
    }

    jump() {
        console.log(this.name + " está a saltar...");
    }   

    eat(whatFood) {
        console.log(this.name + " está a comer " + whatFood + "...");
    }
}

let person1 = new Human("John", 25);
let person2 = new Human("Mary", 30);

// chamando os métodos dos objetos
person1.speak();
person2.speak();

person1.jump();
person2.jump();

person1.eat("pizza");
person2.eat("fruta");