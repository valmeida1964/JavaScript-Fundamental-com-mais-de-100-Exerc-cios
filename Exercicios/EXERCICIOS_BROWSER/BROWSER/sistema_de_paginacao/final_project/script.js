/* 
Sistema de paginação
------------------------------------------------
Neste exemplo, vamos crir um sistema de paginação apenas com as seguintes funcionalidades:
- primeira página
- página anterior
- próxima página
- última página
Os dados vão ser apresentados numa tabela que vai ter x linhas por página.
Este sistema vai ficar adaptado a um volume variável de registos.
*/


// gerar dados
const totalRows = 13;
const data = generateData(totalRows);

// propriedades da paginação
const pagination = {
    currentPage: 1,
    rowsPerPage: 5,
    totalRows: data.length,
    totalPages: null
};

// calcular o total de páginas
pagination.totalPages = Math.ceil(pagination.totalRows / pagination.rowsPerPage);

const tableBody = document.querySelector("#data-table");

renderTable();

function renderTable(){

    tableBody.innerHTML = "";
    const start = (pagination.currentPage - 1) * pagination.rowsPerPage;
    const end = start + pagination.rowsPerPage;
    const pageData = data.slice(start, end);

    pageData.forEach( item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border-1 border-slate-300 p-2">${item.id}</td>
            <td class="border-1 border-slate-300 p-2">${item.name}</td>
            <td class="border-1 border-slate-300 p-2">${item.email}</td>
        `;
        tableBody.appendChild(row);
    });

    // controlar e apresentar os dados da paginação
    updatePageNumber();
    updatePaginationControls();
}

function generateData(total){
    const data = [];
    for (let i = 1; i <= total; i++){
        data.push({
            id: i,
            name: `Item ${i}`,
            email: `email${i}@gmail.com`
        });
    }
    return data;
}

function updatePaginationControls()
{
    const firstPageButton = document.querySelector("#first-page");
    const previousPageButton = document.querySelector("#prev-page");
    const nextPageButton = document.querySelector("#next-page");
    const lastPageButton = document.querySelector("#last-page");

    if(pagination.currentPage === 1){
        disableButton(firstPageButton);
        disableButton(previousPageButton);
    }

    if(pagination.currentPage === pagination.totalPages){
        disableButton(nextPageButton);
        disableButton(lastPageButton);
    }

    if(pagination.currentPage > 1){
        enableButton(firstPageButton);
        enableButton(previousPageButton);
    }

    if(pagination.currentPage < pagination.totalPages){
        enableButton(nextPageButton);
        enableButton(lastPageButton);
    }
}

function disableButton(button){
    button.disable = true;
    button.classList.add('cursor-not-allowed', 'opacity-50');
    button.classList.remove('cursor-pointer');
}

function enableButton(button){
    button.disable = false;
    button.classList.remove('cursor-not-allowed', 'opacity-50');
    button.classList.add('cursor-pointer');
}

function updatePageNumber(){
    const oneOff = document.querySelector("#one-off");
    const totalPages = document.querySelector("#total_pages");
    oneOff.textContent = pagination.currentPage;
    totalPages.textContent = pagination.totalPages;
}

// eventos dos botões de paginação
document.querySelector("#first-page").addEventListener('click', () => {
    pagination.currentPage = 1;
    renderTable();
});

document.querySelector("#prev-page").addEventListener('click', () => {
    if(pagination.currentPage > 1) {
        pagination.currentPage--;
        renderTable();
    }
});

document.querySelector("#next-page").addEventListener('click', () => {
    if(pagination.currentPage < pagination.totalPages){
        pagination.currentPage++;
        renderTable();
    }
});

document.querySelector("#last-page").addEventListener('click', () => {
    pagination.currentPage = pagination.totalPages;
    renderTable();
});
