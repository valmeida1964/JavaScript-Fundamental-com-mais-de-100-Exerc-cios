/* 
O window.history é um objeto que contém informações sobre o histórico de navegação do utilizador.
Ele permite que possamos navegar entre as páginas visitadas pelo utilizador, como por exemplo
voltar para a página anterior ou avançar para a próxima página.
O window.history tem algumas propriedades e métodos que podemos usar para manipular o histórico de navegação.

1. Vamos abrir a página. Depois vamos abrir na mesma janela o google.com.
2. Depois vamos abrir a página do w3schools. https://www.w3schools.com/
3. Vamos copiando e colando a URL da nossa página e navegando em várias páginas.
Vamos ver que o window.history vai acumulando as páginas que visitamos (informação na consola).
*/

console.log(window.history);
// este comando dá-nos o objeto completo.

// window.history não permite obter o histórico completo, mas sim o número de páginas que estão no histórico.
console.log(window.history.length);
// O window.history.length devolve o número de páginas que estão no histórico.
// Não é possível obter o histórico completo por questões de segurança e privacidade.

// Uma das principais funções do window.history é navegar entre as páginas visitadas.
// window.history.back() - vai para a página anterior
// window.history.forward() - vai para a próxima página
// window.history.go(-1) - vai para a página anterior

const backButton = document.getElementById("btn1");
const forwardButton = document.getElementById("btn2");

backButton.addEventListener("click", () => {
  window.history.back();
});

forwardButton.addEventListener("click", () => {
  window.history.forward();
});

// window.history.back() é uma funcionalidade muito usada para voltar à página anterior,
// o que acontece muito frequentemente quando estamos a navegar entre páginas.
// imagina, por exemplo, um site onde clicas num botão que apresenta uma nova página, na qual
// temos um botão para voltar à página anterior e queremos que seja totalmente controlado por JS