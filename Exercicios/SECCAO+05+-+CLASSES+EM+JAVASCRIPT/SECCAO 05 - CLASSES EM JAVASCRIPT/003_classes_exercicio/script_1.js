/* 
Você tem 3 animais de estimação: um gato, um cachorro e papagaio.
Crie uma classe chamada Animal com as seguintes propriedades e métodos:
- Propriedades: nome, peso e especie.
- Métodos: comer(), dormir() e brincar().
- O método comer() deve receber um parâmetro que representa o tipo de alimento que o animal come.
- O método brincar() deve receber um parâmetro que representa o tipo de brinquedo com o qual o animal brinca.
- O método dormir() deve imprimir uma mensagem indicando que o animal está dormindo.
- Crie três instâncias da classe Animal, uma para cada animal de estimação.
*/

class Animal {
    constructor(nome, peso, especie){
        this.nome = nome;
        this.peso = peso;
        this.especie = especie;
    }

    comer(alimento){
        console.log(this.nome + " está a comer " + alimento);
    }

    dormir(){
        console.log(this.nome + " está a dormir...");
    }

    brincar(brinquedo){
        console.log(this.nome + " está a brincar com " + brinquedo);
    }
}

let gato = new Animal("Pantufa", 1.5, "gato");
let cachorro = new Animal("Bobby", 12, "cachorro");
let papagaio = new Animal("Falador", 0.8, "papagaio");

gato.comer("biscoito");
cachorro.comer("bife");

papagaio.brincar("bola");
papagaio.dormir();

