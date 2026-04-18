const cities = ['New York', 'Rio de Janeiro', 'Tokyo', 'Los Angeles'];

// podemos iterar sobre um array usando um ciclo for
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

console.log('----------------');

// mas podemos usar o método map() em vez disso
cities.map(city => console.log(city));

// existem muitos outros métodos associados a arrays
// como filter(), reduce(), etc.
// veremos e usaremos esses métodos no futuro, conforme necessário, 
// nos nossos projetos