/* 
No JavaScript, os módulos são uma maneira de dividir o código em arquivos separados, 
o que ajuda a organizar e reutilizar o código. Cada arquivo JavaScript pode ser 
considerado um módulo, e podes exportar e importar funções, objetos ou variáveis 
entre esses módulos.

O conceito de módulos surgiu com o ES6 (ECMAScript 2015), que introduziu a sintaxe
de módulos nativos no JavaScript. Atualmente, a maioria dos navegadores modernos e 
ambientes de execução JavaScript, como o Node.js, suportam módulos ES6.
*/

import { dizerOla } from "./module_script.js";

dizerOla();
