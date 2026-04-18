/* 
Quando adicionamos um evento a um elemento, além de estarmos a definir um
comportamento para o elemento, implícitamente conseguimos ter acesso ao elemento
ao qual o evento foi adicionado. Ou seja, o elemento que disparou o evento é
acessível através da propriedade target do evento.
*/

const bnt1 = document.querySelector('#btn1');
const bnt2 = document.querySelector('#btn2');
const bnt3 = document.querySelector('#btn3');

bnt1.addEventListener('click', (event)=>{
    console.log(event);
});

// no caso acima, o event é um objeto que contém várias propriedades e métodos
// neste caso, o objeto é do tipo PointerEvent, que é um tipo de evento que representa
// um evento de ponteiro, como um clique do mouse ou um toque na tela.

// existem outros tipos de eventos, como KeyboardEvent, que representa um evento de teclado,
// e MouseEvent, que representa um evento de mouse.

// para cada um destes tipos de eventos, existem propriedades e métodos específicos que podemos usar.
// por exemplo, no caso do PointerEvent, podemos usar a propriedade target para obter os dados do elemento
bnt2.addEventListener('click', (event) => {
    console.log(event.target);
    console.log(event.target.innerHTML);
    console.log(event.target.id);
});

/* 
Tal como foi referido, existem outros tipos de eventos:
- KeyboardEvent: representa um evento de teclado, como uma tecla pressionada ou solta.
- MouseEvent: representa um evento de mouse, como um clique ou movimento do mouse.
- PointerEvent: representa um evento de ponteiro, como um toque na tela ou um clique do mouse.
- TouchEvent: representa um evento de toque, como um toque na tela ou um movimento do dedo.
- WheelEvent: representa um evento de roda do mouse, como um movimento de rolagem.
- FocusEvent: representa um evento de foco, como um elemento recebendo ou perdendo o foco.
- InputEvent: representa um evento de entrada, como um valor de input sendo alterado.
entre muitos outros.

Este tipo de informações fazem parte do que chamamos de API do DOM, que é extraordinariamente rica e extensa.
Seria virtualmente impossível cobrir todas as APIs do DOM, uma vez que existem muitas e cada uma tem a sua própria documentação.
Sempre que necessário, devemos consultar a documentação oficial para mais detalhes sobre cada uma das APIs do DOM.
*/