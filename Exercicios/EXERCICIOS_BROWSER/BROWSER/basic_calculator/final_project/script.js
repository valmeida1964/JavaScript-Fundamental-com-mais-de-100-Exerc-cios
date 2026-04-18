/* 
Basic Calculator
----------------------------
Vamos criar uma calculadora simples que pode fazer operações matemáticas básicas como adição, subtração, multiplicação e divisão.
Tem um layout simples, semelhante a uma calculadora normal, com botões para cada tipo de operação, um botão de igual e um botão de reset.
*/

const buttons = document.querySelectorAll('[id^="btn_"]');
const display = document.querySelector("#display");

const mathOperationsAndSymbols = {
    add: '+',
    sub: '-',
    multi: 'x',
    div: ':'
};

let operation = '';

updateDisplay();

function updateDisplay(){
    if(operation === ''){
        display.textContent = "0";
        display.classList.remove('text-white');
        display.classList.add('text-slate-400');
    } else {
        display.textContent = operation;
        display.classList.remove('text-slate-400');
        display.classList.add('text-white');
    }
}

buttons.forEach( button => {
    
    button.addEventListener('click', (event) => {

        // qual é o símbolo?
        const symbol = event.target.id.split('_')[1];

        // no caso de ser reset
        if(symbol === 'reset'){
            operation = '';
            updateDisplay();
            return;
        }

        // inserção de dígitos
        if(symbol.match(/^\d$/)){
            operation += symbol;
            updateDisplay();
            return;
        }

        // símbolos das operações matemáticas
        if(['add', 'sub', 'multi', 'div'].includes(symbol)){

            // se a operação está vazia, não adiciona símbolo
            if(operation == '') return;

            // verfica se já existe um símbolo na operação
            if(operation.match(/[\+\-\x\:]/)) return;

            // adicionar o símbolo matemático na operção
            operation += mathOperationsAndSymbols[symbol];
            updateDisplay();
            return;
        }

        // quando clicamos no igual
        if(symbol === 'equal'){

            // se a operação está vazia, não adiciona símbolo
            if(operation == '' || !operation.match(/[\+\-\x\:]/)) return;

            // divisão dos elementos da operação
            let operationArray = operation.split(/[\+\-\x\:]/);

            // verifica se existem duas parcelas/números
            if(operationArray[0] === '' || operationArray[1] === '') return;

            let mathOperation = operation.match(/[\+\-\x\:]/)[0];

            if(mathOperation === '+'){
                operation = parseInt(operationArray[0]) + parseInt(operationArray[1]);
            } else if (mathOperation === '-') {
                operation = parseInt(operationArray[0]) - parseInt(operationArray[1]);
            } else if (mathOperation === 'x') {
                operation = parseInt(operationArray[0]) * parseInt(operationArray[1]);
            } else {
                operation = parseInt(operationArray[0]) / parseInt(operationArray[1]);
            }

            // converter a operação numa string
            operation = operation.toString();

            updateDisplay();
        }
    });
});