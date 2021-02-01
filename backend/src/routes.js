const express = require('express');

const ClienteController = require('./app/controllers/ClienteController');

const router = new express.Router();

router.get('/clientes', ClienteController.index);

router.get('/clientes/:id', );

router.post('/clientes', ClienteController.create);

router.put('/clientes/:id', (req, res) => {});

router.delete('/clientes/:id', (req,res) => {});

module.exports = router;

