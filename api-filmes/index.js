const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/api/filmes', (requisicao, resposta) => {
    const filmes = [
        { nome: 'O segredo de seus olhos' },
        { nome: 'Relatos Selvagens' },
        { nome: 'Volver' },
        { nome: 'Velozes e Furiosos' },
        { nome: 'O amor custa caro' },
    ]
    
    resposta.send(JSON.stringify(filmes));
});

app.listen(3000, () => console.log('A API funcionando e aceitando requisições!'));

