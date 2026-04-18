/* 
No grupo de eventos que existem no DOM API, existem os eventos de teclado.
Quando pressionamos, mantemos pressionada ou soltamos uma tecla, o DOM API dispara um evento.
Esses eventos são muito importantes principalmente para aplicações web que utilizam formulários.
Eles permitem controlar a interação do usuário com os inputs.

Nos três inputs text que temos no HTML, dá para ver que o Tab permite navegar entre os inputs.
Esse é um comportamento padrão do navegador.

Vamos ver como funciona o evento keydown concentrano a atenção no primeiro input.
*/

const text1 = document.querySelector("#text_1");
const text2 = document.querySelector("#text_2");
const text3 = document.querySelector("#text_3");

// keydown é disparado quando a tecla é pressionada
// podemos ver na consola a tecla que está a ser pressionada.
// A propriedade key do evento contém o valor da tecla pressionada.
// Podemos também saber qual é o código da tecla pressionada através da propriedade code.
text1.addEventListener('keydown', function(event){
    console.log('keydown', event.key);
    console.log('keydown', event.code);

    // outros métodos são considerados obsoletos, mas ainda funcionam.
    // não os devemos usar, uma vez que podem dar resultados diferentes em diferentes navegadores.
    // console.log('keydown', event.keyCode);
    // console.log('keydown', event.which);
    // console.log('keydown', event.keyIdentifier);
});

text2.addEventListener('keyup', (event) => {
    console.log('keyup', event.key);
    console.log('keyup', event.code);
});

text3.addEventListener('keydown', (event) => {
    
    // inserir apenas dígitos
    // if(event.key < '0' || event.key > '9' ){
    //     event.preventDefault();
    // }

    // aceitar apenas letras
    if(event.key < 'a' || event.key > 'z' ){
        event.preventDefault();
    }
});