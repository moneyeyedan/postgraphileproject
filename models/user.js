'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      allowNull: true,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    username:  {
      type: DataTypes.STRING,
      allowNull:false
    },
    email:  {
      type: DataTypes.STRING,
      allowNull:false
    },
    password:  {
      type: DataTypes.STRING
    },
    auth_token: {
      type: DataTypes.STRING,
      allowNull:false
    },
    phone_no: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    schema:"auth",
    underscored: true,
  });
  user.associate = function(models) {
   user.hasMany(models.user_profile,{
     foreignKey:"user_id",
     onDelete:"CASCADE"
   })
  };
  return user;
};