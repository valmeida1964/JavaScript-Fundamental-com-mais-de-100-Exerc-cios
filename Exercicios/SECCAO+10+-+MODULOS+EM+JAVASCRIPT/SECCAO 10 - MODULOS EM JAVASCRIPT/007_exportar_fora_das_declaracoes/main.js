// podemos importar variáveis, funções, classes e objetos de outros arquivos

import {meuNome, MEU_SISTEMA, meuArray, minhaFuncao, meuObjeto, minhaClasse} from "./meu_modulo.js";

console.log(meuNome);
console.log(MEU_SISTEMA);
console.log(meuArray);
console.log(minhaFuncao());
console.log(meuObjeto);

let obj = new minhaClasse();
obj.metodo();