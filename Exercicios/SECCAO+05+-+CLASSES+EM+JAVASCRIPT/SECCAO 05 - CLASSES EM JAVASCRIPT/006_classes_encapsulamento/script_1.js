// O conceito de encapsulamento é um dos pilares da programação orientada a objetos. 
// Refere-se à prática de restringir o acesso a certos componentes de um objeto e expor apenas o que é necessário.
// Isto ajuda a proteger os dados e a manter a integridade do objeto, 
// evitando que partes do código interfiram indevidamente em outras partes.
// Em JavaScript, o encapsulamento pode ser alcançado utilizando propriedades e métodos privados

class Person {

    #name = ""; // o símbolo # define uma propriedade privada

    constructor(name) {
        this.#name = name;  // define o nome da pessoa. O construtor não é obrigatório numa classe
    }

    // getter - usado para aceder a propriedades privadas
    get getName() {
        return this.#name;
    }

    // setter - usado para alterar propriedades privadas
    set setName(value) {
        if(value == "") {
            this.#name = "Não definido";
        } else {
            this.#name = value;
        }
    }
}

let person1 = new Person("John");   // cria uma nova pessoa e define o seu nome
console.log(person1.getName);       // obtém o nome da pessoa. Não é obrigatório usar parênteses ao chamar um getter
person1.setName = "Steve";          // altera o nome da pessoa. Não é obrigatório usar parênteses ao chamar um setter
console.log(person1.getName);