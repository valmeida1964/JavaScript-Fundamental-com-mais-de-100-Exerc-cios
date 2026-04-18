/* 
Form Events são eventos que ocorrem em elementos de formulário, como input, select e textarea.
Já vimos que outros eventos que podemos usar nos formulários, mas os que vamos falar agora são específicos para os elementos de formulário.
Os eventos de formulário são os seguintes:
- change: Ocorre quando o valor de um elemento de formulário é alterado.
- input: Ocorre quando o valor de um elemento de formulário é alterado, mas é acionado imediatamente após a alteração, sem esperar que o elemento perca o foco.
- focus: Ocorre quando um elemento de formulário recebe o foco.
- blur: Ocorre quando um elemento de formulário perde o foco.
- submit: Ocorre quando um formulário é enviado.
- reset: Ocorre quando um formulário é redefinido.
- select: Ocorre quando um elemento de formulário é selecionado.
*/

// text inputs
const textName = document.querySelector("#name");
const textEmail = document.querySelector("#email");

// checkbox inputs
const checkUm = document.querySelector("#interest1");
const checkDois = document.querySelector("#interest2");
const checkTres = document.querySelector("#interest3");

// radio buttons
const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const radio3 = document.querySelector("#radio3");

// select
const select = document.querySelector("#select");

// já vimos que os inputs de texto têm eventos de teclas. Mas existem outros.
// quando o input recebe o foco, o evento focus é acionado. 
// E quando o input perde o foco, o evento blur é acionado.
textName.addEventListener('focus', ()=>{
    console.log('textName recebeu o foco');
});
textName.addEventListener('blur', ()=>{
    console.log('textName perdeu o foco');
});

textName.addEventListener('input', () => {
    console.log("Input alterado: " + textName.value);
});

// -------------------------------------------
// vamos olhar para as checkboxes agora. 
// quando o input de checkbox é alterado, o evento change é acionado.
// o evento change é acionado quando o input perde o foco, ou seja, 
// quando o input é alterado e depois perde o foco.
checkUm.addEventListener('change', ()=>{
    console.log('Checkbox 1 foi alterada ' + checkUm.checked);
});

// -------------------------------------------
// no caso dos radio buttons, o evento change também é acionado quando o 
// input é alterado. No entanto, o exemplo abaixo apenas mostra o resultado
// quando o radio button é "checked".
radio1.addEventListener('change', function () {
    console.log("Estado do Radio Button 1:", radio1.checked);
});

// -------------------------------------------
// se quisermos controlar o estado de cada radio button,
// temos que usar o evento change para cada um deles.
const radioButtons = document.querySelectorAll('input[name="radio"]');
radioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
        console.clear();
        console.log('Radio 1: ' + radio1.checked);
        console.log('Radio 2: ' + radio2.checked);
        console.log('Radio 3: ' + radio3.checked);
    });
});

// -------------------------------------------
select.addEventListener('change', ()=>{
    console.log('Select alterado: ' + select.value);
});

// -------------------------------------------
// o evento submit é acionado quando o formulário é enviado.
// o evento submit é acionado quando o botão de submit é clicado
// ou quando o enter é pressionado no input.
// o evento submit é acionado antes do formulário ser enviado, 
// então podemos usar este evento para validar o formulário antes 
// de enviar.

const form = document.querySelector("#form1");
form.addEventListener('submit', (event) => {    
    event.preventDefault();
    console.log('Formulário pront!');
});
