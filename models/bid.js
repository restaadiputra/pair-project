'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define('Bid', {
    AuctionId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    bidPrice: DataTypes.INTEGER,
    status: DataTypes.ENUM('win', 'lose')
  }, {});
  Bid.associate = function(models) {
    // associations can be defined here
  };
  Bid.prototype.numberFormat = function() {
    return this.bidPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return Bid;
};