/*
Com o navigator podemos ter acesso ao clipboard do sistema operacional.
O clipboard é a área de transferência do sistema operacional, onde podemos copiar e colar informações.
Vamos ver como funciona.
*/

const textField = document.querySelector("#text");
const copyButton = document.querySelector("#btnCopy");

copyButton.addEventListener("click", () => {
	// navigator.clipboard.writeText(textField.value);
	// o método navigator.clipboard.writeText() retorna uma Promise, que podemos usar para saber se a operação foi bem sucedida
	navigator.clipboard.writeText(textField.value).
	then(() => {
		alert("Texto copiado para a área de transferência");
	})
	.catch((error) => {
		alert("Erro ao copiar o texto: " + error);
	});
});

// o método navigator.clipboard.readText() permite ler o texto da área de transferência
const pasteButton = document.querySelector("#btnPaste");
const paste = document.querySelector("#paste");
pasteButton.addEventListener("click", () => {
	// paste.textContent = navigator.clipboard.readText();
	// o método navigator.clipboard.readText() retorna uma Promise, que podemos usar para saber se a operação foi bem sucedida
	navigator.clipboard.readText()
	.then((text) => {
		paste.textContent = text;
	})
	.catch((error) => {
		alert("Erro ao colar o texto: " + error);
	});
});