/*
    Crie um array de alunos. Cada aluno é um objeto com os seguintes atributos:
    - name
    - phone number

    Crie uma função que mostre o nome e o telefone de cada aluno.
    Mostre todas as informações dos alunos no console.
*/

const students = [
    {
        name: "Steve Rogers",
        phoneNumber: 111222
    },
    {
        name: "Tony Stark",
        phoneNumber: 333444
    },
    {
        name: "Peter Parker",
        phoneNumber: 555666
    },
];

function showStudentInfo(student){
    console.log('Nome: ' + student.name);
    console.log('Telefone: ' + student.phoneNumber);
    console.log('----------------');
}

for (let student of students){
    showStudentInfo(student);
}