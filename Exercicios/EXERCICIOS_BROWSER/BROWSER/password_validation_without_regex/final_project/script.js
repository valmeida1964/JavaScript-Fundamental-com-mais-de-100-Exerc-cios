/* 
Validação de senha
------------------------------------------------------
A ideia deste exercício é mostrar como podemos validar várias regras de senha utilizando JavaScript.
A senha deve ter as seguintes regras:
- conter pelo menos 6 caracteres,
- no máximo, 16 caracteres,
- pelo menos uma letra minúscula,
- pelo menos uma letra maiúscula,
- pelo menos um dígito

IMPORTANTE: Todas as regras devem ser validadas SEM o uso de expressões regulares.
*/

document.querySelector("#btn_validar").addEventListener('click', () => {

    const senha = document.querySelector("#senha").value;
    const resultado = document.querySelector("#resultado");

    // verificar se o tamanho da senha é válido
    if(senha.length < 6 || senha.length > 16){
        resultado.textContent = 'A senha deve ter entre 6 e 16 caracteres.';
        return;
    }

    // validar se contém minúscula, maiúscula e dígito
    let temMinuscula = false;
    let temMaiuscula = false;
    let temDigito = false;

    for(let i = 0; i < senha.length; i++){

        const char = senha[i];

        if(char >= 'a' && char <= 'z'){
            temMinuscula = true;
        } else if(char >= 'A' && char <= 'Z'){
            temMaiuscula = true;
        } else if(char >= '0' && char <= '9'){
            temDigito = true;
        }
    }

    // validar se todas as regras estão cumpridas
    if(temMinuscula && temMaiuscula && temDigito){
        resultado.textContent = 'SENHA VÁLIDA!';
        resultado.classList.replace('text-red-500', 'text-green-500');
    } else {
        resultado.textContent = 'A senha deve conter, pelo menos, uma minúscula, uma maiúscula e um dígito.';
        resultado.classList.replace('text-green-500', 'text-red-500');
    }
});