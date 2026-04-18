/* 
Jogo da Memória Visual
----------------------------------------------------------
Este é o famoso jogo da memória, onde o jogador deve encontrar
pares de cartas iguais. O jogo é composto por 30 cartas. Portanto, existem 15 pares de cartas.
Cada carta tem 120px por 120px.
O quadro de jogo deve ser montado via JavaScript, utilizando o DOM.
As cartas devem ser embaralhadas e dispostas em um tabuleiro viradas para baixo.
Quando o jogador clicar em uma carta, ela deve ser virada para cima.
Quando o jogador clicar em uma segunda carta, ela deve ser virada para cima.
Se as cartas forem iguais, elas devem permanecer viradas para cima.
Se forem diferentes, devem ser viradas para baixo novamente.
O jogo termina quando o jogador encontrar todos os pares de cartas.
Existe um contador de tentativas, que deve ser incrementado a cada tentativa.
As cartas viradas para baixo devem ter um padrão igual entre todas.
*/

// variáveis globais
const cards = defineCards();
const shuffledCards = [];

let firstCard = null;
let secondCard = null;
let attempts = 0;
let mainBoard = document.querySelector("#game_board");
let totalCardsClicked = 0;
let startButton = document.querySelector("#button_start");
let displayAttempts = document.querySelector("#attempts");

startButton.addEventListener('click', startGame);

startGame();

function defineCards(){
    return [
        { id: 1, image: '1.jpg'},
        { id: 2, image: '2.jpg'},
        { id: 3, image: '3.jpg'},
        { id: 4, image: '4.jpg'},
        { id: 5, image: '5.jpg'},
        { id: 6, image: '6.jpg'},
        { id: 7, image: '7.jpg'},
        { id: 8, image: '8.jpg'},
        { id: 9, image: '9.jpg'},
        { id: 10, image: '10.jpg'},
        { id: 11, image: '11.jpg'},
        { id: 12, image: '12.jpg'},
        { id: 13, image: '13.jpg'},
        { id: 14, image: '14.jpg'},
        { id: 15, image: '15.jpg'},
    ];
}

function startGame(){
    attempts = 0;
    displayAttempts.textContent = attempts;
    shuffledCards.length = 0;
    firstCard = null;
    secondCard = null;

    // constroi o tabuleiro
    buildGameBoard();

    // baralhar as cartas
    shuffleCards();

    // eventos das cartas
    addCardClickEvents();
}

function buildGameBoard(){
    mainBoard.innerHTML = "";

    // construir a board
    for(let i = 1; i <= cards.length * 2; i++){
        const boardItem = document.createElement('div');
        boardItem.classList.add("border-1", "border-slate-300", "w-[120px]", "h-[120px]");
        boardItem.setAttribute('id', `board_${i}`);
        boardItem.style.backgroundImage = 'url("cards/back.jpg")';
        mainBoard.appendChild(boardItem);
    }
}

function shuffleCards(){
    // embaralhar as cartas
    for(let i = 0; i < cards.length; i++){
        shuffledCards.push(cards[i]);
        shuffledCards.push(cards[i]);
    }

    // misturar as cartas
    shuffledCards.sort(() => Math.random() - 0.5 );
}

function addCardClickEvents(){

    // adicionar eventos click a todas as cartas
    const boardItems = document.querySelectorAll('[id^="board_"]');
    boardItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            handleCardClick(item, index);
        });
    });
}

function handleCardClick(item, index){

    // verifica se a carta já foi anteriormente virada
    if(item.style.backgroundImage !== 'url("cards/back.jpg")'){
        return;
    }

    // verificar se foram clicadas duas cartas
    totalCardsClicked++;
    if(totalCardsClicked > 2){
        return;
    }

    // virar a carta
    item.style.backgroundImage = `url("cards/${shuffledCards[index].image}")`;

    // verifica se foi a primeira ou segunda carta virada na jogada
    if(!firstCard){
        firstCard = item;
    } else {
        secondCard = item;
        attempts++;
        displayAttempts.textContent = attempts;
        checkForMatch();
    }

}

function checkForMatch(){
    if(firstCard.style.backgroundImage === secondCard.style.backgroundImage){
        // são imagens iguais -> manter imagens viradas
        firstCard.removeEventListener('click', handleCardClick);
        secondCard.removeEventListener('click', handleCardClick);
        resetCards();
    } else {
        // são imagens diferentes -> virar as imagens
        setTimeout(() => {
            firstCard.style.backgroundImage = 'url("cards/back.jpg")';
            secondCard.style.backgroundImage = 'url("cards/back.jpg")';
            resetCards();
        }, 1500);
    }
}

function resetCards(){
    firstCard = null;
    secondCard = null;
    totalCardsClicked = 0;
}