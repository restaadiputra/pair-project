'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    fuelType: DataTypes.STRING,
    yearProduction: DataTypes.INTEGER,
    origin: DataTypes.STRING,
    status: DataTypes.ENUM('auctioned', 'sold'),
    filePath: DataTypes.STRING
  }, {});
  Car.associate = function(models) {
    Car.belongsTo(models.User, {
      foreignKey: 'UserId',
      onDelete: 'SET NULL'
    })

    Car.hasMany(models.Auction, {
      foreignKey: 'CarId',
      onDelete: 'SET NULL'
    })
  };
  return Car;
};