/* 
Contact List
-------------------------------
Cria uma lista de contatos com nome e telefone, onde o usuário pode adicionar novos contatos,
deletar contatos e visualizar todos os contatos cadastrados.
*/

// create an empty contact collection
let contacts = [];

// get html elements
const text_name = document.querySelector('input[name="text_name"]');
const text_phone = document.querySelector('input[name="text_phone"]');

// render contacts
renderContacts();

// submit button
document.querySelector("#btn_add_contact").addEventListener('click', () => {

    // check if both fields are not empty
    let name = text_name.value;
    let phone = text_phone.value;
    if(name == "" || phone == "") return;

    createNewContact(name, phone);

});

// delete all button
document.querySelector("#btn_delete_all").addEventListener('click', () => {

    // clear contacts collection
    contacts = [];

    // render contacts
    renderContacts();

});

function createNewContact(name, phone){

    // check if contact already exists
    let contact_exists = contacts.find(contact => contact.name == name && contact.phone == phone);
    if(contact_exists){
        alert('O contato já existe!');
        return;
    }

    // define new contact
    let new_contact = {
        name,
        phone,
        id: createUniqueID()
    };

    // add new contact to collection
    contacts.push(new_contact);

    // clear input fields
    text_name.value = "";
    text_phone.value = "";

    // render contacts
    renderContacts();

    // focus on name input field
    text_name.focus();
}

function createUniqueID(){
    let chars = 'abcdefABCDEF0123456789';
    let uuid = '';
    for(let index = 0; index < 16; index++){
        uuid += chars[Math.floor(Math.random() * chars.length)];
    }
    return uuid;
}

function renderContacts() {

    // clear contact cards
    document.querySelector("#contacts").innerHTML = "";

    // check if there are contacts to render
    if (contacts.length == 0) {
        document.querySelector("#no_contacts").classList.remove('hidden');
        return;
    }

    // hide no contacts message
    document.querySelector("#no_contacts").classList.add('hidden');

    // creates contact wrapper
    let contact_wrapper = document.createElement('div');
    contact_wrapper.classList.add('col-10', 'card', 'p-4');

    contacts.forEach(contact => {
        let contact_card = document.createElement('div');
        contact_card.classList.add('bg-slate-200', 'border-1', 'border-slate-400', 'rounded-lg', 'p-3', 'mb-3', 'shadow-sm', 'flex', 'justify-between', 'items-center');
        contact_card.innerHTML = `
            <div class="w-full" id="${contact.id}">
                <p class="text-lg text-sky-700" id="contact_name">${contact.name}</p>
                <p class="text-2xl text-slate-600 font-bold" id="contact_phone">${contact.phone}</p>
            </div>
            <div class="w-1/4 flex justify-end">
                <button class="bg-red-700 text-slate-100 p-2 px-3 text-center border-1 border-slate-400 rounded-lg cursor-pointer shadow-md hover:bg-red-500 hover:text-slate-100" onclick="deleteContact('${contact.id}')">X</button>
            </div>
        `;

        // add contact_card to contact_wrapper
        contact_wrapper.appendChild(contact_card);
    });

    document.querySelector("#contacts").appendChild(contact_wrapper);

}

function deleteContact(id){
    
    // remove contact from collection
    contacts = contacts.filter(contact => contact.id != id);

    // render contacts
    renderContacts();
}