let uuid = require('uuid/v1');
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert({tableName:'users',schema:"auth"}, [{
      id:uuid(),
      username:"manikdan",
      email:"moneykandan@gmail.com",
      password:"manikandan995",
      auth_token:"jlksdjksj",
      phone_no:"90588787",
      created_at:new Date(),
      updated_at:new Date()
    }], {
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete({tableName:'users',schema:"auth"}, null, {});
  }
};
