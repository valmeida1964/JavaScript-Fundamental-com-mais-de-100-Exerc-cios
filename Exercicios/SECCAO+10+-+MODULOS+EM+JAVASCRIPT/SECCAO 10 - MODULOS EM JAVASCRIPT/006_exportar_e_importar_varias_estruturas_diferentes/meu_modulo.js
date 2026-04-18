// exportar variáveis
export let meuNome = "João Ribeiro";

// exportar contantes
export const MEU_SISTEMA = "Windows";

// exportar arrays
export let meuArray = ["Joao", "Carlos", "Ana"];

// exportar funções
export function minhaFuncao(){
    return "Olá Mundo!";
}

// exportar objetos
export let meuObjeto = {
    name: "João Ribeiro",
    age: 52,
    country: "Portugal"
};

// exportar classes
export class minhaClasse{

    constructor(){
        console.log("Construtor da classe");
    }

    metodo(){
        console.log("Método da classe");
    }
}