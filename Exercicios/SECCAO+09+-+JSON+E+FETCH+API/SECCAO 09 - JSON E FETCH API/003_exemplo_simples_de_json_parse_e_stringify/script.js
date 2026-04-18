/* 
A maior parte das linguagens de programação modernas possuem suporte nativo para manipulação de JSON.
Manipular JSON significa duas coisas:
1. Converter um objeto JavaScript, no caso do JavaScript, ou um objeto de outra linguagem, em uma string JSON.
    Isso é chamado de serialização ou stringificação.
2. Converter uma string JSON em um objeto JavaScript, ou um objeto de outra linguagem, em um objeto JavaScript.
    Isso é chamado de desserialização ou parse.
*/

// vamos buscar o exemplo do JSON do site https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON
// vamos clicar no botão para copiar e vamos colar aqui: 
// NOTA: vamos colar o JSON em uma variável do tipo string e vamos usar crase para quebrar a string em várias linhas

const json = `{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;

// vamos transformar o JSON em um objeto JavaScript
const obj = JSON.parse(json);
console.log(obj);

// vamos analisar o objeto JavaScript no console das ferramentas de desenvolvedor do navegador
// este é o processo de desserialização ou parse que vai permitir ao JavaScript manipular a informação
// que vem em formato JSON para um objeto JavaScript

// o segundo processo é o da serialização ou stringificação
// significa que vamos transformar uma coleção de dados de JavaScript em uma string JSON

const colecao = {
    "empresa": "Minha Empresa",
    "telefone": "123456789",
    "email": "minhaempresa@gmail.com",
    "endereco": {
        "rua": "Rua 1",
        "numero": 123,
        "bairro": "Centro",
        "cidade": "São Paulo",
        "estado": "SP",
        "pais": "Brasil"
    },
    "colaboradores": [
        { nome: "Joao", idade: 20 },
        { nome: "Maria", idade: 30 },
        { nome: "Jose", idade: 40 },
        { nome: "Ana", idade: 50 },
        { nome: "Pedro", idade: 60 },
    ],
    "produtos": [
        { nome: "Produto 1", preco: 10 },
        { nome: "Produto 2", preco: 20 },
        { nome: "Produto 3", preco: 30 },
        { nome: "Produto 4", preco: 40 },
        { nome: "Produto 5", preco: 50 },
    ]
}

// vamos transformar o objeto JavaScript em uma string JSON
const jsonString = JSON.stringify(colecao);
console.log(jsonString);

// a string que vimos ser apresentada no console está preparada para ser enviada para um servidor
// o destinatário do JSON pode ser um servidor ou outro sistema que entenda o formato JSON (qualquer outra linguagem de programação)
// com o JSON em formato string e com a informação estruturada, outra aplicação pode receber a informação e efetuar a desserialização
// permitindo que a informação seja manipulada pelos sistemas.

// É assim que a esmagadora maioria das APIs funcionam. 
// 1 - é efetuado um pedido de dados
// 2 - o servidor responde com um JSON (estrutura de dados)
// 3 - o cliente (navegador ou outro sistema) efetua a desserialização do JSON
// 4 - o cliente manipula a informação
