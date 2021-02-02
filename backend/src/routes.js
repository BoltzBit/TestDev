const express = require('express');

const ClienteController = require('./app/controllers/ClienteController');
const TipoPessoaController = require('./app/controllers/TipoPessoaController');

const router = new express.Router();

router.get('/pessoa', TipoPessoaController.index);

router.get('/clientes', ClienteController.getAll);

router.get('/clientes/:id', ClienteController.getOne);

router.post('/clientes', ClienteController.create);

router.put('/clientes/:id', ClienteController.update);

router.delete('/clientes/:id', ClienteController.delete);


module.exports = router;

