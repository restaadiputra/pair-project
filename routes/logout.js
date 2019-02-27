const logout = require('express').Router()
const controller = require('../controllers/auth_controller')

logout.get('/', controller.logout)

module.exports = logout