/* 
Color pallete creator
-----------------------------------------
Criar um gerador de paletas de cores, onde o usuário pode escolher as cores e copiar
para a área de transferência.
*/

// buscar todas as cores
let colorCards = document.querySelectorAll('div[id^="color_"]');
let mainColor = document.querySelector("#main_color");

// buscar os ranges
let red = document.querySelector("#range_red");
let green = document.querySelector("#range_green");
let blue = document.querySelector("#range_blue");

// definir as cores base
let colors = [
    { red: 0, green: 0, blue: 0},
    { red: 0, green: 0, blue: 0},
    { red: 0, green: 0, blue: 0},
    { red: 0, green: 0, blue: 0},
    { red: 0, green: 0, blue: 0},
];

// cor selecionada
let colorCardIndex = 0;

setDefaultColorCards();

setSelectedColorCard(colorCardIndex);

function setDefaultColorCards(){
    colorCards.forEach((card, index) => {
        card.style.backgroundColor = `rgb(${colors[index].red},${colors[index].green},${colors[index].blue})`;
    });
}

function setSelectedColorCard(index){

    // remover todas as seleções visuais do HTML
    colorCards.forEach(card => {
        card.classList.remove('border-3', 'border-white');
    });

    // definir a cor selecionada (visualmente)
    colorCards[index].classList.add('border-3', 'border-white');

    // define a cor da mainColor
    mainColor.style.backgroundColor = `rgb(${colors[index].red},${colors[index].green},${colors[index].blue})`;

    // definir os valores dos input range
    red.value = colors[index].red;
    green.value = colors[index].green;
    blue.value = colors[index].blue;
}

red.addEventListener('input', () => {
    colors[colorCardIndex].red = red.value;
    updateMainColor();
    updateColorCard();
});
green.addEventListener('input', () => {
    colors[colorCardIndex].green = green.value;
    updateMainColor();
    updateColorCard();
});
blue.addEventListener('input', () => {
    colors[colorCardIndex].blue = blue.value;
    updateMainColor();
    updateColorCard();
});

function updateMainColor(){
    mainColor.style.backgroundColor = `rgb(${colors[colorCardIndex].red},${colors[colorCardIndex].green},${colors[colorCardIndex].blue})`;
}

function updateColorCard(){
    colorCards[colorCardIndex].style.backgroundColor = `rgb(${colors[colorCardIndex].red},${colors[colorCardIndex].green},${colors[colorCardIndex].blue})`;
}

// selecionar a card da cor
colorCards.forEach((card, index) => {

    card.addEventListener('click', () => {
        colorCardIndex = index;
        setSelectedColorCard(colorCardIndex);
    });

});

// exportar as cores para o clipboard
document.querySelector("#btn_export").addEventListener('click', () => {

    // preparar a string com os dados para a área de transferência
    let colorsString = '';
    colors.forEach((color, index) => {
        colorsString += `rgb(${color.red},${color.green},${color.blue})`;
        if(index < colors.length - 1){
            colorsString += "\n";
        }
    });

    // colocar no clipboard (área de transferência)
    navigator.clipboard.writeText(colorsString);

    // apresentar a mensagem de dados copiados para o clipboard
    document.querySelector("#export_message").classList.remove("hidden");
    setTimeout(() => {
        document.querySelector("#export_message").classList.add("hidden");
    }, 2000);
});