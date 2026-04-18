const cities = ['New York', 'Rio de Janeiro', 'Tokyo', 'Los Angeles'];

// length
console.log(cities.length); // exibe 4

// indexOf
console.log(cities.indexOf('Tokyo')); // exibe 2

// adicionar elemento ao final do array
cities.push('London');
// ou
cities[cities.length] = 'London';

// remover elemento do final do array
cities.pop();

// adicionar elemento ao início do array
cities.unshift('London');

// remover elemento do início do array
cities.shift();

// remover elemento do meio do array
cities.splice(1, 1); // remove 1 elemento a partir do índice 1

// ordenar
cities.sort();

// inverter
cities.reverse();

// juntar
console.log(cities.join(' - ')); // exibe 'Tokyo - New York - Los Angeles - London'

