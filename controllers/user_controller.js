const { Auction, Bid, Car, User } = require('../models')
const { sessionChecker } = require('../helpers/sessionChecker')

class UserController {
  
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