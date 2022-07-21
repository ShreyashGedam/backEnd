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

const Mainpage2Model = mongoose.model("main-page-two", mainSchema)

module.exports = Mainpage2Model