const user = require('express').Router()
const controller = require('../controllers/user_controller')

// routes for /user/
user.get('/', controller.dashboard)



module.exports = user