/* 
Podemos usar o export default quando queremos exportar uma única estrutura ou valor de um módulo.
Isto é útil quando queremos ter uma única exportação principal de um módulo.
É habitual usar o export default quando queremos exportar uma única classe, função, etc.
Podemos exportar default com ou sem um nome para o valor exportado.
*/

import MinhaClasse from "./js_module.js";
import meuArray from "./js_module2.js";
import minhaFuncao from "./js_module3.js";

let mc = new MinhaClasse();
console.log(mc.dizOla());

console.log(meuArray);

console.log(minhaFuncao("Estou a usar o export default"));