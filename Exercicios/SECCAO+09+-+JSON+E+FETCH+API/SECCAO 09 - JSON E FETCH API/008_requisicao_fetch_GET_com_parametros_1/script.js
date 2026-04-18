/* 
Existem muitas APIs públicas disponíveis na internet para podermos testar as nossas aplicações.
Uma delas é a API da NASA, que nos vai fornecer algumas experiências adicionais quando usamos a Fetch API
e o consumo de APIs.

Neste vídeo vamos mostrar como carregar dados da imagem do día da NASA.
A API específica chama-se "Astronomy Picture of the Day" (APOD).
A URL base é https://api.nasa.gov/planetary/apod.

GET https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

Se visitarmos a URL, vamos ver que tem um formato JSON.
Vamos pegar no JSON  e colocar no VSCode para formatar o JSON e olhar para a estrutura de dados.

Tem a seguinte estrutura:
    - date
    - explanation
    - hdurl
    - media_type
    - service_version
    - title
    - url
*/

const btn = document.querySelector("#btn");
const informacao = document.querySelector("#informacao");

btn.addEventListener('click', () => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => {
        if(!response.ok){
            throw new Error("Aconteceu um erro");
        }
        return response.json();
    })
    .then((data) => {
            document.querySelector("#imagem").src = data.url; // A imagem do dia
            document.querySelector("#titulo").innerHTML = data.title; // O título
            document.querySelector("#descricao").innerHTML = data.explanation; // A descrição
            document.querySelector("#data").innerHTML = data.date; // A data

            // tornar visível a área de informação
            informacao.classList.remove("hidden");
        })
        .catch((error) => {
            informacao.innerHTML = error;
        })
});