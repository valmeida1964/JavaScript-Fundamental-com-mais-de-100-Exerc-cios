/* 
Mostrar e esconder as senhas
-----------------------------------------------------
Vamos criar as condições para que o usuário possa ver as senhas que está a digitar.
Deve ser mostrado um ícone de olho aberto quando a senha estiver visível e um ícone de olho fechado
quando a senha estiver invisível.

Referência: (Bootstrap Icons)
Olho aberto:    bi-eye
Olho fechado:   bi-eye-slash
*/

// buscar os inputs
const senha = document.querySelector("#senha");
const repetirSenha = document.querySelector("#repetir_senha");

const visao1 = document.querySelector("#senha1");
const visao2 = document.querySelector("#senha2");

visao1.addEventListener('click', () => {
    if(senha.type === "password"){
        senha.type = "text";
        visao1.innerHTML = '<i class="bi-eye-slash"></i>';
    } else {
        senha.type = "password";
        visao1.innerHTML = '<i class="bi-eye"></i>';
    }
});

visao2.addEventListener('click', () => {
    if(repetirSenha.type === "password"){
        repetirSenha.type = "text";
        visao2.innerHTML = '<i class="bi-eye-slash"></i>';
    } else {
        repetirSenha.type = "password";
        visao2.innerHTML = '<i class="bi-eye"></i>';
    }
});