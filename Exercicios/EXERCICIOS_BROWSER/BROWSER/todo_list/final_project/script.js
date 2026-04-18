/* 
Lista de tarefas
------------------------------------------------------------
Criar as regras de negócio para uma lista de tarefas.
Já está implementada a parte de interface, com um input para adicionar uma tarefa e outro input para editar uma tarefa.
De igual modo já existem os botões para adicionar, editar e cancelar a edição.
Cada tarefa deve apresentar a sua descrição. No caso de ainda estar pendente, deve manter-se normal.
Quando estiver concluída, o seu texto deve ser riscado.
Devem existir três links para cada tarefa:
- Concluir: ao clicar, a tarefa deve ser marcada como concluída e o texto deve ser riscado.
- Editar: ao clicar, o texto da tarefa deve ser colocado no input de edição e mostrar a área de edição.
- Remover: ao clicar, a tarefa deve ser removida da lista.
------------------------------------------------------------
funcionalidades extra que podem ser implementadas:
- botão para remover todas as tarefas
- botão para remover apenas as tarefas concluídas
- colocação da lista de tarefas no localStorage para persistência.
------------------------------------------------------------
*/

// elementos da DOM
const novaTarefa = document.querySelector("#nova_tarefa");
const editarTarefa = document.querySelector("#editar_tarefa");

const inputNovaTarefa = document.querySelector("#input_nova_tarefa");
const inputEditarTarefa = document.querySelector("#input_editar_tarefa");

// apresentação da lista de tarefas
const listaTarefas = document.querySelector("#lista_tarefas");

document.querySelector("#btn_adicionar").addEventListener('click', btnAdicionarTarefa);
document.querySelector("#btn_editar").addEventListener('click', btnEditarTarefa);
document.querySelector("#btn_cancelar").addEventListener('click', btnCancelarEdicao);

// coleção das tarefas
const tasks = [];

// guardar o id da tarefa a editar
let currentId = null;

renderizarTarefas();

function renderizarTarefas(){
    
    // limpar a lista de tarefas
    listaTarefas.innerHTML = "";

    // verifica se existem tarefas para apresentar
    if(tasks.length === 0){
        listaTarefas.innerHTML = '<p class="text-center text-red-400">Nenhuma tarefa para apresentar.</p>';
        return;
    }

    // existem tarefas...
    tasks.forEach( task => {

        const divTarefa = document.createElement('div');
        divTarefa.classList.add("border-1", "border-gray-300", "shadow-md", "rounded-lg", "p-2", "m-2", "flex", "w-full");

        // descrição da tarefa
        const descricaoTarefa = document.createElement('p');
        descricaoTarefa.classList.add("ml-2", "flex-1");
        descricaoTarefa.textContent = task.description;

        // a tarefa está completa?
        if(task.completed){
            descricaoTarefa.classList.add("line-through", "text-gray-400");
        } else {
            descricaoTarefa.classList.add("text-gray-800");
        }

        divTarefa.appendChild(descricaoTarefa);

        // concluir
        const concluirLink = document.createElement('p');
        concluirLink.classList.add("text-blue-500", "cursor-pointer", "mr-4", "hover:underline");
        concluirLink.textContent = "Concluir";
        concluirLink.onclick = () => acaoConcluirTarefa(task.id);

        // editar
        const editarLink = document.createElement('p');
        editarLink.classList.add("text-blue-500", "cursor-pointer", "mr-4", "hover:underline");
        editarLink.textContent = "Editar";
        editarLink.onclick = () => acaoEditarTarefa(task.id);

        // remover
        const removerLink = document.createElement('p');
        removerLink.classList.add("text-red-500", "cursor-pointer", "hover:underline");
        removerLink.textContent = "Remover";
        removerLink.onclick = () => acaoRemoverTarefa(task.id);

        // verificar que opções devem aparecer na tarefa
        if(!task.completed){
            divTarefa.appendChild(concluirLink);
            divTarefa.appendChild(editarLink);
            divTarefa.appendChild(removerLink);
        } else {
            divTarefa.appendChild(removerLink);
        }

        listaTarefas.appendChild(divTarefa);
    });
}

function btnAdicionarTarefa(){
    let descricao = inputNovaTarefa.value.trim();
    if(descricao === ""){
        alert("Por favor insira uma descrição para a tarefa.");
        inputNovaTarefa.focus();
        return;
    }

    const novaTarefa = {
        id: getMaxId(),
        description: descricao,
        completed: false
    };

    tasks.push(novaTarefa);
    inputNovaTarefa.value = "";
    renderizarTarefas();
    inputNovaTarefa.focus();
}

function btnEditarTarefa(){
    const descricao = inputEditarTarefa.value.trim();
    if(descricao === ""){
        alert("Por favor insira uma descrição da tarefa.");
        return;
    }

    const task = tasks.find(task => task.id === currentId);

    if(task){
        task.description = descricao;
        inputEditarTarefa.value = "";
        editarTarefa.classList.add("hidden");
        novaTarefa.classList.remove("hidden");
        renderizarTarefas();
    } else {
        alert("Tarefa não encontrada.");
    }
}

function btnCancelarEdicao(){
    editarTarefa.classList.add("hidden");
    novaTarefa.classList.remove("hidden");
    inputEditarTarefa.value = "";
    inputNovaTarefa.value = "";
    inputNovaTarefa.focus();
}

function acaoConcluirTarefa(id){
    const task = tasks.find(task => task.id === id);
    if(task){
        task.completed = true;
        renderizarTarefas();
    }
}

function acaoEditarTarefa(id){
    const task = tasks.find(task => task.id === id);
    if(task){
        inputEditarTarefa.value = task.description;
        editarTarefa.classList.toggle("hidden");
        novaTarefa.classList.toggle("hidden");
        currentId = task.id;
        inputEditarTarefa.focus();
    }
}

function acaoRemoverTarefa(id){
    const index = tasks.findIndex(task => task.id === id);
    if(index !== -1){
        tasks.splice(index, 1);
        renderizarTarefas();
    }
}

function getMaxId(){
    
    if(tasks.length === 0){
        return 1;
    }

    return tasks[tasks.length - 1].id + 1;
}
