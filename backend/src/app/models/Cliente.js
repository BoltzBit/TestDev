module.exports = (sequelize, DataTypes) => {
    const Clientes = sequelize.define('Clientes', {
        cpf_cnpj: DataTypes.STRING(14),
        nome: DataTypes.STRING(50),
        endereco: DataTypes.STRING(50),
        nro_logradouro: DataTypes.STRING(10),
        bairro: DataTypes.STRING(30),
        cidade: DataTypes.STRING(40),
        uf: DataTypes.STRING(2),
        cep: DataTypes.STRING(30)
    },{});

    Clientes.associate = models => {
        Clientes.hasOne(models.TipoPessoa, { foreignKey: 'tipopessoa_id', as: 'TipoPessoa' })
    };

    return Clientes;
}
