/* 
Consumo de API com Autenticação Básica
----------------------------------------------------------------
Este script demonstra como consumir uma API que requer autenticação básica.
A autenticação básica (Basic Authentication) é um método simples de autenticação do protocolo HTTP,
onde o cliente envia um cabeçalho HTTP com as credenciais codificadas em Base64.
A API, por sua vez, valida essas credenciais e permite o acesso aos recursos protegidos.

Para este projeto vamos usar o node server v2, que contém uma API cujos recursos estão protegidos
por autenticação básica.
*/

// elementos do DOM
const inputName = document.querySelector("#inputName");
const btn = document.querySelector("#btnAdd");
const records = document.querySelector("#records");

// configurações da API
const baseURL = 'http://localhost:4000';
const username = 'admin';
const password = 'abc123';

// mostrar todos os registos da API
showRecords();

// adicionar novos clientes
btn.addEventListener('click', () => {

    // obter o valor do input
    const name = inputName.value.trim();

    // validar o name
    if(name === ''){
        alert('Por favor indique um nome válido.');
        return;
    }

    // preparar o objeto para submeter à API
    const data = {
        name: name
    };

    // fazer a requisição à API
    fetch(`${baseURL}/add`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        showRecords();
        inputName.value = "";
        inputName.focus();
    })
    .catch(error => {
        alert('Erro: ', error.message)
    });

});

async function showRecords(){
    
    try {
        
        const response = await fetch(`${baseURL}/all`, {
            headers: getAuthHeaders()
        });

        const data = await response.json();

        records.innerHTML = '';
        if(data.data.length > 0){

            // apresentar todos os registos
            data.data.forEach(client => {
                records.insertAdjacentHTML('beforeend', `
                    <p class="bg-slate-200 border-1 boder-slate-300 font-bold p-2 rounded-lg mb-2">${client.name}</p>
                `);
            });

            // adiciona o link para remover todos os registos
            records.insertAdjacentHTML('beforeend', `
                <a href="#" onclick="deleteAll()" class="text-red-500 hover:text-red-700 hover:underline mt-2">Excluir todos</a>
            `);

        } else {
            records.innerHTML = '<p class="text-center text-slate-400">Nenhum registo encontrado.</p>';
        }

    } catch (error) {
        alert("Erro ao buscar dados: " + error.message);
    }

}

async function deleteAll(){
    if(confirm('Você deseja eliminar todos os registos?')){

        try {
            
            const response = await fetch(`${baseURL}/delete_all`, {
                    method: 'DELETE',
                    headers: getAuthHeaders()
                }
            );

            const data = await response.json();

            if(data.code === 200){
                showRecords();
                inputName.value = "";
                inputName.focus();
            } else {
                alert('Erro ao excluir os registos: ' + error);
            }

        } catch (error) {
            alert('Erro ao excluir os registos: ' + error);
        }

    }
}

function getAuthHeaders(){
    return {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    };
}