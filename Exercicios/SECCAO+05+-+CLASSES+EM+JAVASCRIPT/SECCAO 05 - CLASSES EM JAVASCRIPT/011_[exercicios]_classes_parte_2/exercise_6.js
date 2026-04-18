/* 
    Crie uma classe Human que tenha uma propriedade chamada name que seja privada.
    Crie um método chamado sayHello() que devolva "Olá, o meu nome é [name].".
    O método sayHello() não deve conter esta implementação. Deve criar
    outro método chamado prepareStatement(), que seja um método privado e devolva o texto para o sayHello(),
    e o sayHello() deve chamar o prepareStatement() para devolver o seu texto.
*/

class Human {

    #name;

    constructor(name){
        this.#name = name;
    }

    sayHello(){
        return this.#prepareStatement();
    }

    #prepareStatement(){
        return "Olá, o meu nome é " + this.#name + ".";
    }
}

const humano = new Human("João Ribeiro");
console.log(humano.sayHello());