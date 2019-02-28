const login = require('express').Router()
const controller = require('../controllers/auth_controller')

login.get('/', controller.loginForm)
login.post('/', controller.loginCheck)


module.exports = login