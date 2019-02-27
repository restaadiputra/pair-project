'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    role: DataTypes.STRING,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Car, {
      foreignKey: 'UserId',
      onDelete: 'SET NULL'
    })
    User.belongsToMany(models.Auction, {
      through: models.Bid,
      foreignKey: 'UserId'
    })
  };
  return User;
};