module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        tipopessoa: DataTypes.INTEGER,
        cpf_cnpj: DataTypes.STRING(14),
        nome: DataTypes.STRING(50),
        endereco: DataTypes.STRING(50),
        nro_logradouro: DataTypes.STRING(10),
        bairro: DataTypes.STRING(30),
        cidade: DataTypes.STRING(40),
        uf: DataTypes.STRING(2),
        cep: DataTypes.STRING(30)
    });

    return Cliente;
}
