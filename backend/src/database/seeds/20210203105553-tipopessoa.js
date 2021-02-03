'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('TipoPessoa', [
      {
        descricao: 'Física',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        descricao: 'Jurídica',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('TipoPessoa', null, {});
  }
};
