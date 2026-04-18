/* 
    Crie uma classe Human, com apenas uma propriedade: name.
    Esta propriedade deve ser privada e acessível apenas através de um getter e setter.
    Instancie um objeto desta classe e teste o getter e o setter.
*/

class Human {

    #name;

    constructor(name){
        this.#name = name;
    }

    get name(){
        return this.#name;
    }

    set name(value){
        this.#name = value;
    }

}

const humano1 = new Human("João");
console.log(humano1.name);
humano1.name = "Carlos";
console.log(humano1.name);