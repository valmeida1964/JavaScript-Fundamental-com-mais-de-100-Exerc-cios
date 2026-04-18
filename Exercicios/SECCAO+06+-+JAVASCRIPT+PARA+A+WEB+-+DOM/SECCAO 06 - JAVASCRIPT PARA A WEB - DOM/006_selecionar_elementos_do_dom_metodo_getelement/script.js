/* 
Vamos aprender a selecionar elementos do DOM utilizando o método mais conhecido:
getElementById
getElementByName
getElementsByTagName
getElementsByClassName
*/

// getElementById
let elementoPorId = document.getElementById('paragrafo');
console.log(elementoPorId);
elementoPorId.innerHTML = "ESTE FOI O ELEMENTO SELECIONADO";

// getElementByName
let elementosPorNome = document.getElementsByName('outro_paragrafo');
if(elementosPorNome.length > 0){
    console.log(elementosPorNome);
    elementosPorNome[0].innerHTML = "ESTE FOI O ELEMENTO SELECIONADO";
}

// getElementsByTagName
let elementosPorTag = document.getElementsByTagName('p');
if (elementosPorTag.length > 0) {
    console.log(elementosPorTag);
    elementosPorTag[0].innerHTML = 'ESTE FOI O ELEMENTO SELECIONADO';
    console.log(elementosPorTag[0]);
}

// getElementsByClassName
let elementosPorClasse = document.getElementsByClassName('text-blue-500');
if (elementosPorClasse.length > 0) {
    console.log(elementosPorClasse);
    for (let i = 0; i < elementosPorClasse.length; i++) {
        elementosPorClasse[i].innerHTML = 'ESTE FOI O ELEMENTO SELECIONADO';
    }
}