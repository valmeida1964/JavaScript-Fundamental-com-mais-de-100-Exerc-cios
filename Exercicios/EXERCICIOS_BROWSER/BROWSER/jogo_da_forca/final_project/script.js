/* 
Jogo da Forca
-------------------------------------------
Este é o famoso jogo da forca, onde o jogador deve adivinhar uma palavra secreta letra por letra.
À medida que o jogador erra, partes de um boneco são desenhadas até que ele seja "enforcado" ou adivinhe a palavra.
*/

// imporar a lista de palavras
import { words } from "./words.js";

// variáveis globais
let numeroTentativas = 0;
let palavraSecreta = '';

let letrasErradas = [];
let letrasCertas = [];
let letrasGlobais = [];

// botão reiniciar
document.querySelector("#btn_reiniciar").addEventListener('click', iniciarJogo);

iniciarJogo();

function iniciarJogo(){
    
    // resetar as variáveis
    numeroTentativas = 0;
    palavraSecreta = '';
    letrasErradas = []
    letrasCertas = [];

    // sortear uma palavra secreta
    palavraSecreta = words[Math.floor(Math.random() * words.length)];

    // construir as letras globais
    construirLetrasGlobais();

    // exibir a palavra secreta
    exibirPalavraSecreta();

    // resetar a imagem da forca
    document.querySelector("#forca_image").src = "./assets/1.jpg";
}

function construirLetrasGlobais(){
    
    // limar os botões existentes
    document.querySelector("#letras_escolhidas").innerHTML = "";

    const letras = "abcdefghijklmnopqrstuvwxyz";
    letrasGlobais = [];
    letras.split('').forEach(letra => {
        const btn = document.createElement('button');
        btn.className = "bg-slate-200 text-slate-500 border-1 border-slate-400 rounded-lg m-1 p-2 font-mono font-bold text-xl cursor-pointer hover:bg-slate-300";
        btn.id = `btn_${letra}`;
        btn.textContent = letra.toUpperCase();
        btn.addEventListener('click', () => {
            verificarLetra(letra);
        });

        document.querySelector("#letras_escolhidas").appendChild(btn);
        letrasGlobais.push(btn);
    });
}

function exibirPalavraSecreta(){
    
    const puzzle = palavraSecreta.split('').map(letra => {
        if(letrasCertas.includes(letra)){
            return letra.toLocaleUpperCase();
        } else {
            return '_';
        }
    });
    document.querySelector("#palavra_secreta").textContent = puzzle.join(' ');
}

function verificarLetra(letra){
    
    // verificar se a letra já foi escolhida
    if(letrasGlobais.some(btn => btn.id === `btn_${letra}` && btn.disabled)){
        return;
    }

    // escolher a letra e desabilitar o botão
    const btnEscolhido = document.querySelector(`#btn_${letra}`);
    btnEscolhido.disabled = true;
    btnEscolhido.classList.add('bg-yellow-300');
    btnEscolhido.classList.remove('cursor-pointer');

    // verifica se a letra faz parte da palavra secreta
    if(palavraSecreta.includes(letra)){
        letrasCertas.push(letra);
        exibirPalavraSecreta();
    } else {
        letrasErradas.push(letra);
        numeroTentativas++;
        desenharBoneco();
    }

    // verificar se o jogo terminou
    verificarFimDoJogo();
}

function desenharBoneco(){
    document.querySelector("#forca_image").src = `./assets/${numeroTentativas + 1}.jpg`;
}

function verificarFimDoJogo(){
    
    if(numeroTentativas >= 8){
        alert(`Você perdeu! A palavra secreta era: ${palavraSecreta.toLocaleUpperCase()}`);
        desenharBoneco();
        document.querySelector("#letras_escolhidas").innerHTML = "";
    } else if (palavraSecreta.split('').every(letra => letrasCertas.includes(letra))) {
        alert(`Parabéns! Você adivinhou a palavra secreta: ${palavraSecreta.toLocaleUpperCase()}`);
        exibirPalavraSecreta();
        document.querySelector("#letras_escolhidas").innerHTML = "";
    }
}