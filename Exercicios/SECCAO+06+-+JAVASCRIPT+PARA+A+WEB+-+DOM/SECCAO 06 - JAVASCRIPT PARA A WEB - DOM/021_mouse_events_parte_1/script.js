/* 
Os eventos do mouse são eventos que ocorrem quando o usuário interage com o mouse sobre um elemento da página.
E a interação pode ser efetuada com qualquer elemento da página, como um botão, uma imagem, um parágrafo, etc.
IMPORTANTE: Não são só os links e botões que podem ser clicados. Qualquer elemento pode ser clicado.
*/

console.clear();

// click
document.querySelector("#div1").addEventListener('click', function(){
  alert("Você clicou no DIV 1");
});

// dblclick
document.querySelector("#div2").addEventListener('dblclick', function(){
  alert("Você clicou duas vezes no DIV 2");
});

// mousedown
document.querySelector("#div3").addEventListener('mousedown', function(){
  alert("Você pressionou o botão esquerdo do mouse");
});

// mouseup
document.querySelector("#div4").addEventListener('mouseup', function(){
  alert("Você largou o botão esquerdo do mouse");
});