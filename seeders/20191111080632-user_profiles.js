let uuid = require('uuid/v1');
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_profiles', [{
      id:uuid(),
      user_id:`d2348310-046b-11ea-8713-e921d624a1`,
      username: 'John Doe',
      email: "Jonhn@gmail.com",
      phone_no:"9087746655",
      date_of_birth:new Date(),
      gender:"male",
      created_at:new Date(),
      updated_at:new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
