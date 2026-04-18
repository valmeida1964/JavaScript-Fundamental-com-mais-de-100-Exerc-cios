/* 
    Pegue a coleção de alunos do último exercício e:
    1. Adicione um novo aluno ao final da coleção
    2. Adicione um novo aluno ao início da coleção
    3. Adicione três novos alunos ao final da coleção
    4. Mostre a coleção no console
*/

let students = ['John', 'Mary', 'Peter', 'Jane', 'Mark'];

// 1
students.push('Anthony');

// 2
students.unshift('Kevin');

// 3
students.push('Michael', 'Thomas', 'Joseph');

console.table(students);