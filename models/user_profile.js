'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_profile = sequelize.define('user_profile', {
    id: {
      allowNull: true,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    },
    phone_no: {
      type: DataTypes.STRING,
      allowNull:false
    },
    date_of_birth: {
      type:DataTypes.DATEONLY,
      allowNull:false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull:false
    },
    image: DataTypes.BLOB
  }, {
    underscored: true,
  });
  user_profile.associate = function(models) {
    user_profile.blongsTo(models.user,{
      foreignKey:"user_id",
      onDelete:"CASCADE"
    });
  };
  return user_profile;
};