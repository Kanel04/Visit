const mongoose = require("mongoose");
const validator = require("validator");
//const User = require("./index");

const restaurantSchema = new mongoose.Schema(
{ 
    user:{
    type: mongoose.Schema.ObjectId,
    ref: "User",
   
      },

    name:{
        type : String,
        required: [true, "nom de votre restaurant"],
        unique: true ,

    },
    
    images: [String],
    
    table:{
        type: Number,
        required:[true, "nombre de vos tables"],
    },

    adresse:{
     type: String,
     required:[true,"adresse de votre restaurant"],
    },
    phone : {
        type: Number,
        required:[true , "votre numéro téléphone"]
    },

  email: {
    type: String,
    required: [true, "email de votre restaurant"],
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
