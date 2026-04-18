/* 
Adivinha o número
---------------------
Jogo simples onde o utilizador tem de adivinhar um número entre 1 e 100.
O sistema vai dizer se o número é maior ou menor que o número a adivinhar.
O número de tentativas é contado e mostrado ao utilizador.
*/

// iniciar o jogo
let minValue = 1;
let maxValue = 100;
let numberToGuess = 0;
let totalAttempts = 0;

let hint = document.querySelector("#id_hint");

initGame();

// botão restart
document.querySelector("#btn_restart").addEventListener('click', initGame);

// inserir dados no input
document.querySelector("#text_number").addEventListener('keypress', (e) => {
    if(isNaN(e.key)){
        e.preventDefault();
    }
});

document.querySelector("#btn_guess").addEventListener('click', () => {

    // verifica se o valor inserido é válido
    let numberEntered = parseInt(document.querySelector("#text_number").value);
    if(isNaN(numberEntered)){
        return;
    }

    // atualizar o número de tentativas
    totalAttempts++;
    document.querySelector("#attempts").innerHTML = totalAttempts;

    // verificar se o número é correto
    if(numberEntered === numberToGuess){
        hint.innerHTML = `Parabéns! Conseguiste adivinhar em ${totalAttempts} tentativas.`;
        return;
    }

    // verifica se o número foi inferior ou superior
    if(numberEntered > numberToGuess){
        hint.innerHTML = 'Tenta um número mais baixo';
    } else {
        hint.innerHTML = 'Tenta um número mais alto';
    }

    // focus no input
    document.querySelector("#text_number").focus();

});

function initGame(){

    // gerar o número aleatório
    numberToGuess = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    // mostrar o valor mínimo e máximo
    document.querySelectorAll(".text-sky-600")[0].innerHTML = minValue;
    document.querySelectorAll(".text-sky-600")[1].innerHTML = maxValue;
    
    // limpar a pista para adivinhar o número
    hint.innerHTML = '';
    
    // limpar o input do número que queremos usar para adivinhar
    document.querySelector("#text_number").value = '';
    
    // número de tentativas
    totalAttempts = 0;
    document.querySelector("#attempts").innerHTML = totalAttempts;
}