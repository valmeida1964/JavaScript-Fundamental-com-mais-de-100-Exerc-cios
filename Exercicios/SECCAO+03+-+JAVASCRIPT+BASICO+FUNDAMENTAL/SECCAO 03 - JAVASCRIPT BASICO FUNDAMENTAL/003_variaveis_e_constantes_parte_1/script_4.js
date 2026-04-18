// as variáveis com let não podem ser declaradas duas vezes no mesmo escopo

var name = "Steve";
var name = "John";  // isto vai funcionar, mas não é uma boa prática

let age = 50;
let age = 60;   // isto vai dar erro, pois não é possível declarar a variável duas vezes no mesmo escopo

// conclusão: tenta não usar var, usa let ou const

// não podemos declarar nomes de variáveis com palavras reservadas
let let = 10;   // isto vai dar erro, pois let é uma palavra reservada
let break = 20;   // isto vai dar erro, pois break é uma palavra reservada
let continue = 30;   // isto vai dar erro, pois continue é uma palavra reservada
let function = 40;   // isto vai dar erro, pois function é uma palavra reservada