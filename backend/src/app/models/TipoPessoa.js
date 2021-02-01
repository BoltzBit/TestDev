module.exports = (sequelize, DataTypes) => {
    const TipoPessoa = sequelize.define('TipoPessoa', {
        descricao: DataTypes.STRING(30)
    });

    TipoPessoa.associate = models => {
        TipoPessoa.belongsTo(models.Clientes, { foreignKey: 'tipopessoa_id', as: 'Clientes' });
    };

    return TipoPessoa;
}
