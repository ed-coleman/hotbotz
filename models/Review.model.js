const { Schema, model } = require("mongoose");
const Sauce = require("./Sauce.model");
const User = require("./User.model");

const reviewSchema = new Schema( 
    {
        sauce: {
            type: Schema.Types.ObjectId,
            ref: Sauce,
            required: true,
        },
        spiceLevel: {
            type: String,
            required: true,
            enum: ["🌶️", "🌶️🌶️", "🌶️🌶️🌶️", "🌶️🌶️🌶️🌶️", "🌶️🌶️🌶️🌶️🌶️"],
        },
        rating: { 
            type: String,
            required: true,
            enum: ["⭐️", "⭐️⭐️", "⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️⭐️"],
        },
        review: {
            type: String,
            maxLength: 400,
        },
        addedBy: {
            type: Schema.Types.ObjectId,
            ref: User,
    }
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }

)

const Review = model("Review", reviewSchema);

module.exports = Review;
