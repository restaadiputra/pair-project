'use strict';
const bcrypt = require('bcryptjs')
const Op = require('sequelize').Op
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
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email format is incorrect'
        },
        uniqueEmail(input) {
          return User.findOne({
            where: {
              email: input,
              id: {
                [Op.not]: this.id
              }
            }
          })
          .then(user => {
            if(user !== null) {
              if(user.email === input) {
                throw new Error('Email already used. Use different email')
              }
            }
          })
          .catch(err => {
            throw err
          })
        }
      }
    }
  }, {
    hooks: {
      beforeSave : (user, options) => {
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(user.password, salt)
        user.password = hash
        user.role = 'user'
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