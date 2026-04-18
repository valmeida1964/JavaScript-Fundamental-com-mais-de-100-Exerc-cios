// exemplo de hoisting de função
console.log(sum(20, 10)); // exibe 30

function sum(a, b) {
    return a + b;
}

// no exemplo acima, sum é usada antes de ser declarada, mas ainda funciona por causa do hoisting.

// exemplo de hoisting de classe - erro
const human1 = new Human('John', 20);
console.log(human1.hello());

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        return "Olá, o meu nome é " + this.name + " e tenho " + this.age + " anos.";
    }
}