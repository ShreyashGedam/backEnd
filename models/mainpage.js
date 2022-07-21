const mongoose = require("mongoose")

const mainSchema = mongoose.Schema({
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

const MainpageModel = mongoose.model("main-page-one", mainSchema)

module.exports = MainpageModel