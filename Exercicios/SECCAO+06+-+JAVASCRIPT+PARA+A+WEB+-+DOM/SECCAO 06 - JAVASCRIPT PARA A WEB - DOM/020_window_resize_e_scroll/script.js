/* 
O objeto window também dispara outros eventos, como o evento resize, que é disparado quando 
a janela é redimensionada, e o evento scroll, que é disparado quando a página 
é rolada para cima ou para baixo.
*/

window.addEventListener('resize', function(){
  console.log("A janela foi redimensionada");
});

window.addEventListener('scroll', function(){
  console.log("A página foi rolada");
});