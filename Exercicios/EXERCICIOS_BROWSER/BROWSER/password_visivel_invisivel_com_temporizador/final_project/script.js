/* 
Mostrar e esconder as senhas com temporizador
-----------------------------------------------------
Vamos criar as condições para que o usuário possa ver as senhas que está a digitar.
Deve ser mostrado um ícone de olho aberto quando a senha estiver visível.
Se o usuário clicar no ícone de olho aberto, a senha deve ficar visível por 2 segundos e depois voltar a ficar invisível.

Referência: (Bootstrap Icons)
Olho aberto:    bi-eye
Olho fechado:   bi-eye-slash
*/


// buscar os dois inputs
const senha = document.querySelector("#senha");
const repetirSenha = document.querySelector("#repetir_senha");

// buscar os dois ícones
const visao1 = document.querySelector("#senha1");
const visao2 = document.querySelector("#senha2");

visao1.addEventListener('click', () => {

    if(senha.type === "password"){
        senha.type = "text";
        visao1.innerHTML = '<i class="bi bi-eye-slash"></i>';
        // definir um temporizador para esconder a password
        setTimeout(() => {
            senha.type = "password";
            visao1.innerHTML = '<i class="bi bi-eye"></i>';
        }, 2000);
    } else {
        senha.type = "password";
        visao1.innerHTML = '<i class="bi bi-eye"></i>';
    }
});

visao2.addEventListener('click', () => {

    if(repetirSenha.type === "password"){
        repetirSenha.type = "text";
        visao2.innerHTML = '<i class="bi bi-eye-slash"></i>';
        // definir um temporizador para esconder a password
        setTimeout(() => {
            repetirSenha.type = "password";
            visao2.innerHTML = '<i class="bi bi-eye"></i>';
        }, 2000);
    } else {
        repetirSenha.type = "password";
        visao2.innerHTML = '<i class="bi bi-eye"></i>';
    }
});