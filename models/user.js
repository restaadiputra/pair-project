const hashpassword = require('../helpers/bcrypt').hashPassword

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op
  const User = sequelize.define('User', {
    role: DataTypes.STRING,
    name: DataTypes.STRING,
    username: {
      type:DataTypes.STRING,
      validate : {
        isUnique: function(value, next) {
          User.find({
            where:{username: value , id :{[Op.ne] : this.id}}
          })
         .then(data=> {
           if(data)  next(`Username already taken`)
           else next()
         })
         .catch(err => {
           next(err)
         })
        }
      }
    },
    password: DataTypes.STRING,
    email: {
      type:DataTypes.STRING, 
      validate : {
        isEmail: {
          args: true, 
          msg:"email format is incorrect"
        },isUnique: function(value, next) {
          User.find({
            where:{email: value , id :{[Op.ne] : this.id}}
          })
         .then(data=> {
           if(data)  next(`Email already used`)
           else next()
         })
         .catch(err => {
           next(err)
         })
        }
      }
    } 
  }, {
    hooks: {
      beforeCreate : (user) => {
        user.password = hashpassword(user.password)

      }
    }
  });
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