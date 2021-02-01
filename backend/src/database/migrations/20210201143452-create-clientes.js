'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clientes', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipopessoa:{
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cpf_cnpj:{
        allowNull: false,
        type: Sequelize.STRING(14)
      },
      nome:{
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      endereco:{
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      nro_logradouro:{
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      bairro:{
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      cidade:{
        allowNull: false,
        type: Sequelize.STRING(40)
      },
      uf:{
        allowNull: false,
        type: Sequelize.STRING(2)
      },
      cep:{
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Clientes');
  }
};
