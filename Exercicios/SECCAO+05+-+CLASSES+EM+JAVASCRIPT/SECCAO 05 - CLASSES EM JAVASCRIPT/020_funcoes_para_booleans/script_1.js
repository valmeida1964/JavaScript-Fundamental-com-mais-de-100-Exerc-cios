// Boolean() - converte um valor para um booleano
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true

// exemplo 1
let number = 123.456;
console.log(Boolean(number)); // true

// exemplo 2
let string = "hello";
console.log(Boolean(string)); // true

// exemplo 3
let emptyString = "";
console.log(Boolean(emptyString)); // false

// exemplo 4
let emptyString2 = String();
console.log(Boolean(emptyString2)); // false

// exemplo 5
let nullValue = null;
console.log(Boolean(nullValue)); // false

// exemplo 6
let undefinedValue = undefined;
console.log(Boolean(undefinedValue)); // false

// exemplo 7
let nanValue = NaN;
console.log(Boolean(nanValue)); // false

// exemplo 8
let infinityValue = Infinity;
console.log(Boolean(infinityValue)); // true