/* 
Neste exemplo vamos mostrar de forma simples como podemos usar os eventos de formulário para
criar dinâmicas no formulários, bem como validar os inputs antes de enviar o formulário.
*/

const textName = document.querySelector("#name");
const textEmail = document.querySelector("#email");
const radios = document.querySelectorAll('input[name="radio_hobbies"]');
const checkboxes = document.querySelectorAll('input[name^="check_hobby_"]');

// adicionar o evento que permite mostrar ou esconder os hobbies
radios.forEach((radio) => {
    radio.addEventListener('change', () => {
        if(radio.value === 'sim'){
            document.querySelector("#checkboxes").classList.remove('hidden');
        } else {
            document.querySelector("#checkboxes").classList.add('hidden');

            // "des-checkar" todas as checkboxes
            checkboxes.forEach(checkbox => checkbox.checked = false );
        }
    });
});

// no caso de nome ou email não estarem preenchidos, não permite submeter o formulário.
document.querySelector("#form1").addEventListener('submit', (event) => {

    event.preventDefault();

    // validar o nome
    if(textName.value === ''){
        alert('Por favor preencha o seu nome');
        textName.focus();
        return;
    }

    // validar o email
    if(textEmail.value === ''){
        alert('Por favor preencha o seu email');
        textEmail.focus();
        return;
    }

    // tudo foi validado
    console.log('formulário OK!');

    // avançar na submissão do formulário
    event.target.submit();
});

// MUITO IMPORTANTE:
/* 
Este é apenas um exemplo simples de validação de formulário.
As validações devem ser mais minuciosas.
Não esquecer que, independentemente de podermos validar o formulário com JavaScript,
o que permite que o cliente tenha uma informação imediata dos erros, a verdadeira validação
deve sempre acontecer do lado do servidor que recebe a requisição POST do formulário.
O JavaScript funciona do lado do cliente (browser) e pode ser desativado, alterado e manipulado
em certos pontos. Muita atenção a este aspeto.
*/