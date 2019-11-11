'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_profiles', {
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
      email: {
        type: Sequelize.STRING,
        allowNull:false
      },
      phone_no: {
        type: Sequelize.STRING,
        allowNull:false
      },
      date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull:false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull:false
      },
      image: {
        type: Sequelize.BLOB
      },
      user_id:{
        type:Sequelize.UUID,
        allowNull:false,
        onDelete:"CASCADE",
        references:{
          model:{
            tableName:"users",
            schema:"auth"
          },
          key:"id"
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_profiles');
  }
};