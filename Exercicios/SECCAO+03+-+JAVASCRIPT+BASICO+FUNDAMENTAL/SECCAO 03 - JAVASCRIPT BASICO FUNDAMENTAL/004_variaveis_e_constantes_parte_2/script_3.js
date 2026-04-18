// como definir nomes de variáveis
// nomes de variáveis devem ser significativos e descritivos
// nomes de variáveis devem ser em camelCase
// nomes de variáveis devem começar com uma letra, um underscore (_) ou um cifrão ($)
// nomes de variáveis não podem começar com um número
// nomes de variáveis não podem conter espaços ou caracteres especiais
// nomes de variáveis não podem ser palavras reservadas do JavaScript
let myName = "Steve";     // OK
let _myName = "Steve";    // OK
let $myName = "Steve";    // OK
let name1 = "Steve";    // OK
let name_1 = "Steve";   // OK
let name$1 = "Steve";   // OK

let 1name = "Steve";    // NOT OK
let -name = "Steve";    // NOT OK
let name_one = "Steve"; // OK

// camelCase
let firstName = "Steve";
let lastName = "Jobs";

// O JavaScript diferencia maiúsculas de minúsculas - é case sensitive
let myName = "Steve";
let myname = "Jobs";

// myName e myname são variáveis diferentes

// IMPORTANTE: os nomes das variáveis devem ser significativos e descritivos
let n = "Steve";            // não é significativo
let firstName = "Steve";   // é significativo