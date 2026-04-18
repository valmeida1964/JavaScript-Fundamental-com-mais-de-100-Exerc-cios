// podemos usar o * (wildcard) para importar tudo de um módulo

import * as meuModulo from "./my_module.js";

console.log(meuModulo.meuNome);
console.log(meuModulo.MEU_SISTEMA);
console.log(meuModulo.meuArray);
console.log(meuModulo.minhaFuncao());

let obj = new meuModulo.MinhaClasse();
obj.meuMetodo();