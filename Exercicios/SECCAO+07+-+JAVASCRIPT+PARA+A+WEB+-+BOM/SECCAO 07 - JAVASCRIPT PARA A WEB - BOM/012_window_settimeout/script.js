/*
Associado ao window, temos o método setTimeout que permite executar uma função após um determinado tempo.
O método setTimeout recebe dois parâmetros: a função a ser executada e o tempo em milissegundos.
O método setTimeout retorna um ID que pode ser usado para cancelar a execução da função com o método clearTimeout.
*/

const btnExecutar = document.querySelector("#btn_executar");
const btnCancelar = document.querySelector("#btn_cancelar");
let timeoutId;

btnExecutar.addEventListener("click", () => {
	// Executa a função após 3 segundos
	timeoutId = setTimeout(() => {
		alert("Função executada após 3 segundos");
	}, 3000);
});

btnCancelar.addEventListener("click", () => {
	// Cancela a execução da função
	clearTimeout(timeoutId);
});

// qual a utilidade do setTimeout?
// O setTimeout pode ser útil para criar animações, exibir mensagens após um determinado tempo
// ou executar funções que precisam ser executadas após um determinado atraso.