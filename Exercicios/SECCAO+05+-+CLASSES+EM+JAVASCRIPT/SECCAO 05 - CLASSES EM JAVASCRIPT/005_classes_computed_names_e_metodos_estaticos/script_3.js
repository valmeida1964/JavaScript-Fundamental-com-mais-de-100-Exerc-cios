// vamos criar uma classe apenas com métodos estáticos

class Operations {

    static sum(a, b) {
        return a + b;
    }

    static sub(a, b) {
        return a - b;
    }

    static mult(a, b) {
        return a * b;
    }

    static div(a, b) {
        return a / b;
    }
}

// chamando métodos estáticos

// podemos guardar o resultado de um método estático numa variável
let result = Operations.mult(10,2); // 20

// podemos chamar o método diretamente sem guardar o resultado numa variável
console.log(Operations.sum(1, 2)); // 3
console.log(Operations.sub(1, 2)); // -1
console.log(Operations.mult(1, 2)); // 2
console.log(Operations.div(1, 2)); // 0.5

// NOTA: o javascript já tem uma classe Math com métodos estáticos
Math.random(); // 0.123456789
Math.PI; // 3.141592653589793
Math.sqrt(9); // 3
// ...