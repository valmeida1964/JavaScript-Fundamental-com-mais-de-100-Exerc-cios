/* 
Validação de campos obrigatórios em um formulário de login
------------------------------------------
Vamos validar se os dois inputs têm dados preenchidos, caso contrário
será apresentada uma mensagem de erro por baixo de cada input.
*/

// prevenir que o formulário seja submetido
document.querySelector('[name="login_form"]').addEventListener('submit', (event) => {
    event.preventDefault();
});

let validationError = false;

// elementos da DOM
const form = document.forms["login_form"];
const username = form["username"];
const password = form["password"];

// botão de submissão
document.querySelector("#btn_submit").addEventListener('click', () => {

    removeAllErros();

    // verificar cada um dos inputs
    checkRequiredField(username);
    checkRequiredField(password);

    if(validationError){
        return;
    }

    // submissão do formulário com sucess
    console.log("Formulário submetido com sucesso!");

});

function removeAllErros(){
    document.querySelectorAll('[id$="_error"]').forEach(error => error.remove());
    validationError = false;
}

function checkRequiredField(fieldName){

    if(fieldName.value === ""){
        fieldName.insertAdjacentHTML("afterend", `<span class="text-red-400 italic" id="${fieldName.name}_error">Campo de preenchimento obrigatório.</span>`)
        validationError = true;
    }
}