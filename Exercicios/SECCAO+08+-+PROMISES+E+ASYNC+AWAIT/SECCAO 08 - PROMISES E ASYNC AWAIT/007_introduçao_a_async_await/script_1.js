/* 
No passado, para lidar com operações assíncronas, utilizávamos funções de callback.
No entanto, esta abordagem pode levar ao callback hell, onde o código se torna difícil de ler e manter.
Imagina que queres ler um ficheiro, depois processar os dados e, por fim, imprimir o resultado.
Terias de aninhar três funções de callback, o que pode ser difícil de ler.

No ES6, temos Promises, que são objetos que representam a conclusão (ou falha) eventual de uma operação assíncrona.

O ES2017 introduziu as palavras-chave async/await, que tornam mais fácil trabalhar com promises.
Tecnicamente, async/await é apenas uma sintaxe simplificada para promises, mas torna o código mais fácil de ler e escrever.
*/

function resolveAfter2Seconds(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('resolvido');
        },2000);
    });
}

async function asyncCall(){
    console.log('a chamar...');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
console.log('fim');

// parece não ser grande coisa, mas é uma grande vantagem quando tens de encadear múltiplas promises