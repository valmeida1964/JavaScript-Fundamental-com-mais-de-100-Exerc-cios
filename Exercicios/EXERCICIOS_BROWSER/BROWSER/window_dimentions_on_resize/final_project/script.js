/* 
mostrar as dimensões da janela do navegador ao redimensionar
*/

const pWidth = document.querySelector("#width");
const pHeight = document.querySelector("#height");

displayDimensions();

window.addEventListener("resize", displayDimensions);

function displayDimensions(){
    pWidth.innerHTML = window.innerWidth + "px";
    pHeight.innerHTML = window.innerHeight + "px";
}