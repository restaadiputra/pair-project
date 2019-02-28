const { Auction, Bid, Car, User } = require('../models')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: './public/upload',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage
}).single('myImage')

class UserController {  
  static dashboard(req, res, next) {
    User.findOne({
      where: {
        id: req.session.user
      },
      include: [{
        model: Car,
        include: [{
          model: Auction
        }]
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
        status: true,
        name: req.session.name
      },
      err: null,
      register: null
    })
  }

  static addNewCar(req, res) {
    console.log('====>',req.files)
    Car.create({
      name: req.body.name,
      brand: req.body.brand,
      fuelType: req.body.fuelType,
      yearProduction: req.body.yearProduction,
      origin: req.body.origin,
      UserId: req.session.user,
      filePath: req.file.filename
    })
    .then(() => { 
      upload(req, res, (err) => {
        if(err) {
          res.redirect('/dashboard')
        } else {
          res.redirect('/dashboard')
        }
      }) 
    })
    .catch(err => {
      console.log(err)
      res.redirect('/dashboard')
    })
  }

  static addNewAuctionForm({ params, session }, res) {
    Car.findByPk(params.id)
    .then(car => {
      res.render('pages/dashboard/addAuction', {
        page: {
          title: 'Add New Auction',
          status: true,
          name: session.name
        },
        register: car,
        err: null
      })
    })
    .catch(err => {
      res.send(err)
    })

  }

  static addNewAuction({ params, body }, res) {
    Auction.create({
      CarId : params.id,
      finishTime: body.finishTime,
      startPrice: body.startPrice
    })
    .then(() => {
      console.log('masuk')
      res.redirect('/dashboard')
    })
    .catch(err => {
      res.send(err)
    })
  }


  static showAucton(req, res) {
    Auction.findOne({
      where: {
        CarId: req.params.id
      },
      include: {
        model: User
      }
    })
    .then(data => {
      // res.send(data)
      res.render('pages/dashboard/detailAuction', {
        page: {
          title: 'Add New Auction',
          status: true,
          name: req.session.name
        },
        
        err: null,
        data
      })
    })
  }

  static showBid(req, res) {
    let userData = null
    User.findOne({
      where: {
        id: req.session.user
      }, include: [{
        model: Auction
      }]
    })
    .then(user => {
      userData = user
      return Bid.findAll({
        where: {
          UserId: req.session.user
        }
      })
    })
    .then(bids => {
      res.render('pages/dashboard/detailBid', {
        page: {
          title: 'Add New Auction',
          status: true,
          name: req.session.name
        },
        userData,
        err: null,
        bids
      })

      // res.send({
      //   page: {
      //     title: 'Add New Auction',
      //     status: true,
      //     name: req.session.name
      //   },
      //   userData,
      //   err: null,
      //   bids
      // })

    })
  }

}

module.exports = UserController