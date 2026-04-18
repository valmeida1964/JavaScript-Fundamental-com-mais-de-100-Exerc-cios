/* 
    Crie uma classe simples com duas propriedades, nome e apelido, e um método que
    devolva o nome completo. Instancie esta classe e teste o seu método.
*/

class Person {

    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    fullName(){
        return this.name + " " + this.surname;
    }
}

let pessoa = new Person("João", "Ribeiro");
console.log(pessoa.fullName());

