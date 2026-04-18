/* 
Para além de podermos alterar as classes de CSS, podemos também alterar os
estilos inline de um elemento HTML.
*/

let estilosInline = document.querySelector("#estilos_inline");
console.log(estilosInline.style); // coleção de CSSStyleDeclaration
console.log(estilosInline.style.cssText); // texto com os estilos inline

// adicionar estilo inline a um elemento
estilosInline.style.color = "white";
estilosInline.style.backgroundColor = "blue";

// estilosInline.style = "background-color: red; color: white; font-size: 20px;";
estilosInline.style.cssText = "background-color: red; color: white; font-size: 20px;";

// remover um estilo inline de um elemento
estilosInline.style.removeProperty('background-color');

// remover todos os estilos inline
estilosInline.style.cssText = "";
// ou
estilosInline.removeAttribute('style');