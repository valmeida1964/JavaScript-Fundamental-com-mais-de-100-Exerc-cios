/* 
O window.location é um objeto que contém informações sobre a URL da página atual.
Se olharmos para o console.log(window.location), vamos ver que ele tem várias propriedades, como por exemplo:
- href: a URL completa da página
- protocol: o protocolo da URL (http, https, ftp, etc)
- host: o host da URL (ex: www.exemplo.com)
- hostname: o nome do host da URL (ex: exemplo.com)
- port: a porta da URL (ex: 80, 443)
- pathname: o caminho da URL (ex: /pasta/arquivo.html)
entre outras propriedades.
*/

console.log(window.location);

/* 
Podes usar o window.location para obter informações sobre a URL da página atual,
acedendo às suas propriedades. Não há aqui grande ciência.

No entanto, o window.location também tem métodos que permitem redirecionar o utilizador para outra página.
*/


const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {

    // redireciona o utilizador para o Google
    // window.location.href = "https://www.google.com";
    
    // ou
    // window.location.assign("https://www.google.com"); // mais recomendado por ser mais explícito

    // ou ainda redirecionar para outra página usando o window.location.replace()
    window.location.replace("https://www.google.com");

});

// podemos ainda efetuar outras operações, como por exemplo o reload da página
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    // window.location.reload(); // recarrega a página atual
    window.location.reload(true); // recarrega a página atual ignorando o cache

});

// como não conseguimos perceber o efeito, vamos colocar na consola um valor aleatório
console.log(Math.random());

// Existem outras propriedades e funcionalidades com location, no entanto, estas são as mais comuns.
