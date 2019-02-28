const { Auction, Bid, Car, User } = require('../models')

class UserController {  
  static dashboard(req, res, next) {
    // User.findByPk(req.session.user)
    User.findOne({
      where: {
        id: req.session.user
      },
      include: [{
        model: Car
      }]
    })
    .then(user => {
      res.render('pages/dashboard/dashboard', {
        page: {
          title: 'Dasboard',
          status: true,
          name: user.name
        },
        user
      })
      // res.send({
      //   page: {
      //     title: 'Dasboard',
      //     status: true,
      //     name: user.name
      //   },
      //   user
      // })
    })
    .catch(err => {
      console.log('ERROR HERAE',err)
      next()
    })
  }

  static addNewCarForm(req, res) {
    res.render('pages/dashboard/addCar', {
      page: {
        title: 'Add New Car',
        status: true
      },
      err: null,
      register: null
    })
  }

  static addNewCar({ body, session }, res) {
    Car.create({
      name: body.name,
      brand: body.brand,
      fuelType: body.fuelType,
      yearProduction: body.yearProduction,
      origin: body.origin,
      UserId: session.user
    })
    .then(car => {
      console.log('masuk')
      res.redirect('/dashboard')
    })
    .catch(err => {
      res.redirect('/dashboard')
    })
  }

}

module.exports = UserController