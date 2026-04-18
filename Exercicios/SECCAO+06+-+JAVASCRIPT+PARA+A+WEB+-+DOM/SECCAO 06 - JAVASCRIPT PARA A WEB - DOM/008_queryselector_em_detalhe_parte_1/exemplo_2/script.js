// temos uma ul com 7 elementos li. Nenhum tem id.
// vamos usar o querySelector para seleccionar o primeiro elemento li

const li1 = document.querySelector("ul li");
console.log(li1);

// vamos usar o querySelector para seleccionar o segundo elemento li
const li2 = document.querySelector("ul li:nth-child(2)");
li2.classList.add("bg-sky-200");
//  o ul significa que queremos a UL.
//  o li significa que queremos o LI dentro da UL.
//  o :nth-child(2) significa que queremos o segundo LI dentro da UL.
// nth-child é um selector CSS que selecciona o n-ésimo filho de um elemento. 
// o (2) significa que queremos o segundo filho.

// vamos seleccionar todos os elementos pares da lista
const li3 = document.querySelectorAll("ul li:nth-child(2n)");
li3.forEach((li) => {
  li.classList.add("bg-yellow-200");
});

// todos os elementos ímpares da lista
const li4 = document.querySelectorAll("ul li:nth-child(2n+1)");
li4.forEach((li) => {
  li.classList.add("bg-red-200");
});