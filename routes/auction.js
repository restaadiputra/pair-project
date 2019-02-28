const auction = require('express').Router()
const controller = require('../controllers/auction_controller')

auction.get('/:id', controller.bidForm)
auction.post('/:id', controller.bid)


module.exports = auction