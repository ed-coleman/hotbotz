// Iteration #1
const mongoose = require("mongoose");
//mongoose.set('strictQuery', false)
const Sauce = require('../models/Sauce.model')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sauceCode";


const saucesArr = [{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2007-05-25T06:51:27.000+00:00",
    "description": "Explosive power in your mouth: This extract hot sauce should only be enjoyed with absolute caution and, according to the manufacturer, has a whopping 135,600 Scoville on the capsaicin scales.",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/3588544397428.jpg?v=1628208535&width=680",
    "ingredients": "Chiles (green serrano, applewood smoked  green serrano, orange habanero), apple cider, apricot (ascorbic acid added), apple cider vinegar, lemon juice, tomatillo, agave nectar, water, garlic, salt, toasted onion, cumin, culantro, black pepper, celery seed",
    "link": "https://heatonist.com/products/hot-ones-los-calientes",
    "manufacturer": "Hot Ones Hot Sauce",
    "name": "Los Calientes",
    "originCountry": "united states of america",
    "peppers": "Chiles (green serrano, applewood smoked  green serrano, orange habanero)",
    "scoville": "5000",
    "updatedAt": "2023-02-11T14:07:36.068Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2007-05-25T06:51:27.000+00:00",
    "description": "The #1 sauce on Hot Ones! When it came time to craft the perfect kick-off to Sean's spicy conversations, we knew we wanted a hot sauce that was as timeless as the chicken wing. After sampling many of the world's best peppers we decided to go with Chile de Arbol, prized for its complex, fresh flavors. The chiles and sauce are grown/made by our great friend Smokin' Ed Currie of Puckerbutt Pepper Co, who says it may be the tastiest hot sauce he's ever crafted. For lots of flavor and a healthy tang, try it on everything, and use liberally.",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/theclassic1.jpg?v=1628208766&width=680",
    "ingredients": "Organic chile de arbol peppers, organic apple cider vinegar, organic vinegar, water, organic garlic, kosher salt, organic turmeric",
    "link": "https://heatonist.com/products/hot-ones-the-classic",
    "manufacturer": "Hot Ones Hot Sauce",
    "name": "The Classic",
    "originCountry": "united states of america",
    "peppers": "Organic chile de arbol peppers",
    "scoville": "3000",
    "updatedAt": "2023-02-11T14:18:55.499Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2007-05-25T06:51:27.000+00:00",
    "description": "Back for Hot Ones Season 20, Hot Ones’ #1 hot sauce gets a fun new take! The Classic line builds on timeless flavors crafted from the finest ingredients, and The Classic Chili Maple upholds that tradition. Combining the natural sweetness of real maple syrup with tangy apple cider vinegar and vibrant Fresno chilis from Smokin’ Ed, The Classic Chili Maple is the perfect balance of sweet and heat, with just-right spice and a helping of garlicky umami. Try this mild hot sauce on autumnal favorites like crispy Brussels sprouts, roast chicken or sweet potatoes, but don’t underestimate it as a powerhouse for grilling, breakfast foods (hello chicken and waffles) and so much more!",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/Hot-Ones-Classic-Chili-Maple-Hot-Sauce-5-oz-1_f2b70523-2f27-476c-8db1-1b55f2e02340.jpg?v=1672947059&width=680",
    "ingredients": "Chili peppers, maple syrup, cider vinegar, vinegar, garlic, garlic powder, salt, black pepper, turmeric",
    "link": "https://heatonist.com/products/the-classic-chili-maple-edition-hot-ones",
    "manufacturer": "Hot Ones Hot Sauce",
    "name": "THE CLASSIC - CHILI MAPLE",
    "originCountry": "united states of america",
    "peppers": "Chili peppers",
    "scoville": "1000",
    "updatedAt": "2023-02-11T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2007-05-25T06:51:27.000+00:00",
    "description": "Born from a delicious accident! When a batch of The Classic was made with 10x more garlic than usual, a new classic was created. This limited edition, blue label sauce is made with organic Fresno chiles straight from Smokin’ Ed’s farm, giving the sauce a beautiful earthy, sweet flavor and mild heat. When balanced with the extra garlic, it makes for a must-have table sauce that adds depth and warmth to any dish. Excellent on eggs! Perfect for pizza! Wonderful on wings (of course). Add it to elote or spice up a shrimp scampi. The possibilities are as endless as the garlic flavor. Like a sriracha but with no sugar!",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/Theclassic-Fresno.jpg?v=1628208909&width=680",
    "ingredients": "Fresno chile pepper, water, apple cider vinegar, garlic puree (garlic and water), vinegar, kosher salt, organic dried garlic, organic turmeric, organic black pepper",
    "link": "https://heatonist.com/products/hot-ones-the-classic-fresno-edition",
    "manufacturer": "Hot Ones Hot Sauce",
    "name": "THE CLASSIC - GARLIC FRESNO EDITION",
    "originCountry": "united states of america",
    "peppers": "Fresno chile pepper",
    "scoville": "1000",
    "updatedAt": "2023-02-11T14:07:36.068Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2007-05-25T06:51:27.000+00:00",
    "description": "Enjoy this extra hot sauce with caution, because the Da Bomb Hot Sauces will hit you with full force. You only taste the fresh, fruity aroma for a short time before the spiciness explodes. The chipotle chilies give it a slightly smoky finish.\nThe sauce does not falsify the taste of the dishes and is therefore well suited for spicing up sauces, chili con carne, stews and curries.",
    "image": "https://www.chili-shop24.de/media/image/5b/3f/48/DaBomb_Beyond_Insanity_Chili_Sauce_1_600x600.jpg",
    "ingredients": "Habanero Chili (Habanero Chili, Salt), Chipotle Puree (Chipotle Chili, Water, Salt, Citric Acid), Water, Orange Juice Concentrate, Chili Extract, Tomato Paste, Preservatives: Potassium Sorbate and Sodium Benzoate",
    "link": "https://www.chili-shop24.de/chili-sossen-hot-sauce/schaerfe/extrem-scharf-9-10/9/dabomb-beyond-insanity-chili-sauce",
    "manufacturer": "Unknown",
    "name": "DaBomb Beyond Insanity",
    "originCountry": "united states of america",
    "peppers": "Habanero Chili",
    "scoville": "135600",
    "updatedAt": "2023-02-11T14:18:55.499Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2007-05-25T06:51:27.000+00:00",
    "description": "Help us welcome Montreal-based Piko Peppers to the Hot Ones sauce family! They’re bringing fresh flavor to the #3-spot with Piko Riko, an updated take on a classic Piri Piri sauce. Piko Riko has all the hallmark savory and sour notes of a Piri Piri hot sauce, but with a subtle hoppy twist from beer and just-right floral heat from habanero peppers. This hot sauce has lovely acidity and umami, making it a versatile cooking sauce. Try it on everything from pizza to shrimp, short rib ragu and more. A must-have for roast chicken!",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/Piko-Peppers-Piko-Rico-Hot-Sauce-5-oz-1_e3ee6f63-d3a7-4c8e-8e54-969bb1bb17ce.jpg?v=1663790640&width=680",
    "ingredients": "Bell peppers, onions, vinegar, lemon juice, garlic, cane sugar, canola oil, sea salt, habanero peppers, Cayenne peppers, spices, beer (water, millet, corn, Demerara sugar, hop, yeast)",
    "link": "https://heatonist.com/products/piko-riko-microsaucerie-piko-peppers",
    "manufacturer": "Microsauce rie piko peppers",
    "name": "Piko Riko",
    "originCountry": "united states of america",
    "peppers": "habanero peppers, Cayenne peppers",
    "scoville": "1000",
    "updatedAt": "2023-02-11T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2007-05-25T06:51:27.000+00:00",
    "description": "The invitingly green color of Smokin’ Ed’s latest hot sauce may send the wrong signal: this is no mild verde. From the diabolical mind of mad pepper scientist Smokin’ Ed Currie, this Pepper X and Apollo Pepper blend is not for the faint of heart. Taste-wise, it’s got everything you’d want in a verde: peppery and tart, high acid with a good hit of savory alliums. But you’ve been warned: using too much of this super-hot hot sauce could be enough to haunt even the toughest of chiliheads. That said, there’s no reason to shy away from making the attempt. We’d let the Pepper X and Apollo Pepper heat work its magic in a big batch of chili verde, white chicken chili or tortilla soup and expect delicious results!",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/EXTRAMEANGREEN_796ba102-a2aa-4793-81c1-0f9ce3923b46.jpg?v=1641842760&width=680",
    "ingredients": "Hot Green Pepper Mash (green chile peppers and vinegar), distilled vinegar, onions, garlic",
    "link": "https://heatonist.com/products/puckerbutt-pepper-company-extra-mean-green",
    "manufacturer": "Pukerbutt Pepper Co",
    "name": "Extra Mean Green Hot Sauce",
    "originCountry": "united states of america",
    "peppers": "green chile peppers",
    "scoville": "1000",
    "updatedAt": "2023-02-11T14:07:36.068Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-25T06:51:27.000+00:00",
    "description": "Chef Claire Georges, the mastermind behind Butterfly Bakery of Vermont, knows flavor. While she typically crafts sauces that are easier on the tongue, this take on a super-spicy taco sauce proves she can do it all. Carolina Reapers and ghost peppers make this sauce perfect for the #9 wing - aka one of the top overlooks on Mt. Scoville - in the Hot Ones Season 20 lineup. A simplistic recipe lets the peppers shine, featuring lime juice, cumin and coriander to enhance their natural tangy and earthy notes. Taco Tuesdays beware!",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/Butterfly-Bakery-Taco-Vibes-Only-Hot-Sauce-5-oz-1_ad8c4c5a-f9cf-4f82-8147-174050b137b9.jpg?v=1673986824&width=680",
    "ingredients": "Organic distilled white vinegar, red serrano, reaper peppers, lime juice, ghost peppers, garlic scapes, salt, reaper pepper powder, coriander, cumin",
    "link": "https://heatonist.com/products/taco-vibes-only-butterfly-bakery",
    "manufacturer": "Butterfly Bakery of Vermont",
    "name": "Taco Vibes Only",
    "originCountry": "united states of america",
    "peppers": "ghost peppers",
    "scoville": "1000",
    "updatedAt": "2023-01-11T14:18:55.499Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-25T06:51:27.000+00:00",
    "description": "Juicy pomegranate and cranberry mix with sweet red pepper and fresh carrot in this subtle sizzler from Hot Ones Jr. The spiciest Hot Ones Jr. sauce yet, it’s still supermild with kid- and mild spice lover-approved heat from the tiniest pinch of Smokin’ Ed Currie’s ghost pepper powder. Drizzle it on hummus and chips, BBQ chicken, sliders, salads - you name it. And yes, this sauce is tasty enough to convince kids and even produce-averse adults to eat their veggies! The color says it all - it’s our hottest, still mild Hot Ones Jr. sauce and has a sweet tart flavor with no added sugar. Adults will love it on Mediterranean wraps or rotisserie chicken, too. In this case, red means go! ",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/Hot-Ones-Jr-The-Red-Hot-Sauce-6-oz-1.jpg?v=1668533069&width=680",
    "ingredients": "Red pepper, pomegranate juice, cranberry juice, carrot, distilled vinegar, water, olive oil, annatto, beets, sea salt, Smokin' Ed's Ghost Pepper Powder",
    "link": "https://heatonist.com/products/hot-ones-jr-the-red-hot-ones-hot-sauce",
    "manufacturer": "Hot Ones Hot Sauce",
    "name": "Hot Ones Jr. The Red",
    "originCountry": "united states of america",
    "peppers": "Red pepper",
    "scoville": "1000",
    "updatedAt": "2022-01-11T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-25T06:51:27.000+00:00",
    "description": "When the team from Korn reached out to us about creating a hot sauce, we may have freaked out. You know members Jonathan Davis, James Shaffer, Brian Welch and Ray Luzier as rock legends, but did you know they also have excellent taste buds? We partnered with the band to create a hot sauce based on their Bakersfield, California roots. Here to Slay honors the abundance of produce grown in the Central Valley with the charred-sweet flavor of roasted corn and vibrant jalapeño and serrano peppers. Smoky chipotles in adobo and cumin add earthy notes that echo the vistas and canyons outside the city. Crafted by our friends at Heartbeat Hot Sauce, this sauce is a must-have for tacos, grilled shrimp, burgers, burritos and more.",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/Korn-Here-To-Slay-Hot-Sauce-6-Oz-1.jpg?v=1668533459&width=680",
    "ingredients": "Onion, corn, distilled vinegar, jalapeno, pineapple, serrano pepper, chipotles in adobo (chipotle peppers, water, tomato puree, vinegar, salt, sugar, garlic, canola oil), garlic, lime juice, canola oil, cilantro, sea salt, cumin",
    "link": "https://heatonist.com/products/korn-here-to-slay-hot-sauce",
    "manufacturer": "Korn",
    "name": "Here to Slay",
    "originCountry": "united states of america",
    "peppers": "serrano pepper",
    "scoville": "1000",
    "updatedAt": "2023-01-11T14:07:36.068Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-03-25T06:51:27.000+00:00",
    "description": "From the folks that brought you Season 6’s Heartbeat Habanero, Pineapple Habanero opens on the palate with sweet fruit before upping the ante with sharper, peppery notes. The sauce finishes with subtle hoppiness from the Sleeping Giant Brewing Company’s session IPA and lingering habanero heat. Try it with tacos al pastor, on a grilled chicken sandwich, or in an end-of-summer margarita.",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/pineapple.jpg?v=1628204289&width=680",
    "ingredients": "Pineapple, yellow peppers, onion, distilled vinegar, habaneros, sugar, lime juice, kosher salt, garlic, canola oil, ale (water, hops, malted barley, yeast)",
    "link": "https://heatonist.com/products/heartbeat-pineapple-habanero",
    "manufacturer": "HeartBeat Hot Sauce",
    "name": "Pineapple Habanero Hot Sauce",
    "originCountry": "united states of america",
    "peppers": "habaneros",
    "scoville": "1000",
    "updatedAt": "2025-02-11T14:18:55.499Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-03-25T03:51:27.000+00:00",
    "description": "Featured on Hot Ones Season 10! Blazing hot chilis meet savory Aka Miso to create the perfect umami bomb. Buckle up, it's a wild ride.",
    "image": "https://uploads-ssl.webflow.com/623a2b510ddc084808eb61a5/63522f9b52cdcb7b5f981a77_amgr-silo-mid-min.png",
    "ingredients": "Red Ghost Pepper Puree (Red Ghost Chili Peppers, Salt, Acetic Acid), Rice Vinegar, Carolina Reaper Pepper Puree (Carolina Reaper Peppers, Salt, Acetic Acid), Miso Paste (Organic Soybeans, Organic Rice Koji (Organic Rice, Koji Spores, [Aspergillus Oryzae]), Sea Salt, Water), Tamari Sauce (Water, Soybeans, Salt, Alcohol (To Preserve Freshness), Pure Sesame Oil, Japanese Seven Spice (Spices, Sesame Seeds, Orange Peel, Salt, Nori (Seaweed)",
    "link": "https://bravadospice.com/products/aka-miso-ghost-reaper-hot-sauce?variant=39772275769402",
    "manufacturer": "Bravado Spice Co.",
    "name": "Aka Miso Ghost Pepper",
    "originCountry": "united states of america",
    "peppers": "Red Ghost Pepper, Carolina Reaper",
    "scoville": "1000",
    "updatedAt": "2023-02-11T14:19:54.193Z"
  }]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo!!!!!!!!!!!!!!!!!!!!! Database name: "${x.connections[0].name}"`);
    return Sauce.create(saucesArr)
  })
  .then(data => console.log('list created', data))
  .then(() => mongoose.connection.close())
  .then(()=> console.log(`data base is closed`))
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
