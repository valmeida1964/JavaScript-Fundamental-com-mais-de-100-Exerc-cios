/* 
    Crie uma classe Animal apenas com duas propriedades: espécie e nome.
    Esta classe deve ter um método para mostrar ambas as propriedades:
    "Este animal é um(a) [espécie] e o seu nome é [nome]."
    Crie duas subclasses, Dog e Bird, que herdam da classe Animal.
    Instancie um objeto de cada classe e teste-os.
*/

class Animal{

    constructor(especie, nome){
        this.especie = especie;
        this.nome = nome;
    }

    show(){
        return "Este animal é um(a) " + this.especie + " e o seu nome é " + this.nome + ".";
    }
}

class Dog extends Animal {}

class Bird extends Animal {}

const dog = new Dog("cão", "Rex");
const bird = new Bird("pássaro", "Piu Piu");

console.log(dog.show());
console.log(bird.show());