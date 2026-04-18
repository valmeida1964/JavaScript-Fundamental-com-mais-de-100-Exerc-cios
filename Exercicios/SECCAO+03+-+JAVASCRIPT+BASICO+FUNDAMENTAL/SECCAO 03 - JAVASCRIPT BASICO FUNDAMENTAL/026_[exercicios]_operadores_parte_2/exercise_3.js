/* 
    1. Anna, Carl e John são todos da mesma família. Eles têm o mesmo sobrenome: Smith.
    2. Coloque o sobrenome em uma variável chamada lastName.
    3. Crie um array com os nomes completos dos três.
    4. Use o console.table() para exibir o array.
*/

const LASTNAME = "Smith";
let family = [
    "Anna " + LASTNAME,
    "Carl " + LASTNAME,
    "John " + LASTNAME,
];

console.table(family);