// converter uma string com letras para número
let score = '100px';
console.log(Number(score)); // NaN - Not a Number

// ou converter uma string vazia para número
let score1 = '';
console.log(Number(score1)); // 0

// ou converter uma string com espaço para número
let score2 = ' ';
console.log(Number(score2)); // 0

// mas converter uma string com espaços e números para número
let score3 = ' 100 ';
console.log(Number(score3)); // 100

// converter uma string vazia para booleano
let isShow = '';
console.log(Boolean(isShow)); // false

// ou com um espaço
let isShow1 = ' ';
console.log(Boolean(isShow1)); // true

// nota final: as conversões de tipo podem ser um pouco imprevisíveis.
// É uma boa ideia evitá-las, a menos que você realmente precise delas.

/*
    Importante notar que há conversão de tipo explícita e implícita.
    Veremos mais sobre isso na próxima lição.
*/