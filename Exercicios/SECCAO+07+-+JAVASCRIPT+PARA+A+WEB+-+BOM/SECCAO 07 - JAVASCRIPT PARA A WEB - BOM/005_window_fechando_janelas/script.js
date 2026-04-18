/* 
O window.close() fecha a janela atual.
O método window.close() 
*/

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

// exemplo 1 - fechar a janela atual
btn1.addEventListener("click", () => {
    window.close();
});

// exemplo 2 - abrir uma nova janela
let novaJanela = null;
btn2.addEventListener("click", () => {
    novaJanela = window.open("", "janela1", "width=400,height=400");
});

// exemplo 3 - fechar a nova janela
btn3.addEventListener("click", () => {
    console.log(novaJanela);
    novaJanela.close();
});

/* 
MUITO IMPORTANTE:
Se tentarmos abrir a nova janela com conteúdo externo, como por exemplo o Google, o botão para fechar
não funcionará, pois o navegador não permite que scripts de uma página fechem janelas abertas por outra página.
No caso do Google, o navegador não permite que o script da página atual feche a janela do Google.
Isso acontece por questões de segurança, para evitar que scripts maliciosos fechem janelas sem o consentimento do usuário.
Portanto, muita atenção na utilização do window.close(). É importante que saibas que existe esta funcionalidade,
mas não a vais utilizar com frequência.
*/

