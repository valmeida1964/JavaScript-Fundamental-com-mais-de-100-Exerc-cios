/* 
Galeria de imagens
------------------------------------------------------
Vamos criar uma galeria com imagens, as quais, depois de clicadas, são apresentadas em tamanho real
Todas as imagens disponibilizadas têm 400px por 400px
*/

const imgFull = document.querySelector("#imagem_grande");
const thumbs = document.querySelector("#colecao");
let totalImages = 8;

// construir as thumbnails das imagens existentes
for(let image = 1; image <= totalImages; image++) {

    // criar o elemento da thumb da imagem
    const img = document.createElement("img");
    img.src = `images/${image}.jpg`;
    img.id = `img_${image}`;
    img.classList.add("w-[100px]", "h-[100px]", "p-2", "border-1", "border-slate-400", "cursor-pointer");

    // adicionar os eventos às imagens thumbnail
    img.addEventListener('click', () => {
        imgFull.src = img.src;
    });

    img.addEventListener('mouseover', () => {
        img.classList.add("bg-yellow-400", "shadow-md");
    });

    img.addEventListener('mouseout', () => {
        img.classList.remove("bg-yellow-400", "shadow-md");
    });

    thumbs.appendChild(img);
}
