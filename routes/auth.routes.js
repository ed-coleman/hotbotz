const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User.model');
const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard');
const router = express.Router();
//registered this router in app.js, /auth is in front of every route


/* GET sign up page */
router.get("/signup", isLoggedOut, (req, res) => {
  //console.log("SESSION ==========>", req.session)
  res.render("auth/signup", {user: undefined})
});




/* POST to receive info from the sign up form*/
router.post("/signup", isLoggedOut, async (req, res) => {
  //console.log("SESSION ==========>", req.session)
  const credentials =  {...req.body}

  const salt = bcrypt.genSaltSync(10)
  const passwordHash = bcrypt.hashSync(credentials.password, salt)

  delete credentials.password
  credentials.passwordHash = passwordHash


  try {
    await User.create(credentials)
    res.redirect('/auth/login')
  } catch (error) {
    console.log(error)
    //Username already used
    if (error.code === 11000) {
      res.render('auth/signup', {
        errorMessage: 'Username already exists!', 
        user: undefined
      })
    } else {

      res.render('auth/signup', {
        errorMessage: error, 
        user: undefined
      })
    }
  }
});




/* GET login page */
router.get("/login", isLoggedOut, (req, res) => {
  //console.log("SESSION ==========>", req.session)
  res.render("auth/login", {user: undefined})
});




/* POST to receive info from the login form*/
router.post("/login", isLoggedOut, async (req, res) => {
  try {
    //console.log("SESSION ==========>", req.session)
    const userMatch = await User.find({username: req.body.username})
    if(userMatch.length){
      //User exists
      const currentUser = userMatch[0]
      if(bcrypt.compareSync(req.body.password, currentUser.passwordHash)){
        //Password is correct
        req.session.user = currentUser
        res.redirect('/auth/profile')
      }
      else{
        //Password is incorrect
         res.render('auth/login', {
          errorMessage: "Incorrect password", 
          user: undefined, 
          userInfo: req.body.username
        })

      }
    }
    else{
      //No user found
      res.render('auth/login', {
        errorMessage: "User not found", 
        user: undefined
      })

    }
    //console.log(userMatch)
  } catch (error) {
    console.log(error)
  }

});




/* GET PROFILE PAEG */
router.get("/profile", isLoggedIn, (req, res) => {
  //console.log("SESSION ==========>", req.session)
  res.render("auth/profile", {user:req.session.user})
});




/* GET LOGOUT PAGE */
router.get("/logout", isLoggedIn, (req, res) => {
  req.session.destroy(err => {
    if (err) next(err)
    res.redirect('/')
  });
});

module.exports = router;



