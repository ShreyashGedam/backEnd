const mongoose = require("mongoose")

const productsSchema = mongoose.Schema({
    id : Number,
    name : String,
    description : String,
    cost : Number ,
    image : String,
    size : String,
    color : String,
    offer1 : String,
    offer2 : String 
})

const ProductsModel = mongoose.model("products",productsSchema)

module.exports = ProductsModel 