const user = require('express').Router()
const controller = require('../controllers/user_controller')

// routes for /user/
user.get('/', controller.dashboard)
user.get('/add-new', controller.addNewCarForm)
user.post('/add-new', controller.addNewCar)
user.get('/add-auction/:id', controller.addNewAuctionForm)
user.post('/add-auction/:id', controller.addNewAuction)
user.get('/show-auction/:id', controller.showAucton)
user.get('/bid', controller.showBid)

module.exports = user