'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define('Bid', {
    AuctionId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    bidPrice: {
      type: DataTypes.INTEGER,
      validate : {
        isUnique: function(value, next) {
          Bid.findOne({
            where:{
              AuctionId: this.AuctionId
            }
          })
         .then(data=> {
           if(!data) next()
           else if(data.bidPrice > value)  next(`You Must bid higher than current highest bidder!`)
           else next()
         })
         .catch(err => {
           next(err)
         })
        }
      }
    },
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