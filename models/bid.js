'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define('Bid', {
    AuctionId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    bidPrice: DataTypes.INTEGER
  }, {});
  Bid.associate = function(models) {
    // associations can be defined here
  };
  return Bid;
};