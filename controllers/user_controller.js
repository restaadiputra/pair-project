const { Auction, Bid, Car, User } = require('../models')
const { sessionChecker } = require('../helpers/sessionChecker')

class UserController {
  // login : method => get
  static loginForm(req, res, next) {
    res.render('pages/login/login', {
      page: {
        title: 'Login',
        status: false
      },
      err: null,
      register: null
    })
  }

  // login : method => post
  static loginCheck(req, res, next) {
    User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    })
    .then(user => {
      req.session.user = user.id;
      res.redirect('/dashboard');
    })
    .catch(err => {
      res.send(`error => ${err}`)
    })
  }

  // registration : method => get
  static registerForm(req, res, next) {
    res.render('pages/register/registration', {
      page: {
        title: 'Register New Account',
        status: false
      },
      err: null,
      register: null
    })
  }

  // registration : method => post
  static registerUser({ body }, res, next) {
    User.create({...body})
    .then(() => {
      res.render('pages/register/success', {
        page: {
          title: 'Home',
          status: false
        },
        err: null,
        register: 'Register Success.'
      })
    })
    .catch(err => {
      // res.render('pages/register/registration', {
      //   err: err.message,
      //   form: body
      // })

      res.send({
        page: {
          title: 'Register User'
        },
        err: err.message,
        form: body
      })
    })
  }

  static dashboard(req, res, next) {
    if(!sessionChecker(req)) {
      res.redirect('/')
    }
    User.findByPk(req.session.user)
    .then(user => {
      if(user === null) {
        res.redirect('/')
      } else {
        res.render('pages/dashboard/dashboard', {
          page: {
            title: 'Dasboard',
            status: true,
            name: user.name
          }
        })
      }
      // res.send(user)
    })
    .catch(err => {
      console.log('ERROR HERAE',err)
      next()
    })
  }

}

module.exports = UserController