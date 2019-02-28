const router = require('express').Router()
const { Auction, Bid, Car, User } = require('../models')
const { sessionChecker } = require('../helpers/sessionChecker')
const login = require('./login')
const register = require('./register')
const dashboard = require('./dashboard')
const logout = require('./logout')
const auction = require('./auction')




router.get('/', (req, res, next) => {
  Car.findAll({
    include: [{
      model: Auction,
      where: {
        status: 'open'
      }
    }]
  })
  .then(cars => {
    let data = {
      page: {
        title: 'Home',
      },
      err: null,
      register: null,
      cars: cars
    }
  
    if(sessionChecker(req)) {
      data.page.status = true
      data.page.name = req.session.name
    }
    // res.send(data)
    res.render('index', data)
    
  })
  .catch(err => {
    console.log(err)
  })



})
















router.use('/login', login)
router.use('/logout', logout)
router.use('/register', register)
router.use('/auction', auction)


// MIDLEWARE PREVENTING UNAUTHORIZED USER
router.use((req, res, next) => {
  if(!req.session.user) {
    res.redirect('/')
  } else {
    next()
  }
})

router.use('/dashboard', dashboard)

module.exports = router