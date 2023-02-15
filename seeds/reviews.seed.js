// Iteration #1
const mongoose = require("mongoose");
//mongoose.set('strictQuery', false)
const Review = require('../models/Review.model')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sauceCode";


const reviewsArr = [{
  "addedBy": "63e63f130c6136cbc2ff5e88", "sauce": "63eb9567ddbe6bde86867ab7",
  "spiceLevel": "🌶️🌶️🌶️",
  "rating": "⭐️⭐️⭐️⭐️⭐️",
  "review": "Fucking amazing sauce!", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e63f130c6136cbc2ff5e88", "sauce": "63eb9567ddbe6bde86867ab8",
  "spiceLevel": "🌶️🌶️🌶️🌶️",
  "rating": "⭐️⭐️⭐️⭐️⭐️",
  "review": "One word: delicious. That’s it. It tastes so good. The perfect balance and depth of flavor, with a hint of sweet. It has just the right amount of heat that won’t overwhelm your meal. AND! It caused no gastrointestinal chaos. (See Last Dab review lol.)", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e63f130c6136cbc2ff5e88", "sauce": "63eb9567ddbe6bde86867ab0",
  "spiceLevel": "🌶️🌶️🌶️🌶️",
  "rating": "⭐️⭐️⭐️⭐️⭐️",
  "review": "One word: delicious. That’s it. It tastes so good. The perfect balance and depth of flavor, with a hint of sweet. It has just the right amount of heat that won’t overwhelm your meal. AND! It caused no gastrointestinal chaos. (See Last Dab review lol.)", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e63f130c6136cbc2ff5e88", "sauce": "63eb9567ddbe6bde86867aaf",
  "spiceLevel": "🌶️🌶️🌶️🌶️",
  "rating": "⭐️⭐️⭐️⭐️⭐️",
  "review": "This sauce is absolutely delicious as a condiment! We tried it and went through it in a few days. Immediately ordered the 3 pack and I fell in love with the Barbacoa as well. ", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e63f130c6136cbc2ff5e88", "sauce": "63eb9567ddbe6bde86867ab6",
  "spiceLevel": "🌶️🌶️",
  "rating": "⭐️⭐️⭐️⭐️⭐️",
  "review": "Introduced my GF to the hot ones lineup, and this was both of our favorites! We had a table setup and a full interview of little things we didn’t know about each other! Great date night idea. Things got spicy! Haha! I put this sauce on anything. Best hot sauce I’ve ever had honestly.", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e63f130c6136cbc2ff5e88", "sauce": "63eb9567ddbe6bde86867abc",
  "spiceLevel": "🌶️🌶️🌶️",
  "rating": "⭐️⭐️⭐️⭐️⭐️",
  "review": "This THEE BEST hot sauce ever! I put it on my wings, breakfast burritos, and pizza. I wish there were bigger bottles of this one cause I go through a lot.", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e63f130c6136cbc2ff5e88", "sauce": "63eb9567ddbe6bde86867abd",
  "spiceLevel": "🌶️🌶️🌶️🌶️",
  "rating": "⭐️⭐️⭐️⭐️⭐️",
  "review": "This sauce is amazing 🤩!!! Soo delicious , not too spicy with a subtle sweetness. Perfect literally on anything wings, tacos, u name it it’s really versatile. I recently did my own hot ones challenge and this was by far my favorite sauce as far as flavors is concerned I will definitely be buying again 🤤", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e63f130c6136cbc2ff5e88", "sauce": "63eb9567ddbe6bde86867abe",
  "spiceLevel": "🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "Wow, this sauce is very versatile. Pleasant heat and big flavor. Absolutely loving it in soups, cooking, and marinades this winter. Order two, they go pretty quickly!", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e63f130c6136cbc2ff5e88", "sauce": "63eb9567ddbe6bde86867ab5",
  "spiceLevel": "🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "My fav for all around goodness, especially tacos and eggs!", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867ac0",
  "spiceLevel": "🌶️🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "This is one of my favorite sauces, so good on morning eggs and hash browns", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867abf",
  "spiceLevel": "🌶️",
  "rating": "⭐️⭐️",
  "review": "Another favorite for sure. Love the kick from the Serrano and how the rest of the flavors meld so well with that heat. We keep running out!", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867aba",
  "spiceLevel": "🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "Hot Ones guests comment that this is the best as they get midway through the wings of death…and for good reason. It’s tasty with a good kick that’s not too too hot.", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867abb",
  "spiceLevel": "🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "I buy this hot sauce for my wife. She loves this flavor so much that we add a bottle to every order. It also goes well with every meal.", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867aaa",
  "spiceLevel": "🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "I could drink it straight from the bottle.", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867ab9",
  "spiceLevel": "🌶️🌶️🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "Especially with wings, I drown things in thos sauce and love every bite! The flavor has beautiful depth and the heat is mild enough that even heavily sauced it doesn't build on you until s several bites in.", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867ab1",
  "spiceLevel": "🌶️🌶️🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "Delicious Hot Sauce, it is our new favorite. The flavor and heat level is exactly our taste. The only thing we would like to see it a larger bottle!", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867ab2",
  "spiceLevel": "🌶️🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "This is one my absolute favorite hot sauces that I’ve ever had. Flavor is amazing, but may remind you of Mexican food.", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867ab4",
  "spiceLevel": "🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "I feel like they made this a little sweeter than the first time I tried it, but this is a sauce I can never keep in my fridge. As soon as I crack it open it’s gone. I could drink it straight from the bottle. Generally lasts about a week or less so I force myself to use other ones.", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
}, 
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867aab",
  "spiceLevel": "🌶️🌶️🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "One of my favorite hot sauces I’ve ever had!!!! The flavor on this one goes great with soooo many things! I love it on wings, sandwiches, baked chicken as a glaze, tacos, or literally anything!!!", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867aad",
  "spiceLevel": "🌶️",
  "rating": "⭐️⭐️",
  "review": "Very flavorful and goes with most things. Between 4 to 5 out of 10 of spiciness", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867aae",
  "spiceLevel": "🌶️🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "Seeing that this was in season 20 hours, so super excited. This is my favorite hot sauce so far of all of them.", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867ab3",
  "spiceLevel": "🌶️🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "The bottle opening is to big", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
},
{
  
  "addedBy": "63e646c12be5d8dd17742fc3", "sauce": "63eb9567ddbe6bde86867aac",
  "spiceLevel": "🌶️🌶️🌶️🌶️",
  "rating": "⭐️⭐️",
  "review": "Taste great", 
  "createdAt": "2023-02-15T11:34:41.083+00:00",
  "updatedAt": "2023-02-15T11:34:41.083+00:00",
}]

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
