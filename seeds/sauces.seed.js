// Iteration #1
const mongoose = require("mongoose");
//mongoose.set('strictQuery', false)
const Sauce = require('../models/Sauce.model')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sauceCode";


const saucesArr = [{
    "addedBy": "63e646c12be5d8dd17742fc3",
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
    "updatedAt": "2023-01-11T14:07:36.068Z"
  },{
    "addedBy": "63e646c12be5d8dd17742fc3",
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
    "updatedAt": "2023-01-11T14:18:55.499Z"
  },{
    "addedBy": "63e646c12be5d8dd17742fc3",
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
    "updatedAt": "2023-01-11T14:19:54.193Z"
  },{
    "addedBy": "63e646c12be5d8dd17742fc3",
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
    "updatedAt": "2023-01-11T14:07:36.068Z"
  },{
    "addedBy": "63e646c12be5d8dd17742fc3",
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
    "updatedAt": "2023-01-11T14:18:55.499Z"
  },{
    "addedBy": "63e646c12be5d8dd17742fc3",
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
    "updatedAt": "2023-01-11T14:19:54.193Z"
  },{
    "addedBy": "63e646c12be5d8dd17742fc3",
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
    "updatedAt": "2023-01-11T14:07:36.068Z"
  },{
    "addedBy": "63e646c12be5d8dd17742fc3",
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
    "addedBy": "63e646c12be5d8dd17742fc3",
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
    "createdAt": "2023-01-11T06:51:27.000+00:00",
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
    "createdAt": "2023-01-11T03:51:27.000+00:00",
    "description": "Featured on Hot Ones Season 10! Blazing hot chilis meet savory Aka Miso to create the perfect umami bomb. Buckle up, it's a wild ride.",
    "image": "https://uploads-ssl.webflow.com/623a2b510ddc084808eb61a5/63522f9b52cdcb7b5f981a77_amgr-silo-mid-min.png",
    "ingredients": "Red Ghost Pepper Puree (Red Ghost Chili Peppers, Salt, Acetic Acid), Rice Vinegar, Carolina Reaper Pepper Puree (Carolina Reaper Peppers, Salt, Acetic Acid), Miso Paste (Organic Soybeans, Organic Rice Koji (Organic Rice, Koji Spores, [Aspergillus Oryzae]), Sea Salt, Water), Tamari Sauce (Water, Soybeans, Salt, Alcohol (To Preserve Freshness), Pure Sesame Oil, Japanese Seven Spice (Spices, Sesame Seeds, Orange Peel, Salt, Nori (Seaweed)",
    "link": "https://bravadospice.com/products/aka-miso-ghost-reaper-hot-sauce?variant=39772275769402",
    "manufacturer": "Bravado Spice Co.",
    "name": "Aka Miso Ghost Pepper",
    "originCountry": "united states of america",
    "peppers": "Red Ghost Pepper, Carolina Reaper",
    "scoville": "1000",
    "updatedAt": "2023-01-11T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-11T03:51:27.000+00:00",
    "description": "Hellfire's Fear This does a neat trick: being a superhot that delivers big flavor right before the pain sets in. With 60% of the bottle being a straight Carolina Reaper mash, once that pain arrives it's all you'll be focused on. But once the reaper wave subsides you'll be left to savory onion and garlic paired with bright citrus notes from lemon and lime. This sauce leaves you wanting more, in a scary way.",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/8190404984930.jpg?v=1628204768&width=680",
    "ingredients": "Reaper peppers, distilled vinegar, garlic, red wine vinegar, apple cider vinegar, sun dried tomatoes, onions, salt, tomatillos and citric acid, cilantro, curry, chili powder, black pepper, paprika, cumin, lime juice, lemon juice, coriander, ginger.",
    "link": "https://heatonist.com/products/hellfire-fear-this",
    "manufacturer": "Hellfire Hot Sauce",
    "name": "Hellfire Hot Sauce",
    "originCountry": "united states of america",
    "peppers": "Reaper peppers",
    "scoville": "2000",
    "updatedAt": "2023-01-11T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-20T03:51:27.000+00:00",
    "description": "Looking to ruin your afternoon in the most delicious way possible? Then this is the sauce for you! With roughly 36 ghost peppers (bhut jolokia) in each bottle of sauce, the Dawson's XXX packs a wallop that sits with you for a while. But thankfully the flavor matches the heat bite for bite.As the heat slowly builds you have time to savor the pepper sweetness and rich, mouth coating flavor of ghost. Try it on a sandwich or a slice of pizza, or mixed into a stir fry or stew, or to add a much needed kick to some hummus.",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/1047102521353.jpg?v=1628202950&width=680",
    "ingredients": "Vinegar, dried ghost pepper, garlic, salt",
    "link": "https://heatonist.com/products/dawsons-xxx-ghost-pepper-mash",
    "manufacturer": "Dawson's Hot Sauce",
    "name": "XXX Ghost Pepper Mash",
    "originCountry": "united states of america",
    "peppers": "ghost pepper",
    "scoville": "2500",
    "updatedAt": "2023-01-11T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-19T03:51:27.000+00:00",
    "description": "If we’ve learned anything from 11 seasons of Hot Ones, it’s that our friends down under like it HOT, and this Aussie-made sauce with its mix of 6 different super-spicy peppers is no exception. Sourced from local farmers in three different climate zones across Western Australia, the secret mixture of super-hots are used for a variation of flavors and heat profiles. Add cider vinegar, citrus and a hint of sea salt and you have a delicious concoction that hits like a KO combination.",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/widowmaker.jpg?v=1628203011&width=680",
    "ingredients": "Chili peppers, cider vinegar, lime, garlic, brown sugar, sea salt",
    "link": "https://heatonist.com/products/dingo-sauce-co-widowmaker-1",
    "manufacturer": "Dingo Sauce Co",
    "name": "Widow Maker Hot Sauce",
    "originCountry": "united states of america",
    "peppers": "Chili peppers",
    "scoville": "5000",
    "updatedAt": "2023-01-11T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-18T03:51:27.000+00:00",
    "description": "Dustin Poirier is bringing the heat! The UFC fan favorite has partnered with Heartbeat Hot Sauce to create Poirier’s Louisiana Style, a hot sauce ode to his Lafayette, Louisiana roots. Like any good cajun sauce, the recipe starts with the best cayenne peppers, fermented to round out the sting and up the flavor before finishing with vinegar, sea salt, celery and garlic. Add in a handful of red habaneros for an extra punch of heat, and you have a knock out sauce that can take on everything from heavyweight meals like biscuits and gravy to featherweight dishes like grilled chicken breast or cauliflower pizza. #PaidInFull #ElDiamante",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/poirier1.jpg?v=1628212700&width=680",
    "ingredients": "Vinegar, aged cayenne peppers, sea salt, red habanero, celery, garlic, canola oil",
    "link": "https://heatonist.com/products/poiriers-louisiana-style-hot-sauce",
    "manufacturer": "Dustin Poirier’s Louisiana Style",
    "name": "Dustin Poirier's Louisiana Style Hot Sauce",
    "originCountry": "united states of america",
    "peppers": "cayenne peppers",
    "scoville": "500",
    "updatedAt": "2023-01-11T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-17T03:51:27.000+00:00",
    "description": "He’s #PaidinFull and bringing the pain! The second hot sauce from UFC favorite Dustin Poirier, this bruiser combines the original Cajun flavor with ghost pepper heat for a knockout kick. Aged cayenne and mouth-puckering white vinegar give this sauce its iconic Louisiana hot sauce taste, while celery, sea salt and garlic add more interesting flavors. The perfect hot sauce for spicing up all your favorite Louisiana classics: jambalaya, gumbo, shrimp & grits and more! Also delicious on wings, eggs, pizza and all your other fight night snacks and protein packed meal preps!",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/PoirierKOhotsauce.jpg?v=1629742014&width=680",
    "ingredients": "Vinegar, aged cayenne peppers, sea salt, red habanero, celery, garlic, Smokin' Ed's Ghost Pepper Powder, canola oil",
    "link": "https://heatonist.com/products/poiriers-louisiana-style-ko-edition",
    "manufacturer": "Dustin Poirier’s Louisiana Style",
    "name": "KO Edition",
    "originCountry": "united states of america",
    "peppers": "cayenne peppers, red habanero",
    "scoville": "2800",
    "updatedAt": "2023-01-11T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-16T03:51:27.000+00:00",
    "description": "Crafted in Chengdu, the heart of China’s Sichuan province, Sichuan Gold brings all the addicting umami notes of chili crisp to this hot sauce-meets-chili oil. Pungent aromatics like garlic and green onion actually take a backseat to the verdant floral flavor of the Sichuan peppercorn, which is enhanced by the nutty rapeseed oil. Sichuan Gold’s silky texture makes it ideal for marinating or for coating chicken wings. It can also be used as a finishing sauce for everything from dumplings to avocado toast to noodles. This hot sauce’s one-of-a-kind flavor is lighting up the fifth wing for Hot Ones Season 19!",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/Fly-By-Jing-Sichuan-Gold-Hot-Sauce-5-oz-1_2cb4af77-36bc-496f-864b-9037dffc382f.jpg?v=1663790675&width=680",
    "ingredients": "Non-GMO soybean oil, non-GMO sichuan rapeseed oil, chili peppers, sichuan peppers, ginger, garlic, rock sugar, star anise, cassia bark, green onions, chili oil extract",
    "link": "https://heatonist.com/products/sichuan-gold-fly-x-jing",
    "manufacturer": "Fly By Jing",
    "name": "Sichuan Gold",
    "originCountry": "united states of america",
    "peppers": "chili peppers, sichuan peppers",
    "scoville": "500",
    "updatedAt": "2023-01-11T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-15T03:51:27.000+00:00",
    "description": "Say “Aloha” to flavor with Hot Ones Season 18’s #2 sauce! A family business hailing from beautiful Hawaii, maker Adoboloco has infused this hot sauce with tropical flare thanks to fire-roasted pineapple. The caramelized pineapple takes on a whole new level of sweet goodness, then is blitzed with Cayenne peppers until it becomes silky smooth perfection. The perfect mild hot sauce for summer eats or when you want to be transported to an island paradise.",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/HOTONES-SEASON18Adoboloco.jpg?v=1652724983&width=680",
    "ingredients": "Pineapple, chili pepper, red wine vinegar, honey, onion powder, nutritional yeast, sea salt, mustard seed powder, spices",
    "link": "https://heatonist.com/products/adoboloco-island-wings-pineapple-cayenne-pepper-sauce",
    "manufacturer": "Adoboloco",
    "name": "Island Wings Pineapple Cayenne Pepper Hot Sauce",
    "originCountry": "united states of america",
    "peppers": "chili pepper",
    "scoville": "2000",
    "updatedAt": "2023-01-11T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-14T03:51:27.000+00:00",
    "description": "Keith Habersberger of The Try Guys is known for his love of fried chicken, especially buffalo wings and ranch. When he challenged HEATONIST to come up with a new hot sauce flavor concept this was a natural place to start. The resulting Keith’s Chicken Sauce channels iconic ranch flavors with dill, parsley, and chives, but sweetens them up with smoked onions, garlic scapes, and Vermont maple syrup. Vinegar, zippy serrano peppers and roasted red pepper add tang while sour cream powder adds a creamy texture that makes this a must-have condiment. Perfect on chicken of all kinds, this sauce cuts through rich foods like fries or a grilled cheese with ease. A must try on pizza!",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/Keith_shotsauce.jpg?v=1656427058&width=680",
    "ingredients": "Organic distilled vinegar, serrano peppers, maple wood smoked onions, pure Vermont maple syrup, garlic scapes, roasted red peppers ( red peppers, water, salt, citric acid) sunflower oil, sour cream powder ( sour cream powder cream cultures and lactic acid, cultured nonfat milk solids, citric acid) salt, dill, parsley, chives, black pepper",
    "link": "https://heatonist.com/products/keiths-chicken-sauce",
    "manufacturer": "Keith's",
    "name": "Keith's Chicken Sauce",
    "originCountry": "united states of america",
    "peppers": "serrano peppers, roasted red peppers",
    "scoville": "60",
    "updatedAt": "2023-01-11T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-13T03:51:27.000+00:00",
    "description": "Fresh Jalapeño gives this sauce a distinctly Baja zing, amplified by the clear flavors of white tequila & plenty of lime juice. What takes this sauce to the next level is the sweet/tart flavor that comes from the green apple. Try it with seafood dishes, or to punch-up a margarita.",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/840325627913.jpg?v=1628213049&width=680",
    "ingredients": "White vinegar, jalapeño peppers, onions, lime juice, apple cider vinegar w/ mother, tequila, garlic, green apple, ginger root, olive oil, salt, and spices.",
    "link": "https://heatonist.com/products/queen-majesty-jalapeno-tequila-lime-hot-sauce",
    "manufacturer": "Queen Majesty",
    "name": "Jalapeno Tequila Lime Hot Sauce",
    "originCountry": "united states of america",
    "peppers": "jalapeño peppers",
    "scoville": "200",
    "updatedAt": "2023-01-14T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-12T03:51:27.000+00:00",
    "description": "A new crowd favorite here at hot sauce HQ, the Humble House Ancho is a sauce that begs to be squeezed on everything. It's rich and smoky from the mild Morita pepper (a smoked red jalapeño) and slightly sweet from tamarind. This is a BBQ/hot sauce hybrid that works great on rice and beans and grilled meats. Or eggs. Or chicken. Or anything!",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/394375069705.jpg?v=1628209506&width=680",
    "ingredients": "Aged tamarind chili paste (raisins, tamarind concentrate, gluten-free soy sauce, balsamic vinegar, Morita chile, ancho chile, kosher salt), vinegar, cane sugar, fresh garlic",
    "link": "https://heatonist.com/products/humble-house-ancho-morita",
    "manufacturer": "Humble House",
    "name": "Ancho & Morita Hot Sauce",
    "originCountry": "united states of america",
    "peppers": "Morita chile, ancho chile",
    "scoville": "2000",
    "updatedAt": "2023-01-13T14:19:54.193Z"
  },{
    "addedBy": "63e63f130c6136cbc2ff5e88",
    "createdAt": "2023-01-11T03:51:27.000+00:00",
    "description": "Cosmic Dumpling gets its name from sauce maker Gene’s former career as an engineer for NASA satellites! The hot sauce lives up to its out-of-this-world name with supernova-sized, sweet and savory flavors thanks to tamari, orange juice, honey, and garlic, all getting liftoff from a healthy dose of sesame oil. Like a black hole, it pulls in everything in its path - dumplings, spring rolls, bao and more. Also makes a universally good glaze, on pork belly, salmon, tofu or more!",
    "image": "https://cdn.shopify.com/s/files/1/2086/9287/products/cosmic-dumpling.jpg?v=1622751529&width=680",
    "ingredients": "Rice wine vinegar, red jalapeno peppers, tamari (water, soybeans, salt, alcohol), brown sugar, orange juice, garlic, tomato paste (fresh tomatoes, naturally sourced citric acid), lemon juice, honey, sesame oil, ginger, culantro, orange zest",
    "link": "https://heatonist.com/products/karma-cosmic-dumpling",
    "manufacturer": "Karma Sauce",
    "name": "Cosmic Dumpling Hot Sauce",
    "originCountry": "united states of america",
    "peppers": "red jalapeno peppers",
    "scoville": "1500",
    "updatedAt": "2023-01-12T14:19:54.193Z"
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
