/* 
Na documentação da API do Chuck Norris, mostra que podemos fazer uma requisição GET para obter uma piada aleatória.
A URL é https://api.chucknorris.io/jokes/random.
Mas também podemos fazer outras requisições, como por exemplo, a lista de categorias.
A URL é https://api.chucknorris.io/jokes/categories.

O que muda na requisição é a URL (e noutros casos, os parâmetros que passamos na URL,
que tradicionalmente designamos de query string).

A URL base é a mesma, mas o que muda é o endpoint.
*/

const btnBuscarPiada = document.querySelector("#btn_piada");
const btnBuscarCategorias = document.querySelector("#btn_categorias");

const baseURL = "https://api.chucknorris.io/jokes/";

btnBuscarPiada.addEventListener('click', () => {
    // Faz uma requisição GET para obter uma piada aleatória
    fetchRequest(baseURL + "random");
});

btnBuscarCategorias.addEventListener('click', () => {
    // Faz uma requisição GET para obter a lista de categorias
    fetchRequest(baseURL + "categories");
});

function fetchRequest(url){
    console.log(url);

    fetch(url)
        .then((response) => {
            if(!response.ok){
                throw new Error('Aconteu um erro');
            }
            return response.json()
        })
        .then((data) => {

            if('value' in data){
                document.querySelector("#resultado").innerHTML = data.value; // Se for uma piada
            }

            if(Array.isArray(data)){
                document.querySelector("#resultado").innerHTML = data.join(" | "); // Se for uma lista de categorias
            }
        })
        .catch((error) => {
            document.querySelector("#resultado").innerHTML = error;
        })
}

// neste exemplo, manipulámos a URL através de uma concatenção de strings.
// A URL base é a mesma, mas o que muda é o endpoint com essa concatenação.