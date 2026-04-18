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

IMPORTANTE: Todas as regras devem ser validadas COM o uso de expressões regulares.
*/

document.querySelector("#btn_validar").addEventListener('click', () => {

    const senha = document.querySelector("#senha").value;
    const resultado = document.querySelector("#resultado");

    // usar expressão regular para validar a nossa senha
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,16}$/;
    if(regex.test(senha)){
        resultado.textContent = "SENHA VÁLIDA!";
        resultado.classList.replace('text-red-500', 'text-green-500');
    } else {
        resultado.textContent = "Senha inválida! Verifique as regras.";
        resultado.classList.replace('text-green-500', 'text-red-500');
    }

});

/* 
Explicação da Regex:
^ - Início da string
(?=.*[a-z]) - Pelo menos uma letra minúscula
(?=.*[A-Z]) - Pelo menos uma letra maiúscula
(?=.*\d) - Pelo menos um dígito
[a-zA-Z\d]{6,16} - Entre 6 e 16 caracteres que podem ser letras (maiúsculas ou minúsculas) ou dígitos
$ - Fim da string

NOTA: (?=.*[a-z]) significa:
( - início de um grupo de captura
?= - lookahead positivo (verifica se a condição é verdadeira)
.*[a-z] - qualquer caractere seguido de pelo menos uma letra minúscula
) - fim do grupo de captura
*/