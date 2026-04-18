/* 
    Crie um loop for que mostre os números de 0 a 10 no console,
    mas que termine quando o número 5 for encontrado
*/

for(let index = 0; index <= 10; index++){
    console.log(index);
    if(index === 5) {
        break;
    }
}