function viewHelpers(req, res, next) {
    res.locals.isLoggedIn = () => {
      if (req.session.user_id) {
        return true
      } else {
        return false
      }
    }
  
    next()
  }
  
  module.exports = viewHelpers