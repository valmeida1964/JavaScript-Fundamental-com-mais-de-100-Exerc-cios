/* 
    Crie um array com 4 nomes: John, Paul, Ringo e George.
    Crie um loop que mostre os nomes no console, exceto o nome Paul.
*/

let names = ['John', 'Paul', 'Ringo', 'George'];

/*
for(let index = 0; index < names.length; index++){
    if(names[index] == 'Paul') continue;
    console.log(names[index]);
}
*/

for(let name of names){
    if(name == 'Paul') continue;
    console.log(name);
}