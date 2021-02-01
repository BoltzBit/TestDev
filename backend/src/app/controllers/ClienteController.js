const  { Clientes }   = require('../models');

module.exports = {
    async getAll(req, res){
        const clientes = await Clientes.findAll({});

        return res.json(clientes);
    },

    async create(req, res){
        const clientes = await Clientes.create({
            cpf_cnpj: '95',
            nome: 'sdoivb',
            endereco: 'sdoivb',
            nro_logradouro: 'sdlkhvb',
            bairro: 'lsdhjvb',
            cidade: 'sdcv',
            uf:'pp',
            cep: 'lsdhjvb'
        });

        return res.json(clientes);
    }
};

