/* 
Gestão de Produtos com Fetch API
----------------------------------------------------------------
O objetivo deste projeto é criar uma pequena aplicação, sem persistência de dados entre execuções,
mas que simula um sistema de gestão de produtos básico com recurso a uma API RESTful.
A API está disponível executando o servidor node.

A aplicação tem um formulário para adicionar produtos, com respetivo nome, quantidade e preço.
Tem um botão para adicionar o produto, e outro para limpar o formulário.
Do lado direito, é apresentada uma lista de produtos adicionados, com o nome, quantidade, preço e total (preço * quantidade).
Além disso, tem um botão para remover cada produto individualmente, e um link geral para limpar a lista de produtos por completo.

NOTA: Não vamos implementar edição de produtos nem pesquisa. O foco é apenas na adição e remoção de produtos
para testar a Fetch API com o servidor NodeJS v1.
*/

// dados da API
const BASE_URL = "http://localhost:3000";

// elementos da DOM
const inputProductName = document.querySelector('#productName');
const inputProductQuantity = document.querySelector('#productQuantity');
const inputProductPrice = document.querySelector('#productPrice');

// botões
const btnAddProduct = document.querySelector("#btnAddProduct");
const btnClearForm = document.querySelector("#btnClearForm");

// lista de produtos
const productList = document.querySelector("#productList");

// formato dos valores de cada produto
const productValueFormat = 'text-end w-30 rounded-lg p-1 bg-slate-100';

// limpar o formulário
btnClearForm.addEventListener('click', clearForm);

// init
clearProductList();
fetchProducts();

// adicionar novo produto
btnAddProduct.addEventListener('click', () => {

    // buscar os valores dos inputs
    const productName = inputProductName.value.trim();
    const productQuantity = parseInt(inputProductQuantity.value.trim());
    const productPrice = parseFloat(inputProductPrice.value.trim());

    // validar os inputs
    if(!productName || productName.length < 3){
        alert("Insira o nome do produto com 3 caracteres ou mais.");
        return;
    }
    if(isNaN(productQuantity) || productQuantity <= 0){
        alert("Defina uma quantidade válida. (número positivo).");
        return;
    }
    if(isNaN(productPrice) || productPrice <= 0){
        alert("Por favor indique um preço válido.");
        return;
    }

    // criar o objeto do produto
    const newProduct = {
        name: productName,
        quantity: productQuantity,
        price: productPrice
    };

    // executar o pedido à API para adicionar o novo produto.
    fetch(`${BASE_URL}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
        .then(response => {
            // valida se a resposta foi com sucesso
            if(!response.ok){
                throw new Error(`Erro ao adicionar o produto: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            clearForm();
            clearProductList();
            fetchProducts();
        })
        .catch(error => {
            productList.innerHTML = `<p class="text-center text-red-500">Aconteceu um erro: ${error}</p>`
        });
});

function clearForm(){
    inputProductName.value = "";
    inputProductQuantity.value = "";
    inputProductPrice.value = "";
    inputProductName.focus();
}

function clearProductList(){
    productList.innerHTML = '';
}

function fetchProducts(){
    
    fetch(`${BASE_URL}/all`)
        .then(
            // verificar se a resposta da API é válida
            response => {
                if(!response.ok) {
                    throw new Error(`Erro ao buscar os produtos: ${response.statusText}`)
                }
                return response.json();
            }
        )
        .then(data => {
            
            let products = data.data;

            // verifica se foram encontrados registos
            if(products.length === 0) {
                clearProductList();
                productList.innerHTML = '<p class="text-center text-gray-400 mt-10">Nenhum produto encontrado</p>'
                return;
            }

            // listar os produtos
            products.map(product => {

                // div para cada produto
                const divProduct = document.createElement('div');
                divProduct.classList = 'flex justify-between items-center p-2 border-1 border-slate-200 rounded-xl shadow mb-3';

                // nome do produto
                const productName = document.createElement('p');
                productName.classList = 'text-slate-700';
                productName.textContent = product.name;
                divProduct.appendChild(productName);

                // espaço para os valores
                const values = document.createElement('div');
                values.classList = 'flex gap-4 items-center';
                divProduct.appendChild(values);

                // preço do produto
                const productPrice = document.createElement('p');
                productPrice.classList = productValueFormat;
                productPrice.textContent = `${product.price.toFixed(2)} $`;
                values.appendChild(productPrice);

                // quantidade do produto
                const productQuantity = document.createElement('p');
                productQuantity.classList = productValueFormat;
                productQuantity.textContent = product.quantity;
                values.appendChild(productQuantity);

                // total
                const productTotal = document.createElement('p');
                productTotal.classList = productValueFormat;
                productTotal.textContent = `${product.price * product.quantity} $`;
                values.appendChild(productTotal);

                // botão para remover o produto
                const btnRemove = document.createElement('button');
                btnRemove.classList = 'bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600';
                btnRemove.textContent = 'Remover';
                btnRemove.addEventListener('click', () => {
                    deleteProduct(product.id);
                });
                // ou
                // btnRemove.addEventListener('click', deleteProduct.bind(null, product.id));
                values.appendChild(btnRemove);

                // adicionar o produto à lista
                productList.appendChild(divProduct);
            });

            productList.insertAdjacentHTML('beforeend', `
                <div class="flex mt-4 justify-end">
                    <button class="text-red-500 hover:text-red-700 hover:underline" onclick="deleteAllProducts()">Apagar tudo</button>
                </div>
            `);
        })
        .catch(error => {
            clearProductList();
            productList.innerHTML = `<p class="text-center text-red-500">Aconteceu um erro: ${error}</p>`;
            return;
        });
}

function deleteProduct(id){
    fetch(`${BASE_URL}/delete/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if(!response.ok){
                throw new Error(`Aconteceu um erro ao remover o produto: ${response.statusText}`);
            }
            return response.json();
        })
        .then(() => {
            clearProductList();
            fetchProducts();
        })
        .catch(error => {
            productList.innerHTML = `<p class="text-center text-red-500">Aconteceu um erro: ${error}</p>`;
        });
}

function deleteAllProducts(){
    fetch(`${BASE_URL}/delete_all`, {
        method: 'DELETE'
    })
        .then(
            // verificar se a resposta da API é válida
            response => {
                if(!response.ok) {
                    throw new Error(`Erro ao remover todos os produtos: ${response.statusText}`)
                }
                return response.json();
            }
        )
        .then(() => {
            clearProductList();
            fetchProducts();
        })
        .catch(error => {
            clearProductList();
            productList.innerHTML = `<p class="text-center text-red-500">Aconteceu um erro: ${error}</p>`;
            return;
        });
}