
class Human {

    // Atributos ou propriedades
    myName;
    myAge;

    // Construtor - função que é chamada automaticamente quando um objeto é criado
    constructor(name, age) {
        this.myName = name;
        this.myAge = age;
    }

    whoIAm() {
        console.log("Eu sou " + this.myName + " e tenho " + this.myAge + " anos de idade.");
    }
}

const person1 = new Human('John', 25);
const person2 = new Human('Mary', 30);
const person3 = new Human('Peter', 35);

person1.whoIAm();   // retorna 'Eu sou John e tenho 25 anos de idade.'
person2.whoIAm();   // retorna 'Eu sou Mary e tenho 30 anos de idade.'
person3.whoIAm();   // retorna 'Eu sou Peter e tenho 35 anos de idade.'

