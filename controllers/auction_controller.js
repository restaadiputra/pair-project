const { Auction, Bid, Car, User } = require('../models')
const { sessionChecker } = require('../helpers/sessionChecker')
const Op = require('sequelize').Op

class AuctionController { 
  static bidForm(req, res) {
    let limit = true
    let startPrice = null
    let auctionId = null
    Auction.findByPk(req.params.id)
    .then(auction => {
      console.log(auction.finishTime)
      if(new Date() > auction.finishTime) {
        limit = false
      }
      startPrice = auction.startPrice
      auctionId = auction.id
      return Promise.all([
        Bid.findOne({
          where: {
            AuctionId: auction.id,
            status: 'win'
          }
        }),
        Car.findByPk(auction.CarId)
      ])
    })
    .then(([bid, car]) => {
      let data = {
        page: {
          title: 'Add New Auction',
        },
        err: null,
        car,
        bid,
        limit,
        startPrice,
        auctionId
      }
      if(sessionChecker(req)) {
        data.page.status = true
        data.page.name = req.session.name
      }
      // res.send(data)
      res.render('pages/auction/auction', data)
    })
  }

  static bid({ params, body, session }, res) {
    Auction.findByPk(params.id)
    .then(data => {
      if(data.finishTime < new Date()) {
        res.redirect(`/auction/${params.id}`)
      } else {
        return Bid.create({
          AuctionId: params.id,
          UserId: session.user,
          bidPrice: body.bidPrice,
          status: 'win'
        })
      }
    })
    .then(() => {
      return Bid.update({
        status: 'lose'
      },{
        where: {
          AuctionId : params.id,
          bidPrice: {
            [Op.lt]: body.bidPrice
          }
        }
      })
    })
    .then(() => {
      res.redirect('/')
    })
  }
}

module.exports = AuctionController