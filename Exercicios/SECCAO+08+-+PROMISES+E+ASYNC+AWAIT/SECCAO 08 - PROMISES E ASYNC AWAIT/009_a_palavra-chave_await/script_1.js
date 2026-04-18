/* 
A palavra-chave await é usada para esperar por uma Promise.
Só pode ser usada dentro de uma função async.
Vamos pegar nas funções anteriores e usar a palavra-chave await.
*/

async function sayHello1() {
    return Promise.resolve("Hello 1");
}

let sayHello2 = async function(){
    return "Hello 2";
}

let sayHello3 = async () => "Hello 3";

class worldClass {
    async sayHello() {
        return "Hello 4";
    }
}

async function everyoneSayHello() {
    let hello1 = await sayHello1();
    let hello2 = await sayHello2();
    let hello3 = await sayHello3();
    let hello4 = await new worldClass().sayHello();
    console.log(hello1, hello2, hello3, hello4);
}

everyoneSayHello();