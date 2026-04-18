/* 
Também podemos devolver uma promise explicitamente a partir de uma função async.
*/

// Exemplo
async function sayHello1() {
    return Promise.resolve("Hello 1");
}

// ou
let sayHello2 = async function(){
    return "Hello 2";
}

// ou
let sayHello3 = async () => "Hello 3";

// E podemos ter classes com métodos async

class worldClass {
    async sayHello() {
        return "Hello 4";
    }
}

// para obter todos os valores de cada função, podemos usar o método .then()
sayHello1().then(console.log); // Hello 1
sayHello2().then(console.log); // Hello 2
sayHello3().then(console.log); // Hello 3

let world = new worldClass();
world.sayHello().then(console.log); // Hello 4