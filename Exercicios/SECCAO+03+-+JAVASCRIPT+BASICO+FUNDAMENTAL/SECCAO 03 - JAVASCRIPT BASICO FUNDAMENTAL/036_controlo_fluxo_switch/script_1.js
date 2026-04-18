// A estrutura condicional switch é uma alternativa ao if-else.
// Ela é utilizada quando temos várias condições a serem verificadas, 
// e cada uma delas leva a um resultado diferente.

let day = 10;

switch (day) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break;
    case 3:
        console.log('Terça-feira');
        break;
    default:
        console.log('Dia inválido');
}

// cada caso analisa o valor da variável 'day'.
// se o caso corresponder ao valor, o código dentro do caso é executado.
// se o caso não corresponder ao valor, o código dentro do caso não é executado.
// a instrução break é usada para sair da estrutura switch.
// o caso default é executado se nenhum dos casos corresponder ao valor da variável 'day'.

// podemos ter vários casos com o mesmo código.

let day2 = 3;

switch (day2) {
    case 1:
    case 7:
        console.log('Fim de semana');
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('Dia de semana');
        break;
    default:
        console.log('Dia inválido');
}