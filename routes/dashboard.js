const user = require('express').Router()
const controller = require('../controllers/user_controller')

// routes for /user/
user.get('/', controller.dashboard)
user.get('/add-new', controller.addNewCarForm)
user.post('/add-new', controller.addNewCar)



module.exports = user