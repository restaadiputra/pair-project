const router = require('express').Router()
const { sessionChecker } = require('../helpers/sessionChecker')
const login = require('./login')
const register = require('./register')
const dashboard = require('./dashboard')
const logout = require('./logout')

router.get('/', (req, res, next) => {
  if(sessionChecker(req)) {
    res.redirect('/dashboard')
    console.log('pass here')
  } else {
    res.render('index', {
      page: {
        title: 'Home'
      },
      err: null,
      register: null
    })
  }
})
router.use('/login', login)
router.use('/logout', logout)
router.use('/register', register)
router.use('/dashboard', dashboard)
// router.use('/teachers', teachers)
// router.use('/subjects', subjects)
// router.use('/students', students)


module.exports = router