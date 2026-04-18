// doSomething - vai mostrar o código da função no console
// doSomething() ou doSomething(); - vai executar a função doSomething
// changeParagraph() - vai alterar o conteúdo do parágrafo com id 'paragrafo1'

console.log("Estamos a usar o console.log!");

function doSomething() {
    console.log('Executámos a função doSomething() a partir da consola!');
}

function changeParagraph() {
    const paragraph = document.getElementById('paragrafo1');
    paragraph.innerHTML = 'O parágrafo foi alterado a partir da consola!';
}