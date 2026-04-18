/* 
Meninos e Meninas
---------------------------------------------------------------
Neste projeto temos um pequeno formulário para inserir um nome e 
dois radiobuttons: um para o sexo masculino e outro para o sexo feminino.

Vamos alimentar uma coleção de objetos que vai conter nomes e sexos.
Vamos apresentar os meninos numa div do lado esquerdo e as meninas numa div do lado direito.
Por baixo de cada div, vamos apresentar o número de meninos e meninas e o total de nomes inseridos.
*/

// elementos do DOM
const inputName = document.querySelector("#inputName");
const btnAdd = document.querySelector("#btnAdd");
const btnClear = document.querySelector("#btnClear");

const recordsBoys = document.querySelector("#recordsBoys");
const recordsGirls = document.querySelector("#recordsGirls");

let kids = [];

// mostrar os dados
displayRecords();

inputName.focus();

function displayRecords() {

    // limpar dados
    recordsBoys.innerHTML = `<p class="text-slate-500">Meninos</p><hr class="border-slate-300 my-2">`;
    recordsGirls.innerHTML = `<p class="text-slate-500">Meninas</p><hr class="border-slate-300 my-2">`;

    // percorrer a coleção de objetos
    let boysCount = 0;
    let girlsCount = 0;

    if (kids.length > 0) {

        kids.forEach(kid => {
            if (kid.sex === 'boy') {
                recordsBoys.innerHTML += `<p class="text-slate-500 font-bold">${kid.name}</p>`;
                boysCount++;
            } else if (kid.sex === 'girl') {
                recordsGirls.innerHTML += `<p class="text-slate-500 font-bold">${kid.name}</p>`;
                girlsCount++;
            }
        });
    }

    if (boysCount === 0) {
        recordsBoys.innerHTML = '<p class="text-slate-400 text-center">Nenhum menino cadastrado.</p>';
    } else {
        recordsBoys.innerHTML += `<p class="text-slate-400 text-center mt-2">Total de meninos: <span class="font-bold">${boysCount}</span></p>`;
    }

    if (girlsCount === 0) {
        recordsGirls.innerHTML = '<p class="text-slate-400 text-center">Nenhuma menina cadastrada.</p>';
    } else {
        recordsGirls.innerHTML += `<p class="text-slate-400 text-center mt-2">Total de meninas: <span class="font-bold">${girlsCount}</span></p>`;
    }
}

btnAdd.addEventListener('click', () => {

    // validar os campos de preenchimento
    if(inputName.value.trim() === ''){
        alert("Por favor insira um nome válido.");
        return;
    }

    // radiobuttons
    const inputSex = document.querySelector('input[name="radioSex"]:checked');
    if(!inputSex){
        alert("Por favor defina o sexo do menino(a).");
        return;
    }

    // criar o novo objeto
    const newKid = {
        name: inputName.value.trim(),
        sex: inputSex.value
    };

    // adicionar o novo objeto à coleção
    kids.push(newKid);

    displayRecords();

    // refocar os dados
    inputName.value = "";
    inputName.focus();
});

btnClear.addEventListener('click', () => {
    if(confirm('Tem a certeza que quer limpar os dados?')) {
        kids = [];
        displayRecords();
    }
});