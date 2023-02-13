const express = require('express');
const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard');
const router = express.Router();

/* GET home page */
router.get("/", isLoggedOut, (req, res, next) => {
  console.log(req.session)
  res.render("index", {user: req.session.user || undefined});
});

module.exports = router;
