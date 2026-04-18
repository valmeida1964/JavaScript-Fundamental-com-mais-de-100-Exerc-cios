/*
O window.localStorage é uma interface que permite armazenar dados no 
navegador do usuário de forma persistente.

Os dados armazenados no localStorage permanecem mesmo após o fechamento 
do navegador ou a reinicialização do computador.

O localStorage é específico para cada domínio, ou seja, os dados armazenados
em um domínio não são acessíveis a partir de outro domínio.

O localStorage é uma forma de armazenamento de chave-valor, onde você pode armazenar dados como strings.
O localStorage é limitado a cerca de 5MB por domínio, dependendo do navegador.
O localStorage pode ser uma boa opção para armazenar dados que precisam ser persistentes, 
como preferências do usuário, configurações de aplicativo ou dados de sessão.
*/

// vamos primeiro consultar o localStorage da nossa página nas ferramentas de desenvolvedor
// Application > Local Storage > http://xxxx.
// Vamos ver que temos uma tabela com duas colunas: Key e Value. Neste momento está vazio.

// vamos guardar informação no localStorage

// -----------------------------------
// let chave = 'minha_chave';
// let valor = 'Esta informação vai ser guardada no localStorage';
// localStorage.setItem('minha_chave', valor);
// -----------------------------------

// agora podemos ver que a nossa chave e valor foram guardados no localStorage
// vamos comentar a linha acima e parar o servidor.
// agora vamos iniciar novamente o servidor e ver o que acontece
// vamos ver que a nossa chave e valor foram guardados no localStorage

// agora vamos buscar a informação que guardamos no localStorage
// -----------------------------------
let chave1 = 'minha_chave';
let valor1 = localStorage.getItem(chave1);
console.log(valor1); // Esta vai ser capturada a partir do localStorage
// -----------------------------------

// se tentarmos buscar uma chave que não existe no localStorage, o valor será null
let chave2 = 'minha_chave_que_nao_existe';
let valor2 = localStorage.getItem(chave2);
console.log(valor2); // null

// por conseguinte, podemos primeiro verificar se a chave existe no localStorage
// -----------------------------------
if(localStorage.getItem('minha_chave_que_nao_existe') !== null) {
    console.log('A chave existe no localStorage');
    console.log(localStorage.getItem('minha_chave_que_nao_existe'));
} else {
    console.log('A chave não existe no localStorage');
}

// se quisermos remover uma chave do localStorage, podemos usar o método removeItem
// -----------------------------------
localStorage.removeItem('minha_chave_que_nao_existe');
// ou se quisermos remover todas as chaves do localStorage, podemos usar o método clear
localStorage.clear();

// NOTA: a diferença entre localStorage e sessionStorage é que o localStorage persiste
// os dados mesmo após o fechamento do navegador, enquanto o sessionStorage
// persiste os dados apenas durante a sessão do navegador. Ou seja, os dados armazenados
// no sessionStorage são perdidos quando o navegador é fechado ou a aba é fechada.

// MUITO IMPORTANTE: Nunca deve armazenar informações sensíveis no localStorage ou sessionStorage,
// como senhas ou informações pessoais, pois esses dados podem ser acessados por scripts maliciosos
// ou por extensões do navegador. Para armazenar informações sensíveis, deve-se usar técnicas de criptografia
// e armazenar os dados em um servidor seguro, em vez de armazená-los no navegador do usuário.
// Além disso, o localStorage e o sessionStorage são vulneráveis a ataques de Cross-Site Scripting (XSS),
// onde um invasor pode injetar scripts maliciosos em uma página da web e acessar os dados armazenados