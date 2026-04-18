/* 
Vamos construir um exemplo simples de três funções que devolvem, cada uma, uma promise.
NOTA: estes são apenas exemplos.
*/

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('O utilizador está pronto');
            resolve({ id: 1, name: 'John Doe' });
        }, 1500);
    });
}

function getJobs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Os trabalhos estão prontos');
            resolve(['Developer', 'Designer', 'Product Manager']);
        }, 1000);
    });
}

function getSalary() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('O salário está pronto');
            resolve(40000);
        }, 2000);
    });
}

/* 
A primeira função devolve uma promise que é resolvida após 1,5 segundos com um objeto que representa um utilizador.
A segunda função devolve uma promise que é resolvida após 1 segundo com um array de trabalhos.
A terceira função devolve uma promise que é resolvida após 2 segundos com um número que representa o salário.
Agora queremos chamar estas funções uma após a outra e registar os resultados.
Mas com a seguinte condição: queremos esperar que a função anterior termine antes de chamar a próxima.
*/

getUser().then(getJobs).then(getSalary).then((result) => {
    console.log(result);
});

console.log('Este código será executado antes das promises serem resolvidas');

/* 
Cada função será chamada depois da anterior ter sido resolvida.
Isto acontece porque estamos a encadear as promises com o método then.
*/