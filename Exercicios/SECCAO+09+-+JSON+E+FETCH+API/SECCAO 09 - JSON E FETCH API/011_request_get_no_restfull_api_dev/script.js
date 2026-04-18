/* 
https://restful-api.dev/

Vamos então testar o restful-api.dev.

*/

const resultado = document.querySelector("#resultado");

// buscar a lista de objetos
document.querySelector("#btn1").addEventListener('click', () => {

    fetch("https://api.restful-api.dev/objects")
        .then((response) => {
            if(!response.ok){
                throw new Error("Aconteceu um erro");
            }
            return response.json();
        })
        .then((data) => {

            // exibir a coleção no console
            console.log(data);

            let lista = "<ul>";
            data.forEach(item => {
                lista += `<li>${item.name}</li>`
            });
            lista += "</ul>";
            resultado.innerHTML = lista;
        })
        .catch((error) => {
            resultado.innerHTML = error;
        })
});

// buscar um objeto específico
document.querySelector("#btn2").addEventListener('click', () => {

    fetch("https://api.restful-api.dev/objects")
        .then((response) => {
            if(!response.ok){
                throw new Error("Aconteceu um erro");
            }
            return response.json();
        })
        .then((data) => {
            let objeto = data[0];
            let detalhes = `
                <h2>${objeto.name}</h2>
                
                <p>ID: ${objeto.id}</p>
                <p>Nome: ${objeto.name}</p>
                <p>Capacidade: ${objeto.data.capacity}</p>
                <p>Cor: ${objeto.data.color}</p>
            `;
            resultado.innerHTML = detalhes;
        })
        .catch((error) => {
            resultado.innerHTML = error;
        })

});