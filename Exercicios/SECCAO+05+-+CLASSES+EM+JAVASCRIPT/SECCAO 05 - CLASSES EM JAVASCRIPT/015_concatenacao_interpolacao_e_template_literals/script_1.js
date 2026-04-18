// A concatenação é o processo de juntar duas ou mais strings para formar uma única string.
// A interpolação é o processo de inserir valores dentro de uma string
// usando placeholders ou variáveis. Isto é feito com o uso de template literals.
// Os template literals são strings que permitem a interpolação de
// expressões e variáveis dentro delas, usando a sintaxe `${}`.

// Concatenação
const string1 = 'Hello';
const string2 = "World";

console.log(string1 + ' ' + string2); // exibe 'Hello World'
// esta é a forma mais comum de concatenar strings

// também podemos usar o método concat()
console.log(string1.concat(' ', string2)); // exibe 'Hello World'


// Template Literals
// Os template literals são strings que permitem incorporar expressões.
// Os template literals são delimitados pelo acento grave (` `) em vez de aspas simples ou duplas.
// Os template literals podem conter placeholders, indicados pelo símbolo do dólar e chavetas ${expressão}.

// Exemplo 1
const string3 = "Hello";
const string4 = "World";

console.log(`${string3} ${string4}`); // exibe 'Hello World'

// Exemplo 2
const number1 = 10;
const number2 = 20;

console.log(`A soma de ${number1} e ${number2} é ${number1 + number2}.`); // exibe 'A soma de 10 e 20 é 30.'
