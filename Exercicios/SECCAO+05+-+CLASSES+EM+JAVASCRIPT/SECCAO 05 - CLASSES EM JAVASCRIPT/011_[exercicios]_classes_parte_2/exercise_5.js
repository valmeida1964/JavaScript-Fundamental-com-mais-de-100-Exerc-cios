/* 
    Crie uma classe que tenha 4 métodos estáticos:
    - sum(a, b)
    - subtract(a, b)
    - multiply(a, b)
    - divide(a, b)

    Cada método deve devolver a respetiva operação entre a e b.
    Teste todos os métodos com os valores 100 e 20.
*/

class Calculator {
    static sum(a,b){
        return a + b;
    }

    static subtract(a,b){
        return a - b;
    }

    static multiply(a,b){
        return a * b;
    }

    static divide(a,b){
        return a / b;
    }
}

console.log(Calculator.sum(100,20));
console.log(Calculator.subtract(100,20));
console.log(Calculator.multiply(100,20));
console.log(Calculator.divide(100,20));