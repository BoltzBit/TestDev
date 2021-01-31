const express = require('express');

const app = express();

const { Cliente } = require('./app/models/index');


app.get('/user', async (req,res) => {
    const cliente = await Cliente.create({
        tipopessoa: 2,
        cpf_cnpj: '95',
        nome: 'sdoivb',
        endereco: 'sdoivb',
        nro_logradouro: 'sdlkhvb',
        bairro: 'lsdhjvb',
        cidade: 'sdcv',
        uf:'pp',
        cep: 'lsdhjvb'
    });

    return res.json(cliente);
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;

    return res.json({ message: `Buscando o usuário ${id}` });
});

app.post('/users', (req,res) => {
    return res.json({ message: `criando usuario`});
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;

    return res.json({ message: `Editando usuario: ${id}`})
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    return res.json({ message: `deletando usuario: ${id}` });
});

app.listen(3333, () => { console.log('Hello Mateus') });
