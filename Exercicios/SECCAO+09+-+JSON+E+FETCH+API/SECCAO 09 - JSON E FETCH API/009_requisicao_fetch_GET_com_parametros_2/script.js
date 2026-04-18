/* 
Vamos elevar o exemplo anterior e adicionar mais um parâmetro à URL: a data específica do dia que queremos ver.
*/

const btn = document.querySelector("#btn");
const informacao = document.querySelector("#informacao");
const erro = document.querySelector("#erro");

btn.addEventListener('click', () => {

    // vamos validar a data
    const data = document.querySelector("#data_input");
    let state = {
        state: "ok",
        message: ""
    }

    // validar se data está vazio
    if(data.value === ""){
        state.state = "error";
        state.message = "Erro na data - data vazia";
        showError(state);
        return;
    }

    // verificar se a data é válida
    if(isNaN(Date.parse(data.value))){
        state.state = "error";
        state.message = "Erro na data - data inválida";
        showError(state);
        return;
    }

    // verifica se a data é maior do que a data atual
    const dataAtual = new Date();
    if(new Date(data.value) > dataAtual){
        state.state = "error";
        state.message = "Erro na data - data superior ao dia atual";
        showError(state);
        return;
    }

    // vamos preparar a URL para ter o número de parâmetros que desejamos
    // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2023-10-01
    let parametros = new URLSearchParams({
        api_key: "DEMO_KEY",
        date: data.value
    });

    let url = "https://api.nasa.gov/planetary/apod?" + parametros.toString();

    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        document.querySelector("#imagem").src = data.url; // A imagem do dia
        document.querySelector("#titulo").innerHTML = data.title; // O título
        document.querySelector("#descricao").innerHTML = data.explanation; // A descrição
        document.querySelector("#data").innerHTML = data.date; // A data

        // tornar visível a informação
        informacao.classList.remove("hidden");
    })
    .catch((error) => {
        informacao.innerHTML = error;
    });
});

function showError(state){
    informacao.classList.add("hidden");
    erro.innerHTML = state.message;
    erro.classList.remove("hidden");
    setTimeout(() => {
        erro.classList.add("hidden");
    }, 3000);
}