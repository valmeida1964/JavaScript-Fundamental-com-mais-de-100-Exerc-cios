/* 
Gestão de Produtos com Fetch API, usando async/await
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

MUITO IMPORTANTE: As chamadas à API deverão ser feitas com recurso a async e await.
*/

// url da API
const BASE_URL = 'http://localhost:3000';

// elementos da dom
const inputProductName = document.querySelector("#productName");
const inputProductQuantity = document.querySelector("#productQuantity");
const inputProductPrice = document.querySelector("#productPrice");

// botões
const btnAddProduct = document.querySelector("#btnAddProduct");
const btnClearForm = document.querySelector("#btnClearForm");

// lista de produtos
const productList = document.querySelector("#productList");

// formato visual dos valores de cada produto
const productValueFormat = 'tet-end w-30 rounded-lg p-1 bg-slate-100';

// botão limpar o formulário
btnClearForm.addEventListener('click', clearForm);

clearProductList();
fetchProducts();

// adicionar novo produto
btnAddProduct.addEventListener('click', async () => {

    // obter os valores dos inputs
    const productName = inputProductName.value.trim();
    const productQuantity = parseInt(inputProductQuantity.value.trim());
    const productPrice = parseFloat(inputProductPrice.value.trim());

    // validar se os valores são ok
    if(!productName || productName.length < 3){
        alert('Indique o nome do produto com 3 ou mais caracteres');
        return;
    }
    if(isNaN(productQuantity) || productQuantity <= 0){
        alert('Indique a quantidade de produto');
        return;
    }
    if(isNaN(productPrice) || productPrice <= 0){
        alert('Indique valor de preço válido (superior a zero)');
        return;
    }

    // criar o objeto do produto
    const newProduct = {
        name: productName,
        quantity: productQuantity,
        price: productPrice
    };

    // utilizar async e await
    try {
        const response = await fetch(`${BASE_URL}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        });

        // analisar se a resposta está Ok
        if(!response.ok){
            throw new Error(`Erro ao adicionar novo produto: ${response.statusText}`);
        }

        await response.json();

        clearForm();
        clearProductList();
        fetchProducts();
        
    } catch (error) {
        productList.innerHTML = `<p class="text-red-500 text-center">Aconteceu um erro: ${error}</p>`;
    }
});

function clearForm(){
    inputProductName.value = "";
    inputProductQuantity.value = "";
    inputProductPrice.value = "";
    inputProductName.focus();
}

function clearProductList(){
    productList.innerHTML = "";   
}

async function fetchProducts(){
    try {
        
        // pedido ao endpoint
        const response = await fetch(`${BASE_URL}/all`);

        // validar a resposta
        if(!response.ok){
            throw new Error(`Erro ao buscar produtos: ${response.statusText}`);
        }

        // tratar a resposta
        const data = await response.json();

        let products = data.data;

        // verifica se existem produtos
        if(products.length === 0){
            clearProductList();
            productList.innerHTML = '<p class="text-center text-gray-400 mt-10">Nenhum produto encontrado</p>';
            return;
        }

        // listar os produtos
        products.map(product => {

            // div do produto
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

            // preco do produto
            const productPrice = document.createElement('p');
            productPrice.classList = productValueFormat;
            productPrice.textContent = `${product.price.toFixed(2)} $`;
            values.appendChild(productPrice);

            // quantidade de produto
            const productQuantity = document.createElement('p');
            productQuantity.classList = productValueFormat;
            productQuantity.textContent = product.quantity;
            values.appendChild(productQuantity);

            // total
            const productTotal = document.createElement('p');
            productTotal.classList = productValueFormat;
            productTotal.textContent = `${(product.price * product.quantity).toFixed(2)} $`;
            values.appendChild(productTotal);

            // botão para remover o produto
            const btnRemove = document.createElement('button');
            btnRemove.classList = 'bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600';
            btnRemove.textContent = "Remover";
            btnRemove.addEventListener('click', () => deleteProduct(product.id));
            values.appendChild(btnRemove);

            productList.appendChild(divProduct);
        });

        // criar o link para remover todos os produtos
        productList.insertAdjacentHTML('beforeend',`
            <div class="flex mt-4 justify-end">
                <button class="text-red-500 hover:text-red-700 hover:underline" onclick="deleteAllProducts()">Apagar tudo</button>
            </div>
        `);

    } catch(error) {
        productList.innerHTML = `<p class="text-red-500 text-center">Aconteceu um erro: ${error}</p>`;
    }
}

async function deleteProduct(id){
    try {
        
        // efetuar o pedido à API
        const response = await fetch(`${BASE_URL}/delete/${id}`, {
            method: 'DELETE'
        });

        // avaliar a resposta
        if(!response.ok){
            throw new Error(`Erro ao remover produto: ${response.statusText}`);
        }

        // tratar a resposta
        await response.json();

        clearProductList();
        fetchProducts();

    } catch (error) {
        productList.innerHTML = `<p class="text-red-500 text-center">Aconteceu um erro: ${error}</p>`;
    }
}

async function deleteAllProducts(){
    try {

        // efetuar o pedido à API
        const response = await fetch(`${BASE_URL}/delete_all`, {
            method: 'DELETE'
        });

        // avaliar a resposta
        if(!response.ok){
            throw new Error(`Erro ao remover produto: ${response.statusText}`);
        }

        // tratar a resposta
        await response.json();

        clearProductList();
        fetchProducts();

    } catch (error) {
        productList.innerHTML = `<p class="text-red-500 text-center">Aconteceu um erro: ${error}</p>`;
    }
}