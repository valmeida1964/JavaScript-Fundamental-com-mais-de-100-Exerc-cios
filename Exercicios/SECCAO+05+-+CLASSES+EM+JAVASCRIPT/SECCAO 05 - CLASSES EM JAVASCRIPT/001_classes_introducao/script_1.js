// Vamos perceber o que são classes e como funcionam em JavaScript.
// As classes são uma forma de estruturar o código e organizar
// funcionalidades em JavaScript. Elas permitem criar objetos com 
// propriedades e métodos, facilitando a reutilização de código e
// a manutenção do mesmo. As classes são uma forma de programar
// orientado a objetos, onde podemos criar objetos que representam
// entidades do mundo real e definir comportamentos para esses objetos.

class Human {

    // propriedade de uma classe
    name;

    // métodos de uma classe
    talk() {
        console.log('Estou a falar');
    }

    jump() {
        console.log('Estou a saltar');
    }

    walk() {
        console.log('Estou a andar');
    }
}

// criando um objeto a partir da classe Human.
let person = new Human();

// aceder a propriedade name do objeto person
person.name = 'João';
console.log(person.name);  // retorna 'João'

// aceder aos métodos do objeto person
person.talk();  // retorna 'Estou a falar'
person.jump();  // retorna 'Estou a saltar'
person.walk();  // retorna 'Estou a andar'