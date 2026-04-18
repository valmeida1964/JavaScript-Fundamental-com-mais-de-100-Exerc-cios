/* 
Random Password Generator
-------------------------
Um gerador de senha aleatória com os seguintes recursos:
- O usuário pode escolher o comprimento da senha
- O usuário pode escolher incluir letras minúsculas, maiúsculas, dígitos e caracteres especiais
- O usuário pode copiar a senha para a área de transferência
- Pode gerar senhas de 6 a 20 caracteres
*/

// buscar elementos das opções
let passwordLength = document.querySelector("#password_length");
passwordLength.min = 6;
passwordLength.max = 20;
// buscar as checkboxes
let checkLowerCase = document.querySelector("#check_lowercase");
let checkUpperCase = document.querySelector("#check_uppercase");
let checkDigits = document.querySelector("#check_digits");
let checkSymbols = document.querySelector("#check_symbols");

let passwordOutput = document.querySelector("#password");
passwordOutput.innerHTML = "&nbsp;";

// botão para gerar a password
document.querySelector("#btn_generate_password").addEventListener('click', () => {

    // verificar se, pelo menos, uma das checkboxes está ativa
    if(!checkUpperCase.checked && !checkLowerCase.checked && ! checkDigits.checked && ! checkSymbols.checked){
        passwordOutput.innerHTML = "Por favor, selecione pelo menos uma opção";
        return;
    }

    // valida se a password terá entre 6 e 20 caracteres
    if(passwordLength.value < 6 || passwordLength.value > 20){
        passwordOutput.innerHTML = "O tamanho da password deve ser entre 6 e 20 caracteres";
        return;
    }

    // gerar password
    passwordOutput.innerHTML = generatePassword(
        passwordLength.value,
        checkLowerCase.checked,
        checkUpperCase.checked,
        checkDigits.checked,
        checkSymbols.checked
    );

});

function generatePassword(length, lowercase, uppercase, digits, symbols){
    let password = '';
    let chars = '';

    // definir que tipo de caracteres vamos usar na password
    if(lowercase){
        chars += "abcdefghijklmnopqrstuvwxyz";
    }

    if(uppercase){
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(digits){
        chars += "0123456789";
    }

    if(symbols){
        chars += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    }

    // gerar a password
    for( let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

// botão para copiar a password para o clipboard
document.querySelector("#btn_copy_to_clipboard").addEventListener('click', () => {

    // verificar se existe password
    if(passwordOutput.textContent.length < 6) return;

    // copiar a password para o clipboard
    navigator.clipboard.writeText(passwordOutput.textContent);
    alert('Password copiada para a área de transferência');

});