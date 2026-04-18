// uma variáveis podem ter um valor inicial e depois serem alteradas
let myName = "Steve";
console.log(myName);   // Steve

myName = "John";
console.log(myName);   // John

// uma variável pode ter um valor inicial e depois ser alterada para outro tipo
// este é um dos "maus" principios de programação em JavaScript: as variáveis não têm um tipo fixo
let variable = 50;
console.log(variable);   // 50

variable = "Steve";
console.log(variable);   // Steve

variable = true;

// alterar o tipo de valor de uma variável é uma má prática
// o código fica mais difícil de ler e manter
