/*
O objeto window.screen contém informações sobre a tela do dispositivo do usuário.
Já falamos sobre o objeto window anteriormente mostrando algumas das propriedades do screen.
Vamos apenas relembrar algumas que estão disponíveis, e que podem contribuir para
obter informaçõers sobre as dimensões da tela e, com isso, melhorar a organização do layout da página.
*/

console.log(screen); // Mostra todas as propriedades do objeto screen

// se queremos saber as dimensões da tela, podemos usar as propriedades width e height
console.log(screen.width); // Mostra a largura da tela
console.log(screen.height); // Mostra a altura da tela

// se queremos saber as dimensões da tela, podemos usar as propriedades availWidth e availHeight
console.log(screen.availWidth); // Mostra a largura da tela disponível
console.log(screen.availHeight); // Mostra a altura da tela disponível

// NOTA: a diferença entre width e availWidth é que a primeira mostra a largura total da tela, 
// enquanto a segunda mostra a largura disponível para o navegador, ou seja, exclui a barra de tarefas e outras janelas abertas.

// se queremos saber a resolução da tela, podemos usar as propriedades pixelDepth e colorDepth
console.log(screen.pixelDepth); // Mostra a profundidade de pixel da tela em bits
console.log(screen.colorDepth); // Mostra a profundidade de cor da tela em bits

// se queremos saber a orientação da tela, podemos usar a propriedade orientation
console.log(screen.orientation); // Mostra a orientação da tela (landscape ou portrait)

// Mais uma vez, é necessário ter cuidado com a compatibilidade entre navegadores
// Algumas propriedades podem não estar disponíveis em todos os navegadores
// Para mais informações, consulte a documentação do MDN
// https://developer.mozilla.org/en-US/docs/Web/API/Screen




