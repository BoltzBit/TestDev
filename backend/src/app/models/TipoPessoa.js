module.exports = (sequelize, DataTypes) => {
    const TipoPessoa = sequelize.define('TipoPessoa', {
        descricao: DataTypes.STRING(30)
    });

    return TipoPessoa;
}
