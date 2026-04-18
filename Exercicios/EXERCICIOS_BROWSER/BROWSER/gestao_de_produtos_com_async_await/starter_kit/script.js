/* 
Gestão de Produtos com Fetch API, usando async/await
----------------------------------------------------------------
O objetivo deste projeto é criar uma pequena aplicação, sem persistência de dados entre execuções,
mas que simula um sistema de gestão de produtos básico com recurso a uma API RESTful.
A API está disponível executando o servidor node.

A aplicação tem um formulário para adicionar produtos, com respetivo nome, quantidade e preço.
Tem um botão para adicionar o produto, e outro para limpar o formulário.
Do lado direito, é apresentada uma lista de produtos adicionados, com o nome, quantidade, preço e total (preço * quantidade).
Além disso, tem um botão para remover cada produto individualmente, e um link geral para limpar a lista de produtos por completo.

NOTA: Não vamos implementar edição de produtos nem pesquisa. O foco é apenas na adição e remoção de produtos
para testar a Fetch API com o servidor NodeJS v1.

MUITO IMPORTANTE: As chamadas à API deverão ser feitas com recurso a async e await.
*/
