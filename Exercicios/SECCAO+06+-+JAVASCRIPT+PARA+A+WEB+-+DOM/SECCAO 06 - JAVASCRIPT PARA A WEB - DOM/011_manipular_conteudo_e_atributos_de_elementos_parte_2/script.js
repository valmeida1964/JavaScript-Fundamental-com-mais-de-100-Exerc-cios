// visualizar o input da senha
let senha = '123456';
document.querySelectorAll('input[type="password"]').forEach(input => {
    input.value = senha;
});

function visualizarSenha(){
    let senhaInput = document.querySelector('input[name="senha"]');
    if(senhaInput.type === "password"){
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }   
}

// o nome está a permitir mais do que 20 caracteres, vamos limitar a 20
document.querySelector('input[name="nome"]').setAttribute('maxlength', 20);

// remover o atributo de maxlength
let nome = document.querySelector('input[name="nome"]');
nome.removeAttribute('maxlength');

if(nome.hasAttribute('maxlength')){
    nome.removeAttribute('maxlength');
}

// vamos checkar todas as checkboxes
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach( checkbox => {
    checkbox.checked = true;
});

checkboxes.forEach( checkbox => {
    checkbox.checked = false;
});


