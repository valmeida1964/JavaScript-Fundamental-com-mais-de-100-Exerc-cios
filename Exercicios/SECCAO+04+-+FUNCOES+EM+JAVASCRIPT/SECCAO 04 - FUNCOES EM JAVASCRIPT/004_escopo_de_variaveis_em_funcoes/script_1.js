// uma variável declarada fora de uma função é uma variável global

let myVariable = "global";

// uma variável declarada dentro de uma função é uma variável local

function myFunction() {
    let myVariable = "local";
    console.log(myVariable);
}

// a variável local tem precedência sobre a variável global

console.log(myVariable);
myFunction();
console.log(myVariable);