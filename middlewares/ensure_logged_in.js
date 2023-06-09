function ensureLoggedIn(req, res, next) {
    if (req.session.user_id) {
      return next()
    }
  
    res.redirect("/login")
  }
  
  module.exports = ensureLoggedIn