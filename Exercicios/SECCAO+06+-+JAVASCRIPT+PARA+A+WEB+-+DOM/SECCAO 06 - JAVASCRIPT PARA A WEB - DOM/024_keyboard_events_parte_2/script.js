/* 
Já vimos que o comportamento padrão do navegador é permitir que o tab "salte"
entre os elementos de um formulário.
Mas vamos imaginar que queremos que seja a tecla "Enter" a fazer o mesmo.
*/

const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach((input) => {
	input.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {

			event.preventDefault();

			const nextInput = event.target.nextElementSibling;
			if(nextInput){
				nextInput.focus();
			}

		}
	});
});
