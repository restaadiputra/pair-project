'use strict';
module.exports = (sequelize, DataTypes) => {
  const Auction = sequelize.define('Auction', {
    CarId: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    finishTime: DataTypes.DATE,
    startPrice: DataTypes.INTEGER,
    status: DataTypes.ENUM('open', 'close')
  }, {
    hooks: {
      beforeSave : (auction, options) => {
        auction.startTime = new Date()
        auction.status = 'open'
      },
      afterSave : (auction, options) => {
        return sequelize.models.Car.update({
          status: 'auctioned'
        }, {
          where: {
            id: auction.CarId
          }
        })
        .then(() => {
          console.log('update sukses')
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  });
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