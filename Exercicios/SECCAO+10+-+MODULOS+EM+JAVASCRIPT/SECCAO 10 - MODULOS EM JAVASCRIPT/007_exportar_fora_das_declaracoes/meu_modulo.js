// variável
let meuNome = "John Doe";

// constante
const MEU_SISTEMA = 'Windows';

// array
let meuArray = ["John", "Doe", "Jane", "Smith"];

// função
function minhaFuncao() {
    return "Hello World!";
}

// objeto
let meuObjeto = {
    name: "Joao Ribeiro",
    age: 52,
    country: "Portugal"
};

// classe
class minhaClasse {
    
    constructor() {
        console.log("Construtor da classe");
    }

    metodo() {
        console.log("Método da classe");
    }
}

// neste caso estamos a exportar tudo de uma vez
// exportando variáveis, constantes, funções, objetos e classes
export { meuNome, MEU_SISTEMA, meuArray, minhaFuncao, meuObjeto, minhaClasse };
