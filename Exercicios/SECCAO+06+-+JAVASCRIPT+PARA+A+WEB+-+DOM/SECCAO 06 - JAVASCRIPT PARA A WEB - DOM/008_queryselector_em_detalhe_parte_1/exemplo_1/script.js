/* 
Vamos detalhar aspetos relacionados com o selector do querySelector e do querySelectorAll.
Como vamos usar seletores de CSS, vamos poder usar mecanismos poderosos de selecção de elementos.
No DOM temos 8 parágrafos, cada um com o seu id, todos com as mesmas classes
*/

// vamos usar o querySelector para seleccionar o primeiro parágrafo
const p1 = document.querySelector("#p1");
console.log(p1);

// vamos usar o querySelector para seleccionar o segundo parágrafo
const p2 = document.querySelector("#p2");
console.log(p2);

// vamos usar o querySelectorAll para seleccionar todos os parágrafos
const ps = document.querySelectorAll("p");
console.log(ps);

// vamos usar o querySelectorAll para seleccionar todos os parágrafos com a classe "border-slate-300"
const ps2 = document.querySelectorAll("p.border-slate-300");
console.log(ps2);

// NOTA: ao colocar p.border-slate-300 estamos a dizer que queremos todos os parágrafos que tenham a classe border-slate-300
// se existirem outros elementos com a classe border-slate-300, eles não serão seleccionados

// usar o querySelectorAll para selecionar todos os parágrados com id começado por 'p'
const ps3 = document.querySelectorAll("p[id^='p']");
console.log(ps3);