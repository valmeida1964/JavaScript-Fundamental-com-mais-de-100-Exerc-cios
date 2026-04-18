/* 
    1. Crie duas variáveis numéricas 'number1' e 'number2' e atribua a elas os valores 10 e 20.
    2. Crie uma estrutura condicional que verifique se:
        - number1 é igual a 10
            - se sim, verifique se number2 é igual a 20
                - se sim, exiba: "Números corretos!"
                - se não, exiba: "Números incorretos!"
*/

let number1 = 10;
let number2 = 20;

if(number1 === 10) {

    if(number2 === 20){
        console.log('Números corretos!');
    } else {
        console.log('Números incorretos (1)!');
    }

} else {
    console.log('Números incorretos (2)!');
}