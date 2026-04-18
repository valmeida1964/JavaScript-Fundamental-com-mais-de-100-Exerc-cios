/* 
    Funções Aninhadas e Closures
*/

// uma função aninhada é uma função declarada dentro de outra função
// uma função aninhada tem um escopo local

function myFunction() {
    console.log("Hello World!");

    function myNestedFunction() {
        console.log("Hello Universe!");
    }

    myNestedFunction();
}

// a função aninhada só pode ser chamada dentro da função onde foi declarada
myFunction();