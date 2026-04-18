// Vamos criar uma função que recebe um número e exibe 
// a tabuada desse número no console.
function showMultiplicationTable(number) {
    console.log("Tabuada do " + number);
    for (let index = 1; index <= 10; index++) {
        console.log(number + " X " + index + " = " + number * index);
    }
    console.log('-------------------');
}

showMultiplicationTable(6);
showMultiplicationTable(7);
showMultiplicationTable(3);
showMultiplicationTable(3123);
showMultiplicationTable(5478456);