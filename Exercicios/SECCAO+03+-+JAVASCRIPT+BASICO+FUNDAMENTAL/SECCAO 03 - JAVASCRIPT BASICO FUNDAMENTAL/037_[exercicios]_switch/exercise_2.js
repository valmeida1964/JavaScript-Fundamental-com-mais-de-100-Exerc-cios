/* 
    1 Crie uma variável 'classification' e atribua um valor entre 1 e 5.
    Essas são as classificações entre 1 (ruim) e 5 (excelente) que um filme pode ter.

    2. Crie uma estrutura de swith para exibir uma mensagem diferente dependendo da classificação.
*/

let classification = 3;

switch (classification){
    case 1:
        console.log('Ruim');
        break;
    case 2:
        console.log('Insuficiente');
        break;
    case 3:
        console.log('Satisfatório');
        break;
    case 4:
        console.log('Bom');
        break;
    case 5:
        console.log('Excelente');
        break;
    default:
        console.log('Classificação inválida!');
        break;
}