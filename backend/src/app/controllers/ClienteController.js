const { getEnabledCategories } = require('trace_events');
const  { Clientes }   = require('../models');

module.exports = {
    async getAll(req, res){
        const clientes = await Clientes.findAll({});

        return res.json(clientes);
    },

    async getOne(req,res){
        const { id } = req.params;
        
        const cliente = await Clientes.findOne({ where: { id: id }});

        return res.json(cliente);
    },

    async create(req, res){
        const {
            tipopessoa,
            cpf_cnpj,
            nome,
            endereco,
            nro_logradouro,
            bairro,
            cidade,
            uf,
            cep
        } = req.body

        console.log(tipopessoa)
        const clientes = await Clientes.create({
            tipopessoa,
            cpf_cnpj,
            nome,
            endereco,
            nro_logradouro,
            bairro,
            cidade,
            uf,
            cep
        });

        return res.json(clientes);
    },

    async update(req,res){
        const { id } = req.params;
        const {
            tipopessoa,
            cpf_cnpj,
            nome,
            endereco,
            nro_logradouro,
            bairro,
            cidade,
            uf,
            cep
        } = req.body;

        await Clientes.update({
            tipopessoa,
            cpf_cnpj,
            nome,
            endereco,
            nro_logradouro,
            bairro,
            cidade,
            uf,
            cep
        },{
            where: { id: id }
        });

        return res.send();
    },

    async delete(req, res){
        const { id } = req.params;

        await Clientes.destroy({ where: { id: id }});

        return res.send();
    }
};

