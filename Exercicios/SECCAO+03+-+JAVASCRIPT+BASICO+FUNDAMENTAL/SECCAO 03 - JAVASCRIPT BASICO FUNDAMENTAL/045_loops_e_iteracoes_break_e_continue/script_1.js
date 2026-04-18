// Os loops e iterações têm algumas palavras-chave que podem
// ser usadas para controlar o fluxo do loop. As duas mais comuns são
// "break" e "continue".

for (let index = 0; index < 10; index++) {
    if (index === 5) {
        break;
    }
    console.log(index);
}

console.log("fim do loop");

// A palavra-chave "break" é usada para sair de um loop antes que ele
// termine naturalmente.