module.exports = (sequelize, DataTypes) => {
    const TipoPessoa = sequelize.define('TipoPessoa', {
        descricao: DataTypes.STRING(30)
    });
    
    const tipoPessoa = ['Física', 'Jurídica'];

    tipoPessoa.forEach(item => {
        TipoPessoa.create({
            descricao: item
        });
    });

    return TipoPessoa;
}
