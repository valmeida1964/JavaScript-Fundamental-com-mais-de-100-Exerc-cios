/* 
    1. Crie uma variável chamada years e atribua a ela o número 12.
    2. Crie uma estrutura switch que avalie a variável 'years'.
        - Se o valor da variável for 1, exiba a mensagem: 'Você é um bebê'.
        - Se o valor da variável for 5, exiba a mensagem: 'Você é uma criança'.
        - Se o valor da variável for 15, exiba a mensagem: 'Você é um adolescente'.
        - Se o valor da variável não for nenhum dos acima, exiba a mensagem:
            'Não sei em que fase da vida você está'.
*/

let years = 12;

switch (years){
    case 1:
        console.log('Você é um bebê');
        break;
    case 5:
        console.log('Você é uma criança');
        break;
    case 15:
        console.log('Você é um adolescente');
        break;
    default:
        console.log('Não sei em que fase da vida você está');
}