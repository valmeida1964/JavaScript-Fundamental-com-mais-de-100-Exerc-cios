/* 
    1. Pegue o exercício anterior e concatene os valores com o seguinte exemplo:
    5 x 1 = 5
    5 x 2 = 10
    ...

    2. Exiba o resultado no console.
*/

let factor = 5;

let multiplicationTable = [
    factor + " x 1 = " + factor * 1,
    factor + " x 2 = " + factor * 2,
    factor + " x 3 = " + factor * 3,
    factor + " x 4 = " + factor * 4,
    factor + " x 5 = " + factor * 5,
    factor + " x 6 = " + factor * 6,
    factor + " x 7 = " + factor * 7,
    factor + " x 8 = " + factor * 8,
    factor + " x 9 = " + factor * 9,
    factor + " x 10 = " + factor * 10,
];

console.table(multiplicationTable);