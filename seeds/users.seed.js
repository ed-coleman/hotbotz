// Iteration #1
const mongoose = require("mongoose");
//mongoose.set('strictQuery', false)
const User = require('../models/User.model')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sauceCode";


const usersArr = [{
  "_id": "63e63f130c6136cbc2ff5e88",
  "username": "krystinawitt@gmail.com",
  "passwordHash": "$2a$10$JHx8BHbyo6PilzbiHDXSFuvNO.mhaOrz7IFzKJgm.Lh6yCowmJV5a",
  "createdAt": "2023-02-10T12:56:51.056+00:00",
  "updatedAt": "2023-02-10T12:56:51.056+00:00",
  "avatar":"https://ibb.co/nLPbt4n", 
  "bio":"Hi, I'm Ed! I cut hair and I love hot sauces!"
}, 
{
  "_id": "63e646c12be5d8dd17742fc3",
  "username": "ed",
  "passwordHash": "$2a$10$X430fDBqpoX9RUwCM4hwQ.aeQojrUt5WQeiU8Vh3X.61qcLct.iA2",
  "createdAt": "2023-02-10T13:29:37.904+00:00",
  "updatedAt": "2023-02-10T13:29:37.904+00:00",
  "avatar":"https://ibb.co/nLPbt4n", 
  "bio":undefined
}]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo!!!!!!!!!!!!!!!!!!!!! Database name: "${x.connections[0].name}"`);
    return User.create(usersArr)
  })
  .then(data => console.log('user list created', data))
  .then(() => mongoose.connection.close())
  .then(()=> console.log(`user data base is closed`))
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
