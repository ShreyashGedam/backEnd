const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    id : Number,
    name : String,
    description : String,
    cost : Number ,
    image : String,
    size : String,
    color : String,
    offer1 : String,
    offer2 : String,
    userId : String 
}) 

const CartModel = mongoose.model("carts",cartSchema)

module.exports = CartModel 