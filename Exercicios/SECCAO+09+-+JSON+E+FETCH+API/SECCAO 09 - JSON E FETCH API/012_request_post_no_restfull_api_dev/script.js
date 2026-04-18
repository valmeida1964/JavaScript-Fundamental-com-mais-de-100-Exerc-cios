/* 
https://restful-api.dev/

Objetivo: Vamos adicionar um objeto à lista de objetos.
*/

const resultado = document.querySelector("#resultado");

// buscar a lista de objetos
document.querySelector("#btn1").addEventListener("click", () => {
    fetch("https://api.restful-api.dev/objects")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {

            // exibir toda a coleção no console
            console.log(data);

            let lista = "<ul>";
            data.forEach((item) => {
                lista += `<li>${item.name}</li>`;
            });
            lista += "</ul>";
            resultado.innerHTML = lista;
        })
        .catch((error) => {
            resultado.innerHTML = error;
        });
});

// adicionar um objeto à lista de objetos
document.querySelector("#btn2").addEventListener('click', () => {

    const objeto = {
        name: "Meu objeto",
        data: {
            capacity: 100,
            color: "red"
        }
    };

    fetch("https://api.restful-api.dev/objects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto)
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            resultado.innerHTML = `Objeto adicionado com sucesso! ID: ${data.id}`;
        })
        .catch((error) => {
            resultado.innerHTML = error;
        });
});

// adicionar um objeto à lista de objetos
// IMPORTANTE: O método POST pode não funcionar na API do restful-api.dev.
// Isto acontece porque quem desenvolveu a API está a bloquear o método POST usando o CORS.

// O CORS (Cross-Origin Resource Sharing) é um mecanismo de segurança que permite que os navegadores 
// controlem o acesso a recursos de diferentes origens (domínios) em uma aplicação web.
// Isso significa que não vamos conseguir fazer a requisição com sucesso, uma vez que estamos
// a fazer o teste localmente.