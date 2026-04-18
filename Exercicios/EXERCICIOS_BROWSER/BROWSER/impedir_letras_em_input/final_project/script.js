/* 
Impedir letras em input. Aceitar apenas algarismos.
------------------------------------------------------------
Temos um input de texto no HTMl e queremos que o utilizador só possa escrever algarismos.
Todos os outros caracteres devem ser ignorados.
No caso do inputField2, deve aceitar apenas o 1, 2 ou 3.
*/

const inputs = document.querySelectorAll('[id^="inputField"]');

inputs.forEach(input => {
    input.addEventListener('keypress', (event) => {
        
        // primeiro input
        if(event.target.id === "inputField1"){
            if(event.key < "0" || event.key > "9"){
                event.preventDefault();
            }
        }

        // segundo input
        if(event.target.id === "inputField2"){
            
            // apenas para mostrar como impedir dígitos específicos
            // if(event.key !== "1" && event.key !== "3" && event.key !== "5"){

            if(event.key < "1" || event.key > "3"){
                event.preventDefault();
            }
        }
    });
});