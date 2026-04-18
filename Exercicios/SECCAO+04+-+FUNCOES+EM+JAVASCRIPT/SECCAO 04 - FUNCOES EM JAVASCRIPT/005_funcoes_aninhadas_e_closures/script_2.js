// Uma closure é uma função que tem lembranças do seu ambiente de execução, 
// mesmo quando a função é executada fora desse ambiente.
// Isso significa que uma função interna pode acessar variáveis de uma função externa,
// mesmo depois que a função externa já foi executada.

// Exemplo de closure
function criarContador() {
    let contador = 0; // variável privada

    return function() { // função interna (closure)
        contador += 1;
        return contador;
    }
}

const contador1 = criarContador(); // cria um contador
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3