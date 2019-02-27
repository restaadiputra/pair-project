'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    fuelType: DataTypes.STRING,
    yearProduction: DataTypes.INTEGER,
    origin: DataTypes.STRING
  }, {});
  Car.associate = function(models) {
    Car.belongsTo(models.User, {
      foreignKey: 'UserId',
      onDelete: 'SET NULL'
    })
  };
  return Car;
};