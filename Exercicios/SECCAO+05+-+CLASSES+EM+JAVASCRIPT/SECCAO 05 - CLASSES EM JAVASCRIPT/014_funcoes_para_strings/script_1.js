// Aqui estão exemplos de algumas funções integradas para strings em JavaScript.

const myString = "This is JavaScript!";

// length
console.log(myString.length); // exibe 19

// indexOf
console.log(myString.indexOf('is')); // exibe 2

// lastIndexOf
console.log(myString.lastIndexOf('is')); // exibe 5

// search
console.log(myString.search('is')); // exibe 2

// slice
console.log(myString.slice(2, 4)); // exibe 'is'

// substring
console.log(myString.substring(8, 12)); // exibe 'Java'

// substr
console.log(myString.substr(8, 4)); // exibe 'Java'

// replace
console.log(myString.replace('JavaScript', 'HTML')); // exibe 'This is HTML!'

// toUpperCase
console.log(myString.toUpperCase()); // exibe 'THIS IS JAVASCRIPT!'

// toLowerCase
console.log(myString.toLowerCase()); // exibe 'this is javascript!'

// concat
console.log(myString.concat(' And Python!')); // exibe 'This is JavaScript! And Python!'

// trim
const myString2 = '   This is JavaScript!   ';
console.log(myString2.trim()); // exibe 'This is JavaScript!'

// split
console.log(myString.split(' ')); // exibe ['This', 'is', 'JavaScript!']

// e existem muitas outras funções integradas para strings em JavaScript.