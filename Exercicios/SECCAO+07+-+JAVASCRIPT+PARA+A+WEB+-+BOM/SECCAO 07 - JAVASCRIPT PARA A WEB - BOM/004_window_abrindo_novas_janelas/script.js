/* 
Podemos abrir novas janelas com o método window.open().
Dessa forma, já vamos poder ver algumas dimensões da nova janela.
Podemos inclusive passar parâmetros para o método open, como o tamanho da nova janela.
O método open() recebe três parâmetros:
1. URL: a URL da página que queremos abrir na nova janela. Se não passarmos nada, ele abre uma nova janela em branco.
2. Nome: o nome da nova janela. Se não passarmos nada, ele abre uma nova janela sem nome.
3. Especificações: uma string com as especificações da nova janela, como largura, altura, etc.
Se não passarmos nada, ele abre uma nova janela com as especificações padrão.	
*/

document.querySelector('#open1').addEventListener('click', () => {
    // abre uma nova janela com as especificações padrão
    window.open();
});

document.querySelector('#open2').addEventListener('click', () => {
    // abre uma nova janela com a URL do site do Google
    window.open('https://www.google.com');
});

document.querySelector('#open3').addEventListener('click', () => {
    // abre uma nova janela com a URL do site do Google, com nome e especificações
    window.open('https://www.google.com', 'Google', 'width=800,height=600');
});

document.querySelector('#open4').addEventListener('click', () => {
    // abre uma nova janela com a URL do site do Google, com nome e especificações
    // mas com a localização da janela
    window.open('https://www.google.com', 'Google', 'width=800,height=600,top=200,left=200');
});

// IMPORTANTE: Existem outros parâmetros possíveis, mas nos navegadores mais modernos, como o Chrome, 
// muitos deles são ignorados por questões de segurança.