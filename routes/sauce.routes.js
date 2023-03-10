const express = require('express');
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard');
const Review = require('../models/Review.model');
const Sauce = require('../models/Sauce.model');


router.get("/", isLoggedIn, async (req, res) => {
  res.redirect('/sauces/home')
});

/* GET HOME PAE */
router.get("/home", isLoggedIn, async (req, res) => {
    try {
        const topSauces = await Sauce.aggregate([ { $sample: { size: 14 } } ]).limit(14)
        const mostRecentSauce = await Sauce.find().sort( { "createdAt": -1 } ).limit(7)
        const hottestSauces = await Sauce.find().sort( { "scoville": -1 } ).limit(7)
        const topReviews = await Review.find({
          rating: {
            $in: [
              "⭐️⭐️⭐️⭐️⭐️"
            ]
          }
        }).limit(7).populate("sauce")
        
 
        res.render("sauces/home", {user:req.session.user, topSauces, mostRecentSauce, hottestSauces, topReviews})
    } catch (error) {
        console.log("Home page could not display")
    }
  });

router.get("/all", isLoggedIn, async (req, res) => {
  try {
      const allSauces = await Sauce.find()
      res.render("sauces/allsauces.ejs", {user:req.session.user, allSauces})
  } catch (error) {
      console.log("All sauces page could not display")
  }
});
  
  
  /* GET ADD SAUCE */
  router.get("/add", isLoggedIn, (req, res) => {
    res.render("sauces/add", {user:req.session.user})
  });

  router.post("/add", isLoggedIn, async (req, res) => {

    try {
      const addedSauce = req.body.name

      //validation blank name entered
      if(!addedSauce){
        res.render('sauces/add', {
          errorMessage: "Please enter a sauce",
          errorCode: undefined,
          user:req.session.user,
        })
      }

      const sauceMatch = await Sauce.find({name:addedSauce})
      //check to see if exists already
      if(sauceMatch.length == 0){
        //proceeds to add
        res.render('sauces/add-details', {
          addedSauce,
          user:req.session.user
        })
      }
      else{
        //if already exists, show result and error
        errorCode = 0
        //console.log("sauceMatch: ", sauceMatch, "errorCode: ", errorCode)
        res.render('sauces/add', {
          errorMessage: "The sauce you entered already exists in our database. Try another sauce!", 
          errorCode, 
          sauceMatch,
          user:req.session.user
        })
      }

    } catch (error) {
      console.log(error)
    }
  });
    


  /*ADD MORE DETAILS TO HOT SAUCE ENTRY*/
  router.get("/add-details", isLoggedIn, (req, res) => {
    res.redirect(`/sauces/add-details`)
});

router.post("/add-details", isLoggedIn, async (req, res) => {
  try {
  
    if(req.body.image == ""){
      req.body.image = undefined
    }

      req.body.addedBy = req.session.user._id
    
      const newSauce = req.body
      const addedSauce = await Sauce.create(newSauce)
      res.redirect(`/sauces/${addedSauce._id}`)
      
    } catch (error) {
    console.log("error on add-details page:", error)
    
    //validation blank name entered
    if(req.body.manufacturer == "" || req.body.ingredients == "" || req.body.peppers == "" || req.body.description == "" || req.body.image == ""){
      
      res.render('sauces/add-details', {
        errorMessage: error,
        errorCode: undefined,
        user:req.session.user,
        addedSauce:req.body.name
      })
    }
  }
});

    
    
    /* GET DEAILTED SAUCE PAGE SAUCE */
    router.get("/:id", isLoggedIn, async (req, res) => {
      try {
        //get specific sauce details
        const sauceId = req.params.id
        const selectedSauce = await Sauce.findById(sauceId).populate("addedBy")
        //get 5 random sauces
        const randomSauces = await Sauce.aggregate([ { $sample: { size: 5 } } ]).limit(5)
        const sauceReviews = await Review.find( { sauce: sauceId } ).populate("addedBy")
        res.render("sauces/details", {user:req.session.user, selectedSauce, randomSauces, sauceReviews})
      } catch (error) {
        console.log("Sauce details page failed to render", error)
      }
    });


      /*EDIT DETAILS TO HOT SAUCE ENTRY*/
      router.get("/:id/edit", isLoggedIn, async (req, res) => {
        const editedSauceId = req.params.id
        const editedSauceInfo = await Sauce.findById(editedSauceId)
        res.render("sauces/edit", {user:req.session.user, editedSauceInfo})
    });
    
  
    router.post("/:id/edit", isLoggedIn, async (req, res) => {
      const editedSauce = req.body
      const editedSauceId = req.params.id
      console.log(editedSauce)
      const selectedSauce = await Sauce.findById(editedSauceId)
      console.log("selectedSauce", selectedSauce)
      const updatedSauce = await Sauce.findByIdAndUpdate(editedSauceId, editedSauce, {new:true})
      console.log("updatedSauce", updatedSauce)

      res.redirect(`/sauces/${editedSauceId}`)
  });


  /*DELETE HOT SAUCE ENTRY*/
  router.get("/:id/delete", isLoggedIn, async (req, res) => {
    const editedSauceId = req.params.id
    const editedSauceInfo = await Sauce.findById(editedSauceId)
    res.render("sauces/delete", {user:req.session.user, editedSauceInfo})
});

router.post("/:id/delete", isLoggedIn, async (req, res) => {
  const deletedSauceId = req.params.id
  const deleteSauce = await Sauce.deleteOne({_id: deletedSauceId})
  res.redirect('/sauces/home')
});

//add review for sauce

router.get("/:id/addReview", isLoggedIn, async (req, res) => {
  try {
    //get sauce name and user name
    const sauceId = req.params.id
    const selectedSauce = await Sauce.findById(sauceId).populate("addedBy")
    res.render("reviews/addReview", {user:req.session.user, selectedSauce})
} catch (error) {
  console.log("error message")
}
})


router.post("/:id/addReview", isLoggedIn, async (req, res) => { 
  req.body.addedBy = req.session.user._id
  console.log(req.body.addedBy)
  const sauceId = req.params.id
  req.body.sauce = sauceId
  const reviewToAdd = req.body
  const newReview = await Review.create(reviewToAdd)
  //console.log(reviewToAdd)
  //console.log(newReview)
res.redirect(`/sauces/${sauceId}`)
})




  
    
module.exports = router;
