const { Auction, Bid, Car, User } = require('../models')
const { sessionChecker } = require('../helpers/sessionChecker')
const bcrypt = require('bcryptjs')
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
  static loginCheck(req, res) {
    User.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(user => {
      if(!user) {
        throw new Error('Username not found')
      } else if(!bcrypt.compareSync(req.body.password, user.password)) {
        throw new Error('Password do not match')
      } else {
        req.session.user = user.id;
        req.session.name = user.name
        res.redirect('/');
      }
    })
    .catch(err => {
      res.render('pages/login/login', {
        page: {
          title: 'Login',
          status: false
        },
        err: err.message,
        register: null
      })
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
      res.render('pages/register/registration', {
        page: {
          title: 'Register New Account',
          status: false
        },
        err: err.message,
        register: null
      })

      // res.send({
      //   page: {
      //     title: 'Register User'
      //   },
      //   err: err.message,
      //   form: body
      // })
    })
  }

  static logout(req, res, next) {
    req.session.destroy(err => {
      res.redirect('/')
    })
  }

}

module.exports = UserController