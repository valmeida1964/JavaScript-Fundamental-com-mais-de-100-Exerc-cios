// Existe também o ciclo do...while, que é semelhante ao while, 
// mas a condição é verificada após a execução do bloco de código. 
// Isso significa que o bloco de código será executado pelo menos uma vez, 
// mesmo que a condição seja falsa desde o início.

let index = 10000;

do {
    console.log(index);
    index++;
} while (index < 10);

// uma vez mais, a variável contador é declarada fora do loop e incrementada dentro do loop
// neste caso, o loop será executado pelo menos uma vez, mesmo que a condição não seja satisfeita,
// porque a condição é verificada após a primeira iteração
// CUIDADO: se você esquecer de incrementar a variável contador, o loop será executado para sempre