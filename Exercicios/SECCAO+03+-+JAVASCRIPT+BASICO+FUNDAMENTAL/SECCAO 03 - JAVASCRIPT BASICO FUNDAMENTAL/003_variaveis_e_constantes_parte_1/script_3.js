// variáveis do mesmo tipo, podem ser declaradas numa linha
var number1 = 10, number2 = 20, number3 = 30;   // tenta não usar o var, use let ou const
let number4 = 40, number5 = 50, number6 = 60;   // melhor prática
let name1 = "Steve", name2 = "John", name3 = "Joe";   // melhor prática

let number1 = number2 = number3 = 10;   // todas as variáveis têm o mesmo valor

// também é possível
let number1 = 10,
    number2 = 20,
    number3 = 30; 

let number1 = 10
    , number2 = 20
    , number3 = 30;

// e também é possível
let myName = "Steve",age = 50,isMarried = true;

// apresentar os valores das variáveis no console
console.log(myName);
console.log(age);
console.log(isMarried);