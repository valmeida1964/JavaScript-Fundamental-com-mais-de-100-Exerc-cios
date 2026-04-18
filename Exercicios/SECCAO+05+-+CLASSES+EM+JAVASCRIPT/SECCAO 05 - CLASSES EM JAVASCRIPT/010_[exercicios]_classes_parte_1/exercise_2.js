/* 
    Crie uma classe Human com as propriedades nome e idade.
    A classe deve conter um método que devolva a frase:
    "Olá, o meu nome é [nome] e tenho [idade] anos."
    Crie dois objetos desta classe e teste o método criado.
*/

class Human {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    hello(){
        return "Olá, o meu nome é " + this.name + " e tenho " + this.age + " anos.";
    }
}

let humano1 = new Human("João", 52);
let humano2 = new Human("Carlos", 35);

console.log(humano1.hello());
console.log(humano2.hello());