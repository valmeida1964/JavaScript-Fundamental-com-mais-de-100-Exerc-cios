/* -------------------------------------------------------------------------------------------------------------
|	Servidor de NodeJS com Express, CORS e Autenticação Básica
|
|	Instalação:
|	1. Executar o comando: npm install
|		Será adicionado ao projeto a pasta node_modules e duas dependências:
|		- express: framework para criar servidores web
|		- cors: middleware para permitir requisições de outros domínios
|
|	2. Executar o comando: node server.js para iniciar o servidor
|
|	Acesso ao servidor (base URL) at http://localhost:4000
|
|	Este servidor permite criar, ler, atualizar e excluir dados de uma coleção de objetos.
|	O único parâmetro que é inserido automaticamente é o ID do objeto, que é gerado automaticamente.
|
|	Endpoints disponíveis:
|	- GET /status			- Verifica o status do servidor
|	- GET /all				- Lista todos os dados
|	- POST /add				- Adiciona novos dados
|	- GET /get/:id			- Obtém dados por ID
|	- PUT /edit/:id			- Edita dados por ID
|	- DELETE /delete/:id	- Exclui dados por ID
|	- DELETE /delete/all	- Exclui todos os dados
|
|	NOTA: este servidor implementa autenticação básica para proteger os endpoints.
|	Para cada requisição, é necessário enviar o cabeçalho Authorization com o valor Basic <base64(username:password)>.
 ------------------------------------------------------------------------------------------------------------- */

// preparar o servidor
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

// autenticação básica
const apiUsername = 'admin';
const apiPassword = 'abc123';

// server options
let options = {
	on: true,
};

// coleção de dados
let data = [];

// middleware para permitir CORS
app.use(cors({
	origin: 'http://127.0.0.1:5500'
}));

// autenticação básica
app.use((req, res, next) => {
	const auth = req.headers.authorization;
	if (auth && auth.startsWith('Basic ')) {
		const base64Credentials = auth.split(' ')[1];
		const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
		const [username, password] = credentials.split(':');

		if (username === apiUsername && password === apiPassword) {
			return next(); // autenticação bem-sucedida
		}
	}
	res.status(401).json({ code: 401, message: 'Não está autorizado' });
});

// starting the server
app.listen(PORT, () => {
	console.log(`Iniciando o servidor em http://localhost:${PORT}`);
	if (options.on) {
		console.log('O servidor está ativo');
	}	
});

// ------------------------------------------------------
// Rotas
// ------------------------------------------------------

// status
app.get('/status', (req, res) => {
	if (options.on) {
		res.json({ code: 200, message: 'Servidor está ativo' });
	} else {
		res.status(503).json({ code: 503, message: 'Servidor está inativo' });
	}
});

// devolve todos os dados da coleção
app.get('/all', (req, res) => {
	res.json({ code: 200, data: data, total: data.length });
});

// adicionar novo objeto à coleção
app.post('/add', express.json(), (req, res) => {
	const newData = req.body;
	if (newData && Object.keys(newData).length > 0) {
		
		// se o ID não for fornecido, gerar um automaticamente
		if (!newData.id) {
			// buscar o maior ID existente
			const maxId = data.reduce((max, item) => (item.id > max ? item.id : max), 0);
			newData.id = maxId + 1; // definir o novo ID
		}
		data.push(newData);
		res.json({ code: 200, message: 'Objeto adicionado com sucesso', data: newData });
	} else {
		res.status(400).json({ code: 400, message: 'Dados inválidos' });
	}
});

// obter dados por id
app.get('/get/:id', (req, res) => {
	const id = parseInt(req.params.id, 10);
	const item = data.find(d => d.id === id);
	if (item) {
		res.json({ code: 200, data: item });
	} else {
		res.status(404).json({ code: 404, message: 'Dados não encontrados' });
	}
});

// editar dados por id
app.put('/edit/:id', express.json(), (req, res) => {
	const id = parseInt(req.params.id, 10);
	const index = data.findIndex(d => d.id === id);
	if (index !== -1) {
		const updatedData = req.body;
		if (updatedData && Object.keys(updatedData).length > 0) {
			data[index] = { ...data[index], ...updatedData };
			res.json({ code: 200, message: 'Objeto atualizado com sucesso', data: data[index] });
		} else {
			res.status(400).json({ code: 400, message: 'Dados inválidos' });
		}
	} else {
		res.status(404).json({ code: 404, message: 'Dados não encontrados' });
	}
});

// apagar dados por id
app.delete('/delete/:id', (req, res) => {
	const id = parseInt(req.params.id, 10);
	const index = data.findIndex(d => d.id === id);
	if (index !== -1) {
		data.splice(index, 1);
		res.json({ code: 200, message: 'Dados removidos com sucesso' });
	} else {
		res.status(404).json({ code: 404, message: 'Dados não encontrados' });
	}
});

// apagar todos os dados
app.delete('/delete_all', (req, res) => {
	data = [];
	res.json({ code: 200, message: 'Todos os dados removidos com sucesso' });
});

// route not found
app.use((req, res) => {
	res.status(404).json({ code: 404, message: 'Endpoint não encontrado' });
});
