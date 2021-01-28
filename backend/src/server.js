const express = require('express');

const app = express();

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
