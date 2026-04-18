/* 
Jogo Tic Tac Toe
-----------------------------------------------
Criar o famoso jogo da velha (tic tac toe) em JavaScript.
*/

// definir cada um dos players
let player_1 = {
    name: "Player 1",
    score: 0,
    symbol: "player_1.png"
};

let player_2 = {
    name: "Player 2",
    score: 0,
    symbol: "player_2.png"
};

// jogador inicial
let currentPlayer = player_2;

// board do jogo
let board = [
    ['','',''],
    ['','',''],
    ['','',''],
];

// botão para reiniciar o jogo
let nextGameButton = document.querySelector("#next_game")
nextGameButton.addEventListener('click', initGame);

initGame();

// eventos de clique na board
document.querySelectorAll(".cell").forEach( cell => {

    cell.addEventListener('click', () => {

        // capturar célula clicada
        let row = cell.dataset.row;
        let col = cell.dataset.col;

        // se a célula está preenchida com imagem...
        if(board[row][col] != "") return;

        // adicionar símbolo na célula (visualmente)
        cell.style.backgroundImage = `url("${currentPlayer.symbol}")`;

        // atualização da board do jogo
        board[row][col] = currentPlayer.name;

        // verifica se alguém ganhou o jogo
        if(checkWinner(currentPlayer.name)){

            // apresentar o vencedor
            document.querySelector("#winner").textContent = `${currentPlayer.name} venceu!`;

            // atualizar o score do player
            currentPlayer.score++;

            // atualizar os scrores no browser
            displayScores();

            // desativar a board
            disableBoard();

            // mostrar o botão para o jogo seguinte
            nextGameButton.classList.remove("hidden");

            return;
        }

        // verifica se houve um empate
        if(checkDraw()){

            // informar que houve um empate
            document.querySelector("#winner").textContent = 'Empate!';

            // desativar a board
            disableBoard();

            // mostrar o botão para o jogo seguinte
            nextGameButton.classList.remove("hidden");

            return;
        }

        // próximo jogador
        currentPlayer == player_1 ? currentPlayer = player_2 : currentPlayer = player_1;
        highlightCurrentPlayer();
    });
});

function checkWinner(player){

    /* 
    board para referência
    [][][]
    [][][]
    [][][]
    */

    // verficar as rows
    for(let i = 0; i < 3; i++){
        if(board[i][0] == player && board[i][1] == player && board[i][2] == player){
            return true;
        }
    }

    // verificar nas cols
    for(let i = 0; i < 3; i++){
        if(board[0][i] == player && board[1][i] == player && board[2][i] == player){
            return true;
        }
    }

    // verificar nas diagonais
    if(board[0][0] == player && board[1][1] == player && board[2][2] == player){
        return true;
    }

    if(board[0][2] == player && board[1][1] == player && board[2][0] == player){
        return true;
    }

    return false;

}

function checkDraw(){
    for(let row of board){
        for(let cell of row){
            if(cell == "") return false;
        }
    }

    return true;
}

function initGame(){

    // resetar a board
    board = [
        ['','',''],
        ['','',''],
        ['','',''],
    ];

    // limpar a board do html
    document.querySelectorAll(".cell").forEach( cell => {
        cell.style.backgroundImage = "";
    });

    // limpar os dados do vencedor
    document.querySelector("#winner").textContent = "";

    // esconder o botão de reiniciar jogo
    nextGameButton.classList.add("hidden");

    // definir o jogador ativo
    currentPlayer == player_1 ? currentPlayer = player_2 : currentPlayer = player_1;

    // ativar a board
    enableBoard();

    // destacar o jogador ativo
    highlightCurrentPlayer();
}

function highlightCurrentPlayer(){
    if(currentPlayer == player_1){
        document.querySelector("#player_1").style.backgroundColor = "#44FF44"
        document.querySelector("#player_2").style.backgroundColor = "transparent";
    } else {
        document.querySelector("#player_1").style.backgroundColor = "transparent"
        document.querySelector("#player_2").style.backgroundColor = "#44FF44";
    }
}

function disableBoard(){
    document.querySelectorAll(".cell").forEach(cell => {
        cell.style.pointerEvents = "none";
    });
}

function enableBoard(){
    document.querySelectorAll(".cell").forEach(cell => {
        cell.style.pointerEvents = "auto";
    });
}

function displayScores(){
    document.querySelector("#score_player1").textContent = player_1.score;
    document.querySelector("#score_player2").textContent = player_2.score;
}