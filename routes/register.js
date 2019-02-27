const register = require('express').Router()
const controller = require('../controllers/auth_controller')

register.get('/', controller.registerForm)
register.post('/', controller.registerUser)

module.exports = register