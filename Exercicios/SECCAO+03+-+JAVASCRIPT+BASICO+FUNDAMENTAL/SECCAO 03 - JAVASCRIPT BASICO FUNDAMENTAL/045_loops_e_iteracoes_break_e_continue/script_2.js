// Outra palavra-chave que pode ser utilizada para interromper
// um loop é a palavra-chave "continue". Ela é usada para pular
// a iteração atual e continuar com a próxima.

for (let index = 0; index < 10; index++) {
    if (index === 5) {
        continue;
    }
    console.log(index);
}

console.log('fim');

// Neste exemplo, quando o valor de "index" é igual a 5, a
// palavra-chave "continue" é usada para pular a iteração atual e
// continuar com a próxima. Portanto, o número 5 não será apresentado.