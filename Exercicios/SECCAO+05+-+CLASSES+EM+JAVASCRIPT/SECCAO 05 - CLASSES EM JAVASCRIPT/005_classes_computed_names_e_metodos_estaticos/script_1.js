// O conceito de computed names significa que podemos criar métodos e propriedades
// de uma classe utilizando expressões, ou seja, podemos criar métodos e propriedades
// com nomes dinâmicos, que podem ser criados em tempo de execução.

// computed names
class Human {

    // ...
    ["full" + "Name"]() {
        return "John Doe";
    }

    // ...

}

let human = new Human();
console.log(human.fullName()); // John Doe

// full + Name = fullName
