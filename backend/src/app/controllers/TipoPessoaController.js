const { TipoPessoa } = require('../models');

module.exports = {
    async index(req, res){
        const tipoPessoa = await TipoPessoa.findAll({});

        return res.json(tipoPessoa);
    }
};
