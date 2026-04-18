/* 
No objeto window temos várias propriedades relacionadas com dimensões e posições.
Essas propriedades são úteis para saber o tamanho da janela, a posição da barra de rolagem, etc.
Os principais são:
- window.innerWidth: largura da janela em pixels
- window.innerHeight: altura da janela em pixels
- window.outerWidth: largura da janela em pixels, incluindo a barra de rolagem
- window.outerHeight: altura da janela em pixels, incluindo a barra de rolagem
- window.scrollX: posição da barra de rolagem em pixels
- window.scrollY: posição da barra de rolagem em pixels
- window.screenX: posição da janela em pixels
- window.screenY: posição da janela em pixels
- window.screen.width: largura da tela em pixels
- window.screen.height: altura da tela em pixels
- window.screen.availWidth: largura da tela disponível em pixels
- window.screen.availHeight: altura da tela disponível em pixels
- window.screen.orientation: orientação da tela (landscape ou portrait)
*/

// vamos adicionar um evento resize e vamos mostrar as propriedades da window

const info = document.querySelector('#info');
info.innerHTML = getDimentions();

window.addEventListener('resize', () => {
    info.innerHTML = getDimentions();
});

function getDimentions(){
    return `
        <p>innerWidth: ${window.innerWidth}px</p>
        <p>innerHeight: ${window.innerHeight}px</p>
        <p>outerWidth: ${window.outerWidth}px</p>
        <p>outerHeight: ${window.outerHeight}px</p>
        <p>scrollX: ${window.scrollX}px</p>
        <p>scrollY: ${window.scrollY}px</p>
        <p>screenX: ${window.screenX}px</p>
        <p>screenY: ${window.screenY}px</p>
        <p>screen.width: ${window.screen.width}px</p>
        <p>screen.height: ${window.screen.height}px</p>
        <p>screen.availWidth: ${window.screen.availWidth}px</p>
        <p>screen.availHeight: ${window.screen.availHeight}px</p>
        <p>screen.orientation.type: ${window.screen.orientation.type}</p>
    `;
}

/* 
Vamos observar que window.scrollX e window.scrollY são sempre 0, pois não temos barra de rolagem.
Em relação a window.screenX e window.screenY, eles representam a posição da janela em relação à tela.
No entanto, como estamos em uma janela maximizada, eles também são 0.
Para ver esses valores mudarem, podemos abrir a janela em modo de tela cheia ou em uma janela menor.
*/