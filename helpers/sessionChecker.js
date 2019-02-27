module.exports = {
  sessionChecker : (req) => {
    console.log(req.session)
    if (req.session.user) {
      return true
    } else {
      return false
    }    
  }
}