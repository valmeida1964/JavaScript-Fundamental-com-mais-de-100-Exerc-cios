/* 
O mesmo exemplo pode ser feito com async/await.
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

async function getResults() {
    const user = await getUser();
    const jobs = await getJobs();
    const salary = await getSalary();
    return { user, jobs, salary };
}

getResults().then((result) => {
    console.log(result);
});

console.log('Este código será executado antes das promises serem resolvidas');

/*
O código será executado na mesma ordem em que as promises são resolvidas.
Isto acontece porque estamos a usar async/await para esperar que as promises sejam resolvidas.
*/