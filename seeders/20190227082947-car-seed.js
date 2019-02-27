'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Cars', 
    [{
      "name": "GMC",
      "brand": "Sierra Hybrid",
      "fuelType": "jcb",
      "yearProduction": 2006,
      "origin": "Bulgaria",
      "UserId": 1,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Ford",
      "brand": "F-Series Super Duty",
      "fuelType": "jcb",
      "yearProduction": 2011,
      "origin": "Nigeria",
      "UserId": 2,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Dodge",
      "brand": "Stealth",
      "fuelType": "americanexpress",
      "yearProduction": 1992,
      "origin": "Thailand",
      "UserId": 3,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Toyota",
      "brand": "Solara",
      "fuelType": "jcb",
      "yearProduction": 2000,
      "origin": "Japan",
      "UserId": 5,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "GMC",
      "brand": "Yukon XL 1500",
      "fuelType": "mastercard",
      "yearProduction": 2006,
      "origin": "China",
      "UserId": 1,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Aston Martin",
      "brand": "Vantage",
      "fuelType": "bankcard",
      "yearProduction": 2010,
      "origin": "Pakistan",
      "UserId": 6,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Mercedes-Benz",
      "brand": "SLK-Class",
      "fuelType": "bankcard",
      "yearProduction": 2001,
      "origin": "Peru",
      "UserId": 6,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Mitsubishi",
      "brand": "Sigma",
      "fuelType": "bankcard",
      "yearProduction": 1989,
      "origin": "Sweden",
      "UserId": 9,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Volkswagen",
      "brand": "Passat",
      "fuelType": "jcb",
      "yearProduction": 2002,
      "origin": "Japan",
      "UserId": 8,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Lexus",
      "brand": "ES",
      "fuelType": "diners-club-enroute",
      "yearProduction": 1993,
      "origin": "Poland",
      "UserId": 7,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], 
    {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
