// As classes podem ter propriedades privadas.
// Propriedades privadas são propriedades que não podem ser acessadas fora da classe.
// Para definir uma propriedade privada, usamos o símbolo # antes do nome da propriedade.
// Para manipular uma propriedade privada, usamos métodos especiais chamados getters e setters.

class Person {

    #name;

    // getter - um método especial que retorna o valor de um atributo/propriedade
    get getName() {
        return this.#name;
    }

    // setter - um método especial que define o valor de um atributo/propriedade
    set setName(value) {
        this.#name = value;
    }
}

let person1 = new Person();
person1.setName = "João Ribeiro";
console.log(person1.getName); // João Ribeiro

// alterar o valor da propriedade #name usando o setter
person1.setName = "Ana Carolina";

// agora o valor da propriedade #name foi alterado para "Ana Carolina"
console.log(person1.getName); // Ana Carolina