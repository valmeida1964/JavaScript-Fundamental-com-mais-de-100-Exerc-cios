/* 
    Pegue na coleção de estudantes do último exercício e:
    1. Remova o último estudante da coleção e coloque numa variável
    2. Remova o primeiro estudante da coleção e coloque numa variável
*/

let students = ['John', 'Mary', 'Peter', 'Jane', 'Mark'];

let lastStudent = students.pop();
console.log(lastStudent);

let firstStudent = students.shift();
console.log(firstStudent);

console.log(students);