// Hoisting é um conceito do JavaScript que permite que variáveis e funções 
// sejam usadas antes de serem declaradas. Isto acontece porque o JavaScript
// faz uma varredura no código antes de o executar, movendo as declarações de
// variáveis e funções para o topo do escopo. Isto significa que pode
// usar uma variável ou função antes de a declarar, e o JavaScript ainda funcionará
// corretamente. No entanto, isto pode levar a confusões e comportamentos inesperados,
// por isso é importante entender como o hoisting funciona e usá-lo com cuidado.

// exemplo de hoisting 1    
x = 5; // atribuir 5 a x
console.log(x); // exibir 5
var x; // declarar x

// no exemplo acima, x é usado antes de ser declarado, mas ainda funciona por causa do hoisting.

// exemplo de hoisting 2
var x; // declarar x
x = 5; // atribuir 5 a x
console.log(x); // exibir 5

// neste exemplo usamos a forma habitual de declarar variáveis.
// No entanto, o resultado é o mesmo que no exemplo anterior.