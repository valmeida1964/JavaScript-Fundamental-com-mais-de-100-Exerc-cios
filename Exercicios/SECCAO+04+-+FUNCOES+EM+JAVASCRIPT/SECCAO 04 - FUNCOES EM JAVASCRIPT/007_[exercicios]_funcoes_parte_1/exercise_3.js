/*
    Crie a mesma função do exercício 1 e 2, mas com 2 argumentos: firstName e lastName.
    Dessa vez, a função irá retornar o nome completo e armazená-lo em uma variável chamada myFullName.
    Exiba o nome completo no console.
*/

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}

let myFullName = fullName("João", "Ribeiro");
console.log(myFullName);