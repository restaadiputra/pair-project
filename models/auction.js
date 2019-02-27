'use strict';
module.exports = (sequelize, DataTypes) => {
  const Auction = sequelize.define('Auction', {
    CarId: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    finishTime: DataTypes.DATE,
    startPrice: DataTypes.INTEGER,
    status: DataTypes.ENUM('open', 'close')
  }, {});
  Auction.associate = function(models) {
    Auction.belongsTo(models.Car, {
      foreignKey: 'CarId',
      onDelete: 'SET NULL'
    })
    Auction.belongsToMany(models.User, {
      through: models.Bid,
      foreignKey: 'AuctionId'
    })
  };
  return Auction;
};