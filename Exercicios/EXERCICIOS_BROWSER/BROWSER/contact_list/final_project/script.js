/* 
Contact List
-------------------------------
Cria uma lista de contatos com nome e telefone, onde o usuário pode adicionar novos contatos,
deletar contatos e visualizar todos os contatos cadastrados.
*/

// criar a lista de contactos
let contacts = [];

// buscar os elementos do DOM
const text_name = document.querySelector('input[name="text_name"]');
const text_phone = document.querySelector('input[name="text_phone"]');

// renderizar contactos
renderContacts();

// adição de novo contacto
document.querySelector("#btn_add_contact").addEventListener('click', () => {

    let name = text_name.value;
    let phone = text_phone.value;

    // verificar se ambos os inputs têm dados
    if( name === "" || phone === "") return;

    // inserir novo contacto na lista
    createNewContact(name, phone);

});

document.querySelector("#btn_delete_all").addEventListener('click', () => {
    
    // limpar a lista de contactos
    contacts = [];

    // renderizar os contactos
    renderContacts();
});

function createNewContact(name, phone){

    // validar se o contacto já existe
    let contactExists = contacts.find(contact => contact.name == name && contact.phone == phone);
    if(contactExists){
        alert('O contacto já existe');
        return;
    }

    // adicionar o novo contacto à coleção
    let newContact = {
        name,
        phone,
        id: createUniqueId()
    };

    contacts.push(newContact);
    
    // preparar a adição do próximo contacto
    text_name.value = "";
    text_phone.value = "";

    // renderizar os contactos
    renderContacts();

    // colocar focus no input do nome
    text_name.focus();
}

function createUniqueId(){
    let chars = 'abcdefABCDEF0123456789';
    let uuid = '';
    for(let index = 0; index < 16; index++){
        uuid += chars[Math.floor(Math.random() * chars.length)];
    }
    return uuid;
}

function renderContacts(){

    // limpar lista de contactos
    document.querySelector("#contacts").innerHTML = "";

    // verificar se existem contactos para renderizar
    if (contacts.length === 0){
        document.querySelector("#no_contacts").classList.remove("hidden");
        document.querySelector("#contacts").classList.add("hidden");
        return;
    }

    document.querySelector("#no_contacts").classList.add("hidden");

    // apresentação de contactos
    let divContacts = document.querySelector("#contacts");

    contacts.forEach(contact => {
        let contactCard = document.createElement('div');

        // construir o aspeto visual de cada contacto
        contactCard.classList.add('flex', 'justify-between', 'items-center', 'bg-slate-200', 'border-1', 'bortder-slate-400', 'rounded-lg', 'p-3', 'mb-3', 'shadow-sm');
        contactCard.innerHTML = `
            <div class="w-full" id="${contact.id}">
                <p class="text-lg text-sky-700">${contact.name}</p>
                <p class="text-2xl text-slate-600 font-bold">${contact.phone}</p>
            </div>
            <div class="w-1/4 flex justify-end">
                <button class="bg-red-700 text-slate-100 p-2 px-3 text-center border-1 border-slate-400 rounded-lg cursor-pointer shadow-md hover:bg-red-500 hover:text-white" onclick="deleteContact('${contact.id}')">X</button>
            </div>
        `;

        divContacts.appendChild(contactCard);
    });

    divContacts.classList.remove("hidden");
}

function deleteContact(id){

    // remover o contacto da coleção
    contacts = contacts.filter(contact => contact.id != id);

    // renderizar a coleção de contacto
    renderContacts();
}