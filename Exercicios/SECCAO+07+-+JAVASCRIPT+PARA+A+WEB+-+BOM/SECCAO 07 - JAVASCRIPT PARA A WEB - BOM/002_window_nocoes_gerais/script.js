/* 
No BOM, o objeto window é o objeto global, ou seja, ele representa a janela do navegador.
Window contém o objeto document que representa o ponto de entrada para acessar o DOM.
Ainda assim, o objeto window é o objeto global, ou seja, ele representa a janela do navegador.
*/

// para acessar o objeto window, basta usar o nome window
console.log(window);

/* 
Como podemos ver na consola, o objeto window enúmeras propriedades e métodos.
Ele contém propriedades que representam os elementos da janela do navegador, como o tamanho da janela, a posição da barra de rolagem, etc.
Ele também contém métodos para manipular a janela, como abrir novas janelas, fechar janelas, etc.
Neste e nos próximos vídeos, vamos explorar as principais propriedades e métodos do objeto window.
*/

// por exemplo, para saber as dimensões da janela do navegador, podemos usar as propriedades innerWidth e innerHeight
console.log(`Largura em px: ${window.innerWidth}`); // largura da janela
console.log(`Altura em px: ${window.innerHeight}`); // altura da janela
// neste caso só vamos conseguir ver o resultado depois de redimensionar a janela e recarregar a página

// para obter estes dados em tempo real, podemos usar o evento resize
window.addEventListener('resize', () => {
    console.clear(); // limpa o console
    console.log(`Largura em px: ${window.innerWidth}`); // largura da janela
    console.log(`Altura em px: ${window.innerHeight}`); // altura da janela
});

// podemos também acessar o document através do objeto window
console.log(window.document); // objeto document
// temos assim na consola todo o conteúdo do documento HTML

// Quando escrevemos comandos para o console, na verdade estamos escrevendo comandos para o objeto window
window.console.log('Olá, Window!'); // Olá, Window!

// portanto, o importante neste momento é saber que o objeto window é o objeto global, 