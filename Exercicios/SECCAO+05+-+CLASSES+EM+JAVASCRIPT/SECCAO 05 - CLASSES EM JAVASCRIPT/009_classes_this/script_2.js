// O conceito de 'this' também é aplicável a funções de objetos.

let person = {
    name: "John",
    sayHello: function() {
        console.log("Olá, o meu nome é " + this.name);
    }
}

// NOTA: noutros cenários, 'this' refere-se ao objeto global (window num navegador,
// por exemplo)
// Veremos detalhes sobre 'this' ao explorarmos o DOM (Document Object Model)
// e outros conceitos
