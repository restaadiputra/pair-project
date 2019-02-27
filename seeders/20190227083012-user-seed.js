'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
    [{
      "role": "F",
      "name": "Aliza Toye",
      "username": "atoye0",
      "password": "rbMYs2v",
      "email": "atoye0@alibaba.com",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "role": "F",
      "name": "Codi Antoni",
      "username": "cantoni1",
      "password": "TeK5H15HVF",
      "email": "cantoni1@xinhuanet.com",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "role": "F",
      "name": "Jackquelin Dace",
      "username": "jdace2",
      "password": "60WbCLuylO",
      "email": "jdace2@earthlink.net",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "role": "M",
      "name": "Richie Ainslie",
      "username": "rainslie3",
      "password": "tiKeAH6L8",
      "email": "rainslie3@fotki.com",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "role": "M",
      "name": "Fredek Andrzejak",
      "username": "fandrzejak4",
      "password": "WqM7uOYQoO",
      "email": "fandrzejak4@msn.com",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "role": "F",
      "name": "Corinna Garmey",
      "username": "cgarmey5",
      "password": "B1TFTmL2",
      "email": "cgarmey5@senate.gov",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "role": "M",
      "name": "Winston Stovin",
      "username": "wstovin6",
      "password": "auzYsggggW",
      "email": "wstovin6@blinklist.com",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "role": "M",
      "name": "Bertrando Haysham",
      "username": "bhaysham7",
      "password": "6Yu7WZ",
      "email": "bhaysham7@soup.io",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "role": "M",
      "name": "Trstram Acomb",
      "username": "tacomb8",
      "password": "yYjUITaHmH",
      "email": "tacomb8@mediafire.com",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "role": "F",
      "name": "Jackquelin Chichgar",
      "username": "jchichgar9",
      "password": "xQRCgbWvsM",
      "email": "jchichgar9@tiny.cc",
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
