// mouseover
document.querySelector("#div1").addEventListener('mouseenter', function(){
  this.style.backgroundColor = "yellow";
});

// mousemove
document.querySelector("#div2").addEventListener('mousemove', function(){
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  this.textContent = chars.charAt(Math.floor(Math.random() * chars.length));
});

// mouseover
document.querySelector("#div3").addEventListener('mouseover', function(){
  this.style.backgroundColor = "rgb(100,190,255)";
});

// mouseout
document.querySelector("#div4").addEventListener('mouseout', function(){
  this.style.backgroundColor = "green";
});

// contextmenu
document.querySelector("#div4").addEventListener('contextmenu', function(event){
  event.preventDefault();
  alert('Menu de contexto desativado!');
});

// wheel
document.querySelector("#div4").addEventListener('wheel', function(){
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  this.textContent = chars.charAt(Math.floor(Math.random() * chars.length));
});