/* 
Tratamento de erros em funções async.

Funções async devolvem uma promise. Por vezes, a promise é rejeitada.
Neste caso, o erro é lançado e pode ser capturado utilizando um bloco try-catch.

Vamos ver um exemplo de uma função async que devolve um número aleatório entre 1 e 100.
Se o número for menor que 50, a função lança um erro.
ISTO É APENAS UM EXEMPLO.
*/
async function getRandomNumber() {
    const value  = Math.floor(Math.random() * 100) + 1;
    if(value < 50) {
        throw new Error(`O valor é demasiado baixo (${value})`);
    } else {
        return value;
    }
}

// Vamos chamar a função e capturar o erro caso seja lançado
async function main() {
    try {
        const value = await getRandomNumber();
        console.log('Valor:', value);
    } catch(error) {
        console.log('Erro:', error.message);
    }
}

main();