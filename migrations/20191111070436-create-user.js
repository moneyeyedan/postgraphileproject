'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      username: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false
      },
      password: {
        type: Sequelize.STRING
      },
      auth_token: {
        type: Sequelize.STRING,
        allowNull:false
      },
      phone_no: {
        type: Sequelize.STRING,
        allowNull:false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{
      schema:"auth"
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};