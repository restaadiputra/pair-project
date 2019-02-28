module.exports = {
  sessionChecker : (req) => {
    if (req.session.user) {
      return true
    } else {
      return false
    }    
  }
}