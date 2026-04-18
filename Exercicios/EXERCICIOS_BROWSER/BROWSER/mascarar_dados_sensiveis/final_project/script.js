/* 
Mascarar dados sensíveis
------------------------------------------
Vamos introduzir um valor no input e ao clicar em "Mascarar", vai ser apresentado o valor mascarado.
Exemplo:
- valor introduzido: 123456789
- valor mascarado:   12*****89

IMPORTANTE: O número de caracteres visíveis no início e no final são configuráveis.
*/

const inputField = document.querySelector("#inputField");
const maskButton = document.querySelector("#maskButton");
const maskedValueField = document.querySelector("#maskedValueField");

// configurações do mascaramento
const visibleStart = 2;
const visibleEnd = 4;

maskButton.addEventListener('click', () => {

    // forma mais clara de escrever o código
    // let inputValue = inputField.value;
    // let maskedValue = maskValue(inputValue);
    // maskedValueField.textContent = maskedValue;

    // forma mais "profissional" de escrever o código
    maskedValueField.textContent = maskValue(inputField.value);
});

function maskValue(value){
    
    // 123456789
    // 12***6789

    const totalLength = value.length;
    const maskedLength = totalLength - visibleStart - visibleEnd;

    if(maskedLength <= 0 ){
        return value;
    }

    let visibleStartPart = value.slice(0, visibleStart);
    let visibleEndPart = value.slice(totalLength - visibleEnd);
    let maskedPart = '*'.repeat(maskedLength);

    return `${visibleStartPart}${maskedPart}${visibleEndPart}`;
}