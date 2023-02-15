// Iteration #1
const mongoose = require("mongoose");
//mongoose.set('strictQuery', false)
const Review = require('../models/Review.model')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sauceCode";


const reviewsArr = []

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo!!!!!!!!!!!!!!!!!!!!! Database name: "${x.connections[0].name}"`);
    return Review.create(reviewsArr)
  })
  .then(data => console.log('reviews list created', data))
  .then(() => mongoose.connection.close())
  .then(()=> console.log(`data base is closed`))
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
