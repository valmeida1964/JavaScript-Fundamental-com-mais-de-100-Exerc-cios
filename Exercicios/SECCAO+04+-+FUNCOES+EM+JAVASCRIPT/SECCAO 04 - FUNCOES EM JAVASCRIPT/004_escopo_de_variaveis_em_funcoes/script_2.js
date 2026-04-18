// variáveis globais podem ser acedidas a partir de qualquer parte do código

let myName = "John";

function showMyName() {
    console.log(myName);
}

showMyName();

// se existisse uma variável com o mesmo nome dentro da função,
// essa seria usada em vez da variável global