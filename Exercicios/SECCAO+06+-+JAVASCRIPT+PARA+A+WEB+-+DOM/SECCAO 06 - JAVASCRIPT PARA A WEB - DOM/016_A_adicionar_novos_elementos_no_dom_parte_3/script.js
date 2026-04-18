/* 
Temos à nossa disposição um conjunto de métodos muito diretos para adicionar novos elementos ao DOM:
- before - adiciona um elemento antes do elemento pai
- prepend - adiciona um elemento ao início do elemento pai
- append - adiciona um elemento ao fim do elemento pai
- after - adiciona um elemento depois do elemento pai
*/

let div1 = document.querySelector("#div1"); // elemento pai

let p1 = document.createElement('p');
p1.textContent = "Novo parágrafo relativo ao DIV 1";

let p2 = p1.cloneNode(true);
let p3 = p1.cloneNode(true);
let p4 = p1.cloneNode(true);

p2.classList.add('text-red-500');
p3.classList.add('text-green-500');
p4.classList.add('text-blue-500');

// adicionar o p1 antes do div
div1.before(p1);

// adicionar no início do div1
div1.prepend(p2);

// adicionar antes do fim do div1
div1.append(p3);

// adicionar a seguir ao div 1
div1.after(p4);