/*
definir um conjunto de autorizacoes a partir de um perfil selecionado 
no fundo do formulário com links
*/

// buscar as checkboxes
let checkAutorizacoes = document.querySelectorAll('[id^="check_"]');

// buscar os perfis
let perfis = document.querySelectorAll('[id^="perfil_"]');

// mapa de autorizações
const autorizacoes = {
    all: [1,2,3,4,5,6],
    none: [],
    colaborator: [1,2,3],
    coordinator: [1,2,3,4,5],
    administrator: [1,2,3,4,5,6]
};

perfis.forEach(perfil => {
    perfil.addEventListener('click', (perfil) => {
        defineAutorizacoes(perfil);
    });
});

function defineAutorizacoes(perfil){
    let tipo = perfil.target.id.split("_")[1];
    checkAutorizacoes.forEach(checkbox => {
        if(autorizacoes[tipo].includes(parseInt(checkbox.id.split("_")[1]))){
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
}
