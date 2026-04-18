/*
O window.navigator é um objeto que contém informações sobre o navegador do usuário.
Podemos ter acesso a informações como o nome do navegador, versão, sistema operacional e muito mais.
E podemos chamar essas propriedades com o objeto window.navigator ou apenas navigator.
*/

console.log(window.navigator); // Mostra todas as propriedades do objeto navigator

// o conjunto de propriedades é vasto. Vamos destacaar algumas das propriedades mais comuns
console.log(window.navigator.userAgent); // Mostra o user agent do navegador
console.log(window.navigator.language); // Mostra o idioma do navegador
console.log(window.navigator.cookieEnabled); // Mostra se os cookies estão habilitados
console.log(window.navigator.onLine); // Mostra se o navegador está online
console.log(window.navigator.geolocation); // Mostra se a geolocalização está habilitada

// IMPORTANTE: nem todos os métodos e propriedades estão disponíveis em todos os navegadores

// podemos consultar todas as propriedades do objeto navigator
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator

// tal como foi referido, podemos ter acesso às informações, apenas usando o objeto navigator
console.log(navigator.userAgent); // Mostra o user agent do navegador
console.log(navigator.language); // Mostra o idioma do navegador
console.log(navigator.cookieEnabled); // Mostra se os cookies estão habilitados

// O navigator também possui métodos que podem ser usados para interagir com o navegador
// Por exemplo, podemos obter a geolocalização do usuário
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude: " + position.coords.latitude);
      console.log("Longitude: " + position.coords.longitude);
    },
    (error) => {
      console.error("Erro ao obter a geolocalização: ", error);
    }
  );
}

// neste caso teremos que dar permissão ao navegador para acessar a geolocalização

// temos ainda o método navigator.clipboard que permite acessar a área de transferência do sistema operacional
// vamos ver como funciona no próximo vídeo
