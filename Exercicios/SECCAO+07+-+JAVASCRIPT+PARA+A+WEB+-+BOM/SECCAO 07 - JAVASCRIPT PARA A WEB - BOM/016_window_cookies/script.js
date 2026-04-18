/* 
O Window.cookies é uma interface que permite armazenar dados no navegador do usuário de forma temporária.
Os cookies são enviados pelo servidor para o navegador e armazenados localmente.
Os cookies têm um tempo de expiração, após o qual são excluídos automaticamente.
Os cookies são específicos para cada domínio, ou seja, os dados armazenados em um domínio
não são acessíveis a partir de outro domínio.
Os cookies são limitados a cerca de 4KB por domínio, dependendo do navegador.
*/

// O js permite criar cookies com o método document.cookie

// vamos criar um cookie
// -----------------------------------
// let cookieName = 'meu_cookie';
// let cookieValue = 'Este cookie vai ser guardado no navegador';
// let cookieExpiration = new Date();
// cookieExpiration.setTime(cookieExpiration.getTime() + (1 * 24 * 60 * 60 * 1000)); // 1 dia
// document.cookie = `${cookieName}=${cookieValue}; expires=${cookieExpiration.toUTCString()}; path=/`;
// -----------------------------------

// agora podemos ver que o nosso cookie foi guardado no navegador
// vamos comentar a linha acima e parar o servidor.

// agora vamos iniciar novamente o servidor e ver o que acontece
// vamos ver que o nosso cookie foi guardado no navegador

// agora vamos buscar o cookie que guardamos no navegador
// -----------------------------------
let cookieName = 'meu_cookie';
let cookieValue = document.cookie.split('; ').find(row => row.startsWith(cookieName)).split('=')[1];
console.log(cookieValue); // Este cookie vai ser capturado a partir do navegador
// -----------------------------------
// se tentarmos buscar um cookie que não existe no navegador, o valor será undefined
let cookieName2 = 'meu_cookie_que_nao_existe';
let cookieValue2 = document.cookie.split('; ').find(row => row.startsWith(cookieName2));
console.log(cookieValue2); // undefined

// por conseguinte, podemos primeiro verificar se o cookie existe no navegador
// -----------------------------------
if(document.cookie.split('; ').find(row => row.startsWith(cookieName2)) !== undefined) {
    console.log('O cookie existe no navegador');
    console.log(document.cookie.split('; ').find(row => row.startsWith(cookieName2)).split('=')[1]);
} else {
    console.log('O cookie não existe no navegador');
}

// se quisermos remover um cookie do navegador, podemos usar o método document.cookie
// -----------------------------------
let cookieName3 = 'meu_cookie_que_nao_existe';
document.cookie = `${cookieName3}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
// a instrução acima remove o cookie do navegador, porque a data de expiração é anterior à data atual
// por conseguinte, o cookie é removido do navegador de forma automática

// ou se quisermos remover todos os cookies do navegador, podemos usar o método document.cookie
// -----------------------------------
document.cookie.split('; ').forEach(cookie => {
    document.cookie = cookie.split('=')[0] + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
});
// a instrução acima remove todos os cookies do navegador, porque a data de expiração é anterior à data atual

// IMPORTANTE: Normalmente os cookies são enviados pelo servidor para o navegador e armazenados localmente.
// No entanto, o js permite criar cookies com o método document.cookie
// Tradicionalmente não é recomendado usar o js para criar cookies.
// Ainda assim, ficamos a saber que o js permite criar cookies com o método document.cookie