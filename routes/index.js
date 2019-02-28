const router = require('express').Router()
const { sessionChecker } = require('../helpers/sessionChecker')
const login = require('./login')
const register = require('./register')
const dashboard = require('./dashboard')
const logout = require('./logout')

router.get('/', (req, res, next) => {
  // if(sessionChecker(req)) {
  //   res.redirect('/dashboard')
  //   console.log('pass here')
  // } else {
  //   res.render('index', {
  //     page: {
  //       title: 'Home'
  //     },
  //     err: null,
  //     register: null
  //   })
  // }
  let data = {
    page: {
      title: 'Home',
    },
    err: null,
    register: null
  }

  if(sessionChecker(req)) {
    data.page.status = true
    data.page.name = req.session.name
  }
  console.log(data)
  res.render('index', data)

})
router.use('/login', login)
router.use('/logout', logout)
router.use('/register', register)

router.use((req, res, next) => {
  if(!req.session.user) {
    res.redirect('/')
  } else {
    next()
  }
})

router.use('/dashboard', dashboard)

module.exports = router